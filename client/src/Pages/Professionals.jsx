import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Professionals.css';
import { SideBar } from "../Components/SideBar";

export function Professionals() {
  const [professionals, setProfessionals] = useState([
    { id: 1, name: 'Lebron James', jobType: 'Plumber' },
    { id: 2, name: 'Lionel Messi', jobType: 'Electrician' },
    { id: 3, name: 'Cristiano Ronaldo', jobType: 'Hair Stylist' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProfessionals = professionals.filter(professional =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h4>{professional.name}</h4>
              </Link>
              <p>Job Type: {professional.jobType}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
