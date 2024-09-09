// import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./SignInSignUp.css"

const SignInSignUp = () => {
    const [hovered, setHovered] = useState('');
  
    return (
      <div className="signPage">
        {/* Set hovered state when mouse cursor is in sign in */}
        <div
          className={`hoverState ${hovered === 'signIn' ? 'hover' : ''}`}
          onMouseEnter={() => setHovered('signIn')}
          onMouseLeave={() => setHovered('')}
        >
          <h2>Sign In</h2>
          <form className="formCreate">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
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
            <input type="email" placeholder="Email" />
            <input type="email" placeholder="Confirm Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    );
  };

export default SignInSignUp