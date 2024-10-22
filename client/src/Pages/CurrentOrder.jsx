import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../firebase.js'; 
import { OrderItem } from '../Components/OrderItem'; 
import { SideBar } from '../Components/SideBar'; 
import './CurrentOrder.css';

export function CurrentOrder() {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);

  useEffect(() => {
    const itemsRef = ref(db, 'jobs');
    
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const currentOrderList = Object.keys(data)
          .filter(key => data[key].status === 'current') 
          .map(key => ({
            id: key,
            ...data[key],
          }));
        setCurrentOrders(currentOrderList);
      } else {
        setCurrentOrders([]); 
      }
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await update(ref(db, `jobs/${id}`), {
        status: 'history',
      });
      console.log(`Moved item with id: ${id} to history`);
    } catch (error) {
      console.error('Error moving item to history: ', error);
    }
  };

  const handleEdit = (order) => {
    setEditOrder(order);
  };

  const handleSave = async () => {
    if (editOrder) {
      try {
        await update(ref(db, `jobs/${editOrder.id}`), {
          jobType: editOrder.jobType,
          startDate: editOrder.startDate,
          description: editOrder.description,
        });
        console.log(`Updated order with id: ${editOrder.id}`);
        setEditOrder(null);
      } catch (error) {
        console.error('Error updating order: ', error);
      }
    }
  };

  const handleCancel = () => {
    setEditOrder(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  return (
    <div className="currentOrderContainer">
      <SideBar />
      <h1>Current Orders</h1>
      <div className="currentOrderList">
        {currentOrders.length > 0 ? (
          <ul>
            {currentOrders.map((order) => (
              <OrderItem
                key={order.id}
                id={order.id}
                jobType={order.jobType}
                startDate={order.startDate}
                description={order.description}
                onEdit={() => handleEdit(order)}
                onDelete={async (id) => {
                  await handleDelete(id);
                }}
              />
            ))}
          </ul>
        ) : (
          <p className="noOrdersMessage">No current orders found.</p>
        )}
      </div>

      {editOrder && (
        <>
          <div className="formOverlay" onClick={handleCancel}></div>
          <div className="formContainer">
            <h3>Edit Order</h3>
            <form>
              <input
                type="text"
                name="jobType"
                value={editOrder.jobType}
                onChange={handleChange}
                placeholder="Job Type"
              />
              <input
                type="date"
                name="startDate"
                value={editOrder.startDate}
                onChange={handleChange}
                placeholder="Start Date"
              />
              <textarea
                name="description"
                value={editOrder.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </form>
            <div className="formActions">
              <button className="saveButton" onClick={handleSave}>Save</button>
              <button className="cancelButton" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
