import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase.js';
import { OrderItem } from './OrderItem';

function ItemList() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const itemsRef = ref(db, 'jobs'); // 'items' is the path to your data in the database
      
      onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        //console.log(data);
        //console.log(Object.keys(data));
        if (data) {
          // Convert the object to an array of items
          const itemList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
          }));
          console.log(itemList);
          setItems(itemList);
        }

      });
    
    }, []);
  
    return (
      <div>
        <h2>Items List</h2>
        <ul>
          {items.map(item => (
            <OrderItem jobType={item.jobType} startDate={item.startDate} description={item.description}/>
          ))}
        </ul>
      </div>
    );
}
  
export default ItemList;