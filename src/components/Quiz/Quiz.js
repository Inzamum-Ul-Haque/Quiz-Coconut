import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Quiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const { data } = useLoaderData();
  const [rightAnswer, setRightAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const { questions } = data;

  const showToast = (rightOption, quesId) => {
    if (rightOption) {
      toast.success("Right answer!! 😃");
      storeResult(quesId, 1);
    } else {
      toast.error("Wrong answer!! 😢");
      storeResult(quesId, 0);
    }
  };

  // function for storing result in the localStorage
  let quizResult = {};
  const storeResult = (quesId, res) => {
    if (quesId in quizResult) {
      quizResult[quesId] = res;
    } else {
      quizResult = { ...quizResult, [quesId]: res };
    }
  };

  const showResult = () => {
    for (const id in quizResult) {
      if (quizResult[id]) {
        setRightAnswer((prev) => prev + 1);
      } else {
        setWrongAnswer((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="container quiz-container">
      <h2 className="my-3">Quiz of {data.name}</h2>
      <div className="row flex-sm-column-reverse flex-lg-row px-3 my-5">
        <div className="col-lg-9 col-sm-12 p-0">
          <div>
            {questions.map((question, idx) => (
              <Question
                key={question.id}
                question={question}
                idx={idx}
                showToast={showToast}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 p-0">
          <div className=" rounded-2 m-3 summary-container p-4">
            <h2>Summary</h2>
            <div className="d-flex justify-content-center my-3">
              <h4 className="me-2 correct">Correct: </h4>
              <h4 className="correct">{rightAnswer}</h4>
            </div>
            <div className="d-flex justify-content-center my-3">
              <h4 className="me-2 wrong">Wrong: </h4>
              <h4 className="wrong">{wrongAnswer}</h4>
            </div>
            <button className="btn" onClick={showResult}>
              Click to see result
            </button>
          </div>
        </div>
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

export default Quiz;
