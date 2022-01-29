import { Card, Col } from "react-bootstrap";
import React from "react";

const BuGetNews = (props) => {
  return (
    <Col md={3} className="my-4">
      <Card>
        <Card.Img variant="top" src={props.thumbnailUrl} />
        <Card.Body className="news-card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.id}</Card.Text>
          <a href={props.url} className="btn btn-primary" type="submit">
            Read more..
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BuGetNews;
