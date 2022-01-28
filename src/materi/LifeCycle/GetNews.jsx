import { Card, Col } from "react-bootstrap";
import React from "react";

const GetNews = (props) => {
  return (
    <Col md={3} className="my-4">
      <Card>
        <Card.Img variant="top" src={props.urlToImage} />
        <Card.Body className="news-card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.author} - {props.publishedAt}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <a href={props.url} className="btn btn-primary" type="submit">
            Read more..
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GetNews;
