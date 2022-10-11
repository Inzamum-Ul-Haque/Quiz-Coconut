import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const { data } = useLoaderData();
  const { questions } = data;

  return (
    <div className="container quiz-container">
      <h2 className="my-3">Quiz of {data.name}</h2>
      <div className="row px-3 my-5">
        <div className="col-8 p-0">
          <div>
            {questions.map((question, idx) => (
              <Question key={question.id} question={question} idx={idx} />
            ))}
          </div>
        </div>
        <div className="col-4 p-0">Here will be summary</div>
      </div>
    </div>
  );
};

export default Quiz;
