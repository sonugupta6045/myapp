import React from "react";
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="logo.png" // Replace with your logo URL
              alt="FormBot Logo"
              className="footer-logo-image"
            />
            <span className="footer-logo-text">FormBot</span>
          </div>
          <p className="footer-made-with">
            Made with <span className="footer-heart">❤️</span> by{" "}
            <a href="https://cuvette.tech" className="footer-link">
              @cuvette
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Product</h4>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Status  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }}/>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Documentation
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }}/>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Roadmap
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing
               
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Community</h4>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Discord
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }}/>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                 GitHub repository
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }}/>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                 Twitter
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '8px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                LinkedIn
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}style={{ marginLeft: '8px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                OSS Friends
                
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
