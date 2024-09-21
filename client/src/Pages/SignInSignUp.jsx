// import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./SignInSignUp.css"
import {auth} from "../firebase.js"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage } from "../Components/ErrorMessage.jsx";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import bg from "../Assets/bg.mp4";

const SignInSignUp = (props) => {
    const [hovered, setHovered] = useState('');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleCredentials(e){
      setUserCredentials({...userCredentials, [e.target.name]: [e.target.value]});
    }

    function handleSignin(e){
      e.preventDefault();
      setError(null);
      signInWithEmailAndPassword(auth, userCredentials.email[0], userCredentials.password[0])
      .then((userCredential) => {
        // Signed in 
        props.setUserLoggedIn(userCredential.user);
        console.log(props.userLoggedIn);
        navigate('/Account');
        // ...
      })
      .catch((error) => {
      
        setError(error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });
    }

    function handleSignup(e){
      e.preventDefault();
      setError(null)
      createUserWithEmailAndPassword(auth, userCredentials.email[0], userCredentials.password[0])
        //Important: userCredentials.email is an array
        //with a single element. need to send the content of the element - a string
        //hence userCredentials.email[0]
        .then((userCredential) => {                                                              
          // Signed up 
          props.setUserLoggedIn(userCredential.user);
          console.log(props.userLoggedIn);
          navigate('/Account');
          // ...
        })
        .catch((error) => {
          setError(error.message)
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
    }

    //<input onChange={(e)=>handleCredentials(e)} type="email" name="emailconfirmation"placeholder="Confirm Email" />

    return (
      <div className="signPage">
        <div className="background">
                <video src={ bg } autoPlay loop muted></video>
            </div>

        {/* Set hovered state when mouse cursor is in sign in */}
        <div
          className={`hoverState ${hovered === 'signIn' ? 'hover' : ''}`}
          onMouseEnter={() => setHovered('signIn')}
          onMouseLeave={() => setHovered('')}
        >
          <h2>Sign In</h2>
          <form className="formCreate">
            <input onChange={(e)=>{handleCredentials(e)}} type="email" name="email" placeholder="Enter your email" />
            <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Enter your password" />
            {error && <ErrorMessage text={error}/>}
            <button type="submit" onClick={(e)=>handleSignin(e)}>Sign In</button>
          </form>
        </div>
        
        {/* Set hovered state when mouse cursor is in sign in */}
        <div
          className={`hoverState ${hovered === 'signUp' ? 'hover' : ''}`}
          onMouseEnter={() => setHovered('signUp')}
          onMouseLeave={() => setHovered('')}
        >
          <h2>Sign Up</h2>
          <form className="formCreate">
            <input onChange={(e)=>{handleCredentials(e)}} type="email" name="email" placeholder="Enter your email" />
            <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Enter a password" />
            {error && <ErrorMessage text={error}/>}
            <button type="submit" onClick={(e) => {handleSignup(e)}}>Create Account</button>
          </form>
        </div>
      </div>
    );
  };

export default SignInSignUp