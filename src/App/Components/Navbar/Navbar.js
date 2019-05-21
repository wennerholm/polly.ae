import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Navbar.css';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className="py-4 shadow">
        <div className={['d-lg-none', 'd-flex', classes.justifyContentSpaceBetwwen].join(' ')}>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/">
            <Navbar.Brand>Polly</Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="car-loan">
            <Nav.Link><FontAwesomeIcon icon="mobile" /></Nav.Link>
          </LinkContainer>
        </div>
        <div className="container d-none d-lg-flex">
          <LinkContainer to="/">
            <Navbar.Brand>Polly</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link>Car</Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link><FontAwesomeIcon icon="mobile" /> Phone Number</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link>Car</Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link><FontAwesomeIcon icon="mobile" /> Phone Number</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    );
  }
}

export default NavbarComponent;
