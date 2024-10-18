import React from 'react';
import './Professionals.css'; 
import { SideBar } from "../Components/SideBar";

export function Professionals() {
  return (
    <div className="professionalsPage">
      <SideBar />
      <div className="content">
        <h2>Professionals</h2>
        <p>Here you can find a list of professionals available for your service needs.</p>
        
      </div>
    </div>
  );
}

