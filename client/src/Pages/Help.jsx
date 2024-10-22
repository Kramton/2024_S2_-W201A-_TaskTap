import "./Help.css";
import { Background } from "../Components/Background";
import { SideBar } from "../Components/SideBar";
import React, { useRef, useEffect } from 'react';

export function Help() {

    return (
        <div className="helpContainer">
            <SideBar />
            <Background />
            <br />

            <div className="helpWrap">
                <h1>Help</h1>
            </div>

            <br />

            <div className="howTo">
                <h2>How To Create An Order</h2>
                <p>Follow these 5 easy steps to create your first order!</p>
                <p><strong>Step 1:</strong> Click Account button</p>
                <p><strong>Step 2:</strong> Click New Orders button</p>
                <p><strong>Step 3:</strong> Fill in the details of your order!</p>
                <p><strong>Step 4:</strong> Click Save button</p>
                <p><strong>Step 5:</strong> Click Current Orders button</p>
            </div>
            
        </div>
    )
}