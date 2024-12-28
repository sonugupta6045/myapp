import React from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="logo.png" // Replace with your logo's path
          alt="Logo"
          className="logo"
        />
        <span>FormBot</span>
      </div>
      <div className="navbar-buttons">
        <button className="btn-signin">Sign in</button>
        <button className="btn-create">Create a FormBot</button>
      </div>
    </nav>
  );
};

export default Navbar;
