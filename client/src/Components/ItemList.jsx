import React, { useState, useEffect } from 'react';
import { ref, onValue, remove, update } from 'firebase/database';
import { db } from '../firebase.js';
import { OrderItem } from './OrderItem';
import './ItemList.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); 

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

  
  const handleDelete = async (id) => {
    try {
      await update(ref(db, `jobs/${id}`), { status: "completed" }); 
      console.log(`Moved item with id: ${id} to order history`);
    } catch (error) {
      console.error('Error moving item to order history: ', error);
    }
  };
  


  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditItem(itemToEdit);
  };

  const handleSave = async (updatedItem) => {
    try {
      await update(ref(db, `jobs/${updatedItem.id}`), {
        jobType: updatedItem.jobType,
        startDate: updatedItem.startDate,
        description: updatedItem.description,
      });
      console.log(`Updated item with id: ${updatedItem.id}`);
      setEditItem(null);
    } catch (error) {
      console.error('Error updating item: ', error);
    }
  };

  return (
    <div className='itemListContainer'>
      <div className='itemListContent'>
        <h2>Items List</h2>
        {editItem ? (
          <div className='formContainer'> 
            <h3>Edit Item</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave(editItem);
              }}
            >
              <input
                type='text'
                value={editItem.jobType}
                onChange={(e) => setEditItem({ ...editItem, jobType: e.target.value })}
                placeholder='Job Type'
              />
              <input
                type='text'
                value={editItem.startDate}
                onChange={(e) => setEditItem({ ...editItem, startDate: e.target.value })}
                placeholder='Start Date'
              />
              <input
                type='text'
                value={editItem.description}
                onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                placeholder='Description'
              />
              <div className='formActions'>
                <button type='submit' className='saveButton'>Save</button>
                <button type='button' className='cancelButton' onClick={() => setEditItem(null)}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
  
}

export default ItemList;
