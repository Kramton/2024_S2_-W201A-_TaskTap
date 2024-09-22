import React from 'react';

export function OrderItem(props){

    return (
        <>  
            <div>
                <h4>{props.jobType}</h4>
                <div>{props.startDate}</div>
                <div>{props.description}</div>
            </div>
        </>
    );

}