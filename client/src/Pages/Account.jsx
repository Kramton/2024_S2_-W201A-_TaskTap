// import { Link } from "react-router-dom"
import "./Account.css";
import { SideBar } from "../Components/SideBar";
import React, { useState } from "react";
import defaultProfile from "../Assets/defaultProfile.png";
import defaultbg from "../Assets/square.png";
//import { getAuth } from "firebase/auth";
import {auth} from "../firebase"
import {db} from "../firebase"
import { getDatabase, ref, set, update } from "firebase/database";



export function Account(props) {
    
    //const auth = getAuth();
    const user = auth.currentUser;

    const [name, setName] = useState(null);

    const [status, setStatus] = useState(null);

    const [email, setEmail] = useState(null);

    const [bio, setBio] = useState(null);

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
    };

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the image upload logic here
        console.log(image);
    };

    const handleChangeName = (e) => {
        const value = e.target.value;
        setName(value);
    };

    const handleEditName = (e) => {
        e.preventDefault();
        try{
           
            const updates = {};
            updates['/users/' + user.uid + '/userName'] = name;
            update(ref(db), updates);

        }catch(error){
            console.log(error.message);     
        }
    };

    const handleChangeStatus = (e) => {
        const  value = e.target.value;
        setStatus(value);
    }

    const handleEditStatus = (e) => {
        e.preventDefault();

        try{

            const updates = {};
            updates['/users/' + user.uid + '/userStatus'] = status;
            update(ref(db), updates);

          /*  set(ref(db, 'users/' + user.uid), {
                userStatus: status
            });*/

        }catch(error){
            console.log("Error:" + error.message);     
        }

    };

    /*const handleEditEmail = (e) => {
        e.preventDefault();

        try{

        }catch(error){
            console.log(error.message);     
        }

    };*/

    const handleChangeBio = (e) => {
        const value = e.target.value;
        setBio(value);
    }

    const handleEditBio = (e) => {
        e.preventDefault();
        try{
            const updates = {};
            updates['/users/' + user.uid + '/userBio'] = bio;
            update(ref(db), updates);
        }catch(error){
            console.log(error.message);     
        }

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
                        <form action="">
                            <label htmlFor="profilePicker">Edit</label>
                            <input id="profilePicker"className="changeProfile" type="file" style={{display: "none"}} accept="image/*" onChange={handleImageChange} />
                        </form>
                    </div>
                </div>
                
                <div className="profile-bg-section">
                    <img src={bgPreview || defaultbg} alt="background" className="background-image"/>
                    <div className="changebgButton">
                        <form action="">
                            <label htmlFor="bgPicker">Change background</label>
                            <input id="bgPicker" type="file" style={{display: "none"}} accept="image/*" onChange={bgChange} />
                        </form>
                    </div>
                </div>

                <div className="textContainer">
                    <div> Name: </div>
                    <div className="nameInput">
                        <form onSubmit={(e)=>handleEditName(e)}>
                            <input name="text" placeholder="Enter name" onChange={(e)=>handleChangeName(e)}/>
                            <button name="editStatus" className="saveButton" type="submit"> Save </button>
                        </form>
                    </div>
                    <div> Status </div>
                    <div className="statusInput">
                        <form onSubmit={(e) => handleEditStatus(e)}>
                            <select className="selectStatus" onChange={(e)=>handleChangeStatus(e)}>
                                <option>Client</option>
                                <option>Pro</option>     
                            </select>
                            <button name="editStatus" className="saveButton" type="submit">Save</button>
                        </form>
                    </div>

                   {/* <div className="emailInput">
                        <span>Email: {user.email}</span>
                        <form action="">
                            <input name="text" placeholder="newemail"/>
                            <button name="editStatus" className="saveButton" onClick={(e) => {handleEditEmail(e)}}>Save</button>
                        </form>
                    </div>*/}
                    <div> Display bio here </div>
                    <div className="bioInput">
                        {/* <input name="text" placeholder="Enter bio"/> */}
                        <form onSubmit={(e) => handleEditBio(e)}>
                            <textarea placeholder="Enter bio" onChange={(e)=>handleChangeBio(e)}></textarea>
                            <button name="editStatus" className="saveButton" type="submit">Save</button>
                        </form>
                    </div>

                    <div className="userReviews">
                        {/* reviews */}
                    </div>

                </div>

                <div className="contactInfo">
                    {/* contact information */}
                </div>
                
                <div className="accountStatus">
                    <form>
                        
                    </form>
                </div>

                {/* <button className="saveButton" onClick={handleSubmit}>Save Changes</button> */}
            </div>

            {/* <div className="userMedia">
                user media
            </div> */}

        </div>
    )
}
