import React from 'react';
import "./OrderItem.css"

export function OrderItem(props){

    return (
        <>  
            <div className='orderItemContainer'>
                <h4>Job Type: {props.jobType}</h4>
                <div className='startDate'>Start Date: {props.startDate}</div>
                <div className='orderItemDescription'>Description: {props.description}</div>
            </div>
        </>
    );

}