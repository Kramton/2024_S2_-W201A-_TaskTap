import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase.js';

function ItemList() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const itemsRef = ref(db, 'jobs'); // 'items' is the path to your data in the database
      
      const unsubscribe = onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert the object to an array of items
          const itemList = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setItems(itemList);
        } else {
          setItems([]);
        }
      });
      

      return () => unsubscribe();
    }, []);
  
    return (
      <div>
        <h2>Items List</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
}
  
export default ItemList;