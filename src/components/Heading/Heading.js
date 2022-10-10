import React from "react";
import headingImage from "../../icons-images/heading-image.jpg";
import "./Heading.css";

const Heading = () => {
  return (
    <div>
      <div className="heading-container">
        <h2>
          Test Your <span>Skills</span> <br />
          <span>Judge</span> Yourself
        </h2>
        <img src={headingImage} alt="" />
      </div>
    </div>
  );
};

export default Heading;
