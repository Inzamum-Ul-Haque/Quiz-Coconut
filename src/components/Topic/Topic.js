import React from "react";
import { Col } from "react-bootstrap";

const Topic = ({ topic }) => {
  return (
    <Col xs={12} lg={4}>
      <h2>Name: {topic.name}</h2>
    </Col>
  );
};

export default Topic;
