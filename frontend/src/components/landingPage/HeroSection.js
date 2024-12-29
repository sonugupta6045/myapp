import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
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

      <div className="container">
        <div className="container-hero">
          <div className="header">
            <p>
              <span className="highlight">
                Build advanced chatbots 
                visually
              </span>
            </p>
            <p2 class="text">
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </p2>
            <button className="cta-button">
              {" "}
              <a class="text" href="#">
                Create a FormBot for free
              </a>
            </button>
            <div className="shape1">
            <img
              src="triangle.png" // Replace with your logo URL
              alt="Shape-1"
              
            />
            </div>
            <div className="shape2">
            <img
              src="arc.png" // Replace with your logo URL
              alt="Shape-2"
              
            />
            </div>
          </div>
          <div className="design-container">
          <div className="bg1">
            <img
              src="Background.png" // Replace with your logo URL
              alt="Backgroun-Blur"
              
            />
            </div>
            <div className="bg2">
            <img
              src="Background1.png" // Replace with your logo URL
              alt="Background-Blur"
              
            />
            </div>
            <div className="Figure">
            <img
              src="Figure.png" // Replace with your logo URL
              alt="Background-Blur"
              
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
