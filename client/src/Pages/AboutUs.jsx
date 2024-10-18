import "./AboutUs.css";
import bg from "../Assets/bg.mp4";
import placeHolder from "../Assets/placeHolder.png";
import theTeam from "../Assets/TheTeam.png";
import React, { useRef, useEffect } from 'react';

export function AboutUs() {

    return (
        <div className="AboutUsContainer">

            <div className="background">
                <video src={bg} autoPlay loop muted></video>
            </div>

            <h1>About Us</h1>
            <div className="AboutUsWrap">
                <div className="AboutUsParagraph">
                    <p>
                        Welcome to TaskTap, Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Nostrum, similique? Quibusdam atque porro illum 
                        incidunt itaque illo sint nihil labore voluptas molestias, dicta 
                        doloribus harum libero at aspernatur quasi beatae.
                    </p>
                </div>
                <img className="placeHolderImage" src={placeHolder} alt="place holder" />
            </div>
          
            <h1>Our Mission</h1>
            <div className="AboutUsMissionWrap">
                <img className="placeHolderImage" src={placeHolder} alt="place holder" />
                <div className="AboutUsMissionParagraph">
                    <p>
                        At TaskTap, Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Nostrum, similique? Quibusdam atque porro illum 
                        incidunt itaque illo sint nihil labore voluptas molestias, dicta 
                        doloribus harum libero at aspernatur quasi beatae.
                    </p>
                </div>
            </div>
            
            <h1>Our Values</h1>
            <div className="AboutUsValuesWrap">
                <div className="AboutUsValuesList">
                    <ul>
                        <li><strong>Efficiency:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                        <li><strong>Collaboration:</strong> Nostrum, similique? Quibusdam atque porro illum incidunt itaque illo sint nihil labore voluptas molestias,</li>
                        <li><strong>Innovation:</strong> dicta doloribus harum libero at aspernatur quasi beatae.</li>
                    </ul>
                </div>
                <img className="placeHolderImage" src={placeHolder} alt="place holder" />
            </div>
            
            <h1>Meet the Team</h1>
            <div className="AboutUsTeamWrap">
                <img className="theTeamImage" src={theTeam} alt="The Team" />
                <div className="AboutUsTeamParagraph">
                    <p>
                        TaskTap is built by a passionate group of developers, designers, and productivity enthusiasts
                        who are dedicated to creating an intuitive, user-friendly experience. Our team is always working
                        on new features and improvements to make TaskTap the best platform it can be.
                    </p>
                </div>
            </div>

            <h1>Contact Us</h1>
            <div className="AboutUsContactWrap">
                <div className="AboutUsContactParagraph">
                    <p>
                        We'd love to hear from you! Whether you have feedback, questions, or just want to say hi,
                        feel free to reach out to us at <a href="mailto:support@tasktap.com">support@tasktap.com</a>.
                    </p>
                </div>
                <img className="placeHolderImage" src={placeHolder} alt="place holder" />
            </div>
        </div>
    )
}