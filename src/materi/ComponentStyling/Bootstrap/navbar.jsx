import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavbarHead extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bintang M Akbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#bio">Biografi</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
