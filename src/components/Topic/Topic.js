import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  return (
    <Col xs={12} lg={3}>
      <Card>
        <Card.Img variant="top" src={topic.logo} />
        <Card.Body>
          <div className="d-flex justify-content-between my-2">
            <Card.Title>{topic.name}</Card.Title>
            <Card.Text>Total Question: {topic.total}</Card.Text>
          </div>
          <Link to={`/quiz/${topic.id}`}>
            <Button className="text-white" variant="primary w-100">
              Start <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Topic;
