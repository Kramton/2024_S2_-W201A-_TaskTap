import "./Help.css";
import { Background } from "../Components/Background";
import { SideBar } from "../Components/SideBar";
import React, { useRef, useEffect } from 'react';

export function Help() {

    return (
        <div className="helpContainer">
            <SideBar />
            <Background />
            <h1>Help</h1>
        </div>
    )
}