import React from 'react';
import { useParams } from 'react-router-dom';
import './Review.css'; 
import { SideBar } from "../Components/SideBar";

export function Review() {
    const { professionalId } = useParams(); 
    
    const professionalData = {
        1: { name: 'Lebron James', reviews: ['Great service!', 'Very punctual.'] },
        2: { name: 'Lionel Messi', reviews: ['Excellent work!', 'Highly recommend!'] },
        3: { name: 'Cristiano Ronaldo', reviews: ['Friendly and skilled!', 'Will hire again.'] },
    };

    const professional = professionalData[professionalId];

    return (
        <div className="reviewPage">
            <SideBar />
            <div className="reviewWrap">
                <h2>Reviews for {professional.name}</h2>
                <ul>
                    {professional.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}
