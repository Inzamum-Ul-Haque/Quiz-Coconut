import React from "react";
import "./Error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center error-container">
      <h2>
        404 Error!! Route not found!!{" "}
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </h2>
      <p>
        Oopss!! Seems like you're looking for something that doesn't exist here!
      </p>
    </div>
  );
};

export default Error;
