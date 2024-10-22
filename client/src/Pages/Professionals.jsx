import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Professionals.css';
import { SideBar } from "../Components/SideBar";
import { db, auth } from '../firebase'; 
import { ref, onValue, push } from 'firebase/database';

export function Professionals() {
  const [professionals, setProfessionals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPro, setSelectedPro] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

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

  const handleProposeJob = (pro) => {
    setSelectedPro(pro);
    setShowModal(true);
  };

  const handleJobSubmit = async () => {
    if (selectedPro && jobDescription) {
      
      await push(ref(db, 'jobs'), {
        proId: selectedPro.id,
        clientId: auth.currentUser?.uid, 
        jobType: 'Custom Job', 
        description: jobDescription,
        status: 'current', 
        startDate: new Date().toISOString(), 
      });

      // Clear the modal
      setShowModal(false);
      setJobDescription('');
      alert(`Job proposed to ${selectedPro.userName}`);
    }
  };

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
              <button 
                className="proposeJobButton" 
                onClick={() => handleProposeJob(professional)}
              >
                Propose a Job
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="jobProposalModal">
          <div className="modalContent">
            <h3>Propose a Job to {selectedPro?.userName}</h3>
            <textarea
              placeholder="Describe the job you want to propose..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="jobDescriptionInput"
            />
            <button onClick={handleJobSubmit}>Submit Job Proposal</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
