import { Link } from "react-router-dom";
import "./NavBar.css"
import Logo from "../Assets/TaskTapLogo.png"
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
                <img src={Logo} alt="TaskTap Logo" />
            </a>
            
            {
                props.userLoggedIn != null
                ? 
                <Link to="/">
                    <button onClick={(e)=>handleLogout(e)}>Sign Out</button>
                </Link>
                :
                <Link to="/SignInSignUp">
                    <button>Sign In</button>
                </Link>
            }

            {/* Place holder button for sprint 2 perhaps */}
            <button>About Us</button>

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