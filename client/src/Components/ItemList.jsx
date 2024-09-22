import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../firebase.js';
import { OrderItem } from './OrderItem';
import './ItemList.css';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = ref(db, 'jobs');

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setItems(itemList);
      }
    });
  }, []);

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await remove(ref(db, `jobs/${id}`));
      console.log(`Deleted item with id: ${id}`);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  // Function to handle edit
  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
    // Logic for editing can be added here, like opening a form to edit the job
  };

  return (
    <div className='itemListContainer'>
      <div className='itemListContent'>
        <h2>Items List</h2>
        <ul>
          {items.map((item) => (
            <OrderItem
              key={item.id}
              id={item.id}
              jobType={item.jobType}
              startDate={item.startDate}
              description={item.description}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
