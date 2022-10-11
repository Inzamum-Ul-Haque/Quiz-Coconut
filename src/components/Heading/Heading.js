import React from "react";
import headingImage from "../../icons-images/heading-image.jpg";
import "./Heading.css";

const Heading = () => {
  return (
    <div>
      <div className="heading-container d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center d-lg-flex flex-lg-row justify-content-lg-center align-items-lg-center ">
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
