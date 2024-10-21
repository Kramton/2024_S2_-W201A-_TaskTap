import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { SideBar } from "../Components/SideBar"; 
import './Review.css'; 

export function Review() {
  const { id } = useParams(); 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const reviewsRef = ref(db, `reviews/${id}`); 

    onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setReviews(Object.values(data)); 
      }
    });
  }, [id]);

  return (
    <div className="reviewPage">
      <SideBar />
      <div className="reviewWrap">
        <h2>Reviews for Professional ID: {id}</h2>
        <ul>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <li key={index}>{review}</li> 
            ))
          ) : (
            <li>No reviews found for this professional.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
