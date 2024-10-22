import React, { useState, useEffect } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../firebase.js'; 
import { OrderItem } from '../Components/OrderItem'; 
import { SideBar } from '../Components/SideBar'; 
import './CurrentOrder.css';

export function CurrentOrder() {
  const [currentOrders, setCurrentOrders] = useState([]);

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

  return (
    <div className="currentOrderContainer">
      <SideBar /> {}
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
                onEdit={() => {}}
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
    </div>
  );
}
