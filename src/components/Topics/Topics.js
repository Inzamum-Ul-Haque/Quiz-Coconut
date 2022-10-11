import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const loadedData = useLoaderData();
  const { data } = loadedData;

  return (
    <div className="mt-4 topics-container">
      <h2>Topics</h2>
      <div className="my-5">
        <Row className="gx-3 gy-4">
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Topics;
