import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const loadedData = useLoaderData();
  const { data } = loadedData;

  return (
    <div className="mt-4">
      <h2>Topics</h2>
      <div>
        <Row>
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Topics;
