import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className="py-4">
        <div className="container">
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Polly</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link>Car</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    );
  }
}

export default NavbarComponent;
