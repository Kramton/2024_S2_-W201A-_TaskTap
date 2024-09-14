import { Link } from "react-router-dom";
import "./NavBar.css"
import homerchu from "../Assets/homerchu.png"
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js"
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react"

export function Navbar(props) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    
    function handleLogout(e){
        console.log("Log out requested!");
        //add firebase logout function here
        //set props.setUserLoggedIn(null)
        signOut(auth).then(() => {
            // Sign-out successful.
           
            props.setUserLoggedIn(null);
            navigate("/");
        }).catch((error) => {
            setError(error.message)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }



    return (
        <div className="navBarWrap">
            <a href="./">
                <img src={homerchu} alt="fused homer pikachu" />
            </a>

            {
                props.userLoggedIn != null
                ? 
                <Link to="/">
                    <button onClick={(e)=>handleLogout(e)}>Signout</button>
                </Link>
                :
                <Link to="/SignInSignUp">
                    <button>SignUp</button>
                </Link>
            }

            {
                props.userLoggedIn 
                &&
                <Link to="/Account">
                    <button>Account</button>
                </Link>
            }

            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}