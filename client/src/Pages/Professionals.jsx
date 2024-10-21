import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Professionals.css';
import { SideBar } from "../Components/SideBar";
import { db } from '../firebase'; 
import { ref, onValue } from 'firebase/database';

export function Professionals() {
  const [professionals, setProfessionals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const professionalsRef = ref(db, 'users'); 

    onValue(professionalsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        
        const proList = Object.keys(data)
          .map(key => ({ id: key, ...data[key] }))
          .filter(professional => professional.userStatus === 'Pro');

        setProfessionals(proList);
      }
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProfessionals = professionals.filter(professional =>
    professional.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="professionalsPage">
      <SideBar />
      <div className="proContent">
        <h2>Professionals</h2>
        <input 
          type="text" 
          placeholder="Search for professionals..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="searchBar"
        />
        <div className="professionalList">
          {filteredProfessionals.map(professional => (
            <div key={professional.id} className="professionalItem">
              <Link to={`/Review/${professional.id}`}>
                <h4>{professional.userName}</h4>
              </Link>
              <p>Bio: {professional.userBio}</p> 
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
