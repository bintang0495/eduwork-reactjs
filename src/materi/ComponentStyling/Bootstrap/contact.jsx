import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import "./index.scss";

const Contact = () => {
  return (
    <div className="container mt-5" id="contact" style={{ width: "500px" }}>
      <h3 className="fs-bold fs-2 text-center mb-3">Contact Me</h3>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" className="textarea-form" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn-form"
              style={{
                width: "445px",
                margin: "auto",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
