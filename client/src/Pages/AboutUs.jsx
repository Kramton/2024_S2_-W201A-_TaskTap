import "./AboutUs.css";
import bg from "../Assets/bg.mp4";
import placeHolder from "../Assets/placeHolder.png";
import React from "react";

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
                <img src={placeHolder} alt="place holder" />
            </div>
          
            <h1>Our Mission</h1>
            <div className="AboutUsMission">
                <p>
                    At TaskTap, Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Nostrum, similique? Quibusdam atque porro illum 
                    incidunt itaque illo sint nihil labore voluptas molestias, dicta 
                    doloribus harum libero at aspernatur quasi beatae.
                </p>
            </div>
          
            <h1>Our Values</h1>
            <div className="AboutUsValues">
                <ul>
                    <li><strong>Efficiency:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li><strong>Collaboration:</strong> Nostrum, similique? Quibusdam atque porro illum incidunt itaque illo sint nihil labore voluptas molestias,</li>
                    <li><strong>Innovation:</strong> dicta doloribus harum libero at aspernatur quasi beatae.</li>
                </ul>
            </div>
          
            <h1>Meet the Team</h1>
            <div className="AboutUsTeam">
                <p>
                    TaskTap is built by a passionate group of developers, designers, and productivity enthusiasts
                    who are dedicated to creating an intuitive, user-friendly experience. Our team is always working
                    on new features and improvements to make TaskTap the best platform it can be.
                </p>
            </div>

            <h1>Contact Us</h1>
            <div className="AboutUsContact">
                <p>
                    We'd love to hear from you! Whether you have feedback, questions, or just want to say hi,
                    feel free to reach out to us at <a href="mailto:support@tasktap.com">support@tasktap.com</a>.
                </p>
            </div>
        </div>
    )
}