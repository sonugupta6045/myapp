import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleBack = () => {
    window.history.back();  // Navigate to the previous page in the browser history
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords and Confirm Password Should be match !');
    } else {
      setError('');
      // Proceed with form submission (e.g., sending data to server)
      window.location.href = "/signup-success";
    }
  };

  return (
    <div className="signup-container">
      <img className="ellipse" src="/Ellipse 1.png" alt="Ellipse 1" />
      <button className="back-button" onClick={handleBack}>
        ←
      </button>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="label-text">Username</label>
        <input
          type="text"
          autoFocus
          placeholder="Enter a username"
          name="username"
          required
        />
        <label className="label-text">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label className="label-text">Password</label>
        <input
          type="password"
          placeholder="*********"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <label className="label-text1">Confirm Password</label>
        <input
          type="password"
          placeholder="*********"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <p>OR</p>
        <button
          type="button"
          className="google-signup-btn"
        >
          <img
            className="google-logo"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
          />
          Sign Up with Google
        </button>
        <p>
          Already have an account?{" "}
          <a href="/login" className="login-link">
            Login
          </a>
        </p>
      </form>
      <img className="polygon" src="Group.png" alt="Polygon" />
      <img className="ellipse2" src="/Ellipse 2.png" alt="Ellipse 2" />
    </div>
  );
};

export default Signup;
