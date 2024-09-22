import React from 'react';
import './OrderItem.css';

export function OrderItem({ id, jobType, startDate, description, onEdit, onDelete }) {
  return (
    <div className='orderItemContainer'>
      <h4>Job Type: {jobType}</h4>
      <div className='startDate'>Start Date: {startDate}</div>
      <div className='orderItemDescription'>Description: {description}</div>
      <div className='itemActions'>
        <button className='editButton' onClick={() => onEdit(id)}>Edit</button>
        <button className='deleteButton' onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}
