import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database'; 
import { db } from '../firebase.js'; 
import { OrderItem } from '../Components/OrderItem'; 
import { SideBar } from '../Components/SideBar'; 
import './OrderHistory.css';

export function OrderHistory() {
  const [historyOrders, setHistoryOrders] = useState([]);

  useEffect(() => {
    const itemsRef = ref(db, 'jobs');
    
    
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        
        const historyOrderList = Object.keys(data)
          .filter(key => data[key].status === 'history') 
          .map(key => ({
            id: key,
            ...data[key],
          }));
        setHistoryOrders(historyOrderList);
      } else {
        setHistoryOrders([]); 
      }
    });
  }, []);

  
  const handleDelete = async (id) => {
    try {
      
      await remove(ref(db, `jobs/${id}`));
      console.log(`Deleted item with id: ${id}`);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  return (
    <div className="orderHistoryContainer">
      <SideBar /> {}
      <h1>Order History</h1>
      <div className="orderHistoryList">
        {historyOrders.length > 0 ? (
          <ul>
            {historyOrders.map((order) => (
              <OrderItem
                key={order.id}
                id={order.id}
                jobType={order.jobType}
                startDate={order.startDate}
                description={order.description}
                onEdit={() => {}}
                onDelete={handleDelete} 
              />
            ))}
          </ul>
        ) : (
          <p>No order history found.</p>
        )}
      </div>
    </div>
  );
}
