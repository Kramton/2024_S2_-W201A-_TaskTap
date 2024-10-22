// import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./SignInSignUp.css"
import {auth} from "../firebase.js"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage } from "../Components/ErrorMessage.jsx";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import bg from "../Assets/bg.mp4";
import {db} from "../firebase"
import { ref, set } from "firebase/database";


const SignInSignUp = (props) => {
    const [hovered, setHovered] = useState('');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState(null);
    const [isServiceProvider, setIsServiceProvider] = useState(false);
    const navigate = useNavigate();

    function handleCredentials(e){
      setUserCredentials({...userCredentials, [e.target.name]: [e.target.value]});
    }

    function handleSignin(e){
      e.preventDefault();
      setError(null);
      signInWithEmailAndPassword(auth, userCredentials.email[0], userCredentials.password[0])
      .then((userCredential) => {
        props.setUserLoggedIn(userCredential.user);
        navigate('/Account');
      })
      .catch((error) => {
        setError(error.message)
        console.log(error.code, error.message);
      });
    }

    function handleSignup(e){
      e.preventDefault();
      setError(null)
      createUserWithEmailAndPassword(auth, userCredentials.email[0], userCredentials.password[0])
        .then((userCredential) => {                                                              
          props.setUserLoggedIn(userCredential.user);
          navigate('/Account');
          set(ref(db, 'users/' + userCredential.user.uid), {
            userName: userCredential.user.uid,
            userStatus: isServiceProvider ? "Service Provider" : "Client",
            userBio: "Empty"
          });
        })
        .catch((error) => {
          setError(error.message)
          console.log(error.code, error.message);
        });
    }

    return (
      <div className="signPage">
        <div className="background">
          <video src={ bg } autoPlay loop muted></video>
        </div>

        <div
          className={`hoverState ${hovered === 'signIn' ? 'hover' : ''}`}
          onMouseEnter={() => setHovered('signIn')}
          onMouseLeave={() => setHovered('')}
        >
          <h2>Sign In</h2>
          <form className="formCreate">
            <input onChange={handleCredentials} type="email" name="email" placeholder="Enter your email" />
            <input onChange={handleCredentials} type="password" name="password" placeholder="Enter your password" />
            {error && <ErrorMessage text={error}/>}
            <button type="submit" onClick={handleSignin}>Sign In</button>
          </form>
        </div>
        
        <div
          className={`hoverState ${hovered === 'signUp' ? 'hover' : ''}`}
          onMouseEnter={() => setHovered('signUp')}
          onMouseLeave={() => setHovered('')}
        >
          <h2>Sign Up</h2>
          <form className="formCreate">
            <input onChange={handleCredentials} type="email" name="email" placeholder="Enter your email" />
            <input onChange={handleCredentials} type="password" name="password" placeholder="Enter a password" />
            <label className="checkboxLabel">
              <input 
                type="checkbox" 
                onChange={(e) => setIsServiceProvider(e.target.checked)} 
              />
              Would you like to provide a service?
            </label>
            {error && <ErrorMessage text={error}/>}
            <button type="submit" onClick={handleSignup}>Create Account</button>
          </form>
        </div>
      </div>
    );
};

export default SignInSignUp;
