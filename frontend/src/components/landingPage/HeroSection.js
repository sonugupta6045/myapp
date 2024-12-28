import React from "react";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="container">
      <div className="header">
        <p>
          <span className="highlight">Build advanced chatbots visually</span> 
        </p>
        <p2>
          Typebot gives you powerful blocks to create unique chat experiences.
          Embed them anywhere on your web/mobile apps and start collecting
          results like magic.
        </p2>
        <button className="cta-button"> <a class="text" href="#">Create a FormBot for free</a></button>
      </div>
      <div className="design-container">
        {/* Triangle image */}
        <img src="triangle.png" alt="Triangle" className="triangle" />
        {/* Arc image */}
        <img src="arc.png" alt="Arc" className="arc" />
        {/* Flow design placeholder */}
        <img src="/path-to-flow-design.png" alt="Flow Design" className="flow-design" />
      </div>
    </div>
  );
};

export default HeroSection;
