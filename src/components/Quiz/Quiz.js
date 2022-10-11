import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Quiz.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const { data } = useLoaderData();
  const { questions } = data;

  const showToast = (rightOption) => {
    if (rightOption) {
      toast.success("Right answer!! 😃");
    } else {
      toast.error("Wrong answer!! 😢");
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
        <div className="col-lg-3 col-sm-12 p-0">Here will be summary</div>
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
