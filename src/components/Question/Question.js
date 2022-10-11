import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Question.css";

const Question = ({ question, idx }) => {
  const { options } = question;

  return (
    <div className=" rounded-3 p-3 mb-4 question-container">
      <div>
        <p className="text-center">
          <b>
            Quiz:{idx + 1} {question.question}
          </b>
        </p>
      </div>
      <div>
        <Row className="text-start">
          {options.map((option, _id) => (
            <Col key={_id} lg={6} className=" gy-4">
              <div className="border border-info p-4 rounded-3 d-flex fw-bold">
                <input
                  className="me-2"
                  type="radio"
                  name={`quiz ${idx + 1}`}
                  id={idx + 1}
                  value={option}
                />
                <label htmlFor={`quiz ${idx + 1}`}>{option}</label>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Question;
