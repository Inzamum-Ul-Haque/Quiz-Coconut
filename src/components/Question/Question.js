import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, idx, showToast }) => {
  const { options } = question;
  let rightOption = false;

  // function for getting the selected value from the option
  const handleChange = (e) => {
    const { value } = e.target;

    if (value === question.correctAnswer) {
      rightOption = true;
    } else {
      rightOption = false;
    }
    showToast(rightOption, question.id);
  };

  const showAnswer = () => {
    toast.info(`Correct Answer: ${question.correctAnswer}`);
  };

  return (
    <div className=" rounded-3 p-4 mb-4 question-container">
      <div className="question">
        <FontAwesomeIcon
          onClick={showAnswer}
          icon={faEye}
          className="eye-icon"
        />
        <p className="text-start">
          <b>
            Quiz:{idx + 1} {question.question}
          </b>
        </p>
      </div>
      <div>
        <Row className="text-start">
          {options.map((option, _id) => (
            <Col key={_id} lg={6} className="gy-4">
              <div className="border border-info p-4 rounded-3 d-flex fw-bold h-100 align-items-center">
                <input
                  className="me-2"
                  type="radio"
                  name={`quiz ${idx + 1}`}
                  id={idx + 1}
                  value={option}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor={`quiz ${idx + 1}`}>{option}</label>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Question;
