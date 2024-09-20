// import { Link } from "react-router-dom"
import "./Account.css";
import { SideBar } from "../Components/SideBar";
import React, { useState } from "react";
import defaultProfile from "../Assets/defaultProfile.png";
import defaultbg from "../Assets/square.png";

export function Account(props) {
    
    // profile picture
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    // background image
    const [bg, setbg] = useState(null);
    const [bgPreview, setbgPreview] = useState(null);

    // Function to handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Generate a preview of the uploaded image
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const bgChange = (e) => {
        const file = e.target.files[0];
        setbg(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setbgPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the image upload logic here
        console.log(image);
    };

    return (
        <div className="accountContainer">
            <SideBar/>
            <div className="content">
                {/* <h1>Account</h1> */}
                {/*
                    props.userLoggedIn
                    show authenticated user credetials here*/
                }
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim cupiditate maxime, cum at voluptas ducimus placeat accusamus quis distinctio quia sed modi odit voluptatum omnis incidunt praesentium. At, temporibus.</p> */}
                
                <div className="profile-picture-section">
                    <img src={preview || defaultProfile} alt="Profile" className="profile-picture"/>
                    <div className="changeProfileButton">
                        <label htmlFor="profilePicker">Edit</label>
                        <input id="profilePicker"className="changeProfile" type="file" style={{display: "none"}} accept="image/*" onChange={handleImageChange} />
                    </div>
                </div>


                <div className="nameInput">
                        
                </div>
                
                <div className="profile-bg-section">
                    <img src={bgPreview || defaultbg} alt="background" className="background-image"/>
                    <div className="changebgButton">
                        <label htmlFor="bgPicker">Change background</label>
                        <input id="bgPicker" type="file" style={{display: "none"}} accept="image/*" onChange={bgChange} />
                    </div>
                </div>
                
                {/* <button className="saveButton" onClick={handleSubmit}>Save Changes</button> */}
            </div>
        </div>
    )
}
