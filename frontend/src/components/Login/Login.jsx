import React from 'react'
import './Signup.css';
const Login = () => {
  const handleBack = () => {
    window.history.back();   // Navigate to the previous page in the browser history
   } 
  return (
    <div className="signup-container">
    <img className='ellipse' src="/Ellipse 1.png" alt=" Ellipse 1" />
    <button className="back-button" onClick={handleBack}>
      ←
    </button>
    <form className="signup-form">
      
      <label className='label-text'>Email</label>
      <input type="email"  autoFocus placeholder="Enter your email" name="email" required />
      <label className='label-text'>Password</label>
      <input type="password" placeholder="*********" name="password"  required/>
     
     
      <button
        type="button"
        className="signup-btn"
        onClick={() => (window.location.href = "/signup-success")}
      >
        Sign Up
      </button>
      <p>OR</p>
      <button
        type="button"
        className="google-signup-btn"
        
      >
        <img  className ="google-logo " src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
        Sign Up with Google
      </button>
      <p>
        Already have an account?{" "}
        <a href="/signup" className="login-link">
          Register Now
        </a>
      </p>
    </form>
    <img className='polygon' src="Group.png" alt=" Ellipse 1" />
    <img className='ellipse2' src="/Ellipse 2.png" alt=" Ellipse 2" />
  </div>
  );
}

export default Login
