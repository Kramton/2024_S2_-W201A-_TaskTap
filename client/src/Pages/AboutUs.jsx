import "./AboutUs.css";
import bg from "../Assets/bg.mp4";
import taskTapLogo from "../Assets/TaskTapLogoVertical.png";
import ourMission from "../Assets/OurMission.png";
import ourValues from "../Assets/OurValues.png";
import contact from "../Assets/ContactUs.png";
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
                        Welcome to TaskTap! TaskTap is your go-to platform for on-demand services. 
                        Whether you need a quick haircut, plumbing help, or electrical fixes. 
                        TaskTap connects you with local professionals instantly.
                    </p>
                </div>
                <img className="image" src={taskTapLogo} alt="TaskTap Logo" />
            </div>
          
            <h1>Our Mission</h1>
            <div className="AboutUsMissionWrap">
                <img className="image" src={ourMission} alt="Our Mission" />
                <div className="AboutUsMissionParagraph">
                    <p>
                        At TaskTap, we allow individuals to request or to provide professional
                        services. We strive to make individuals to allow for accessible and easy 
                        to use interface.
                    </p>
                </div>
            </div>
            
            <h1>Our Values</h1>
            <div className="AboutUsValuesWrap">
                <div className="AboutUsValuesList">
                    <p>
                        <strong>Trust & Safety:</strong> We are committed to provide a secure platform for users to use as a professional service.
                    </p>
                    <br />
                    <p>
                        <strong>Convenience & Accessibility:</strong> Our platform is designed to be user-friendly and easy to use for everyone.
                    </p>
                    <br />
                    <p>
                        <strong>Client-Driven:</strong> We listen to our clients needs and prioritize their feedback to make our platform better.
                    </p>
                </div>
                <img className="image" src={ourValues} alt="Our Values" />
            </div>
            
            <h1>Meet the Team</h1>
            <div className="AboutUsTeamWrap">
                <img className="image" src={team} alt="The Team" />
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
                <img className="image" src={contact} alt="contact image" />
            </div>
        </div>
    )
}