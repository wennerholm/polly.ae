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
      <Navbar bg="white" expand="lg" className="shadow">
        <div className={['d-lg-none', 'fixed-top', 'bg-white', 'd-flex', classes.justifyContentSpaceBetwwen].join(' ')} style={{ height: '50px' }}>
          <LinkContainer to="/">
            <Nav.Link><span style={{ color: '#000000' }}>Home</span></Nav.Link>
          </LinkContainer>

          <LinkContainer to="/">
            <Navbar.Brand><span style={{ color: '#dc1f5b', fontSize: '24px', fontWeight: 'bold' }}>Polly</span></Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="car-loan">
            <Nav.Link><FontAwesomeIcon style={{ color: '#000000' }} icon="mobile" /></Nav.Link>
          </LinkContainer>
        </div>
        <div className="container d-none d-lg-flex" style={{ height: '80px' }}>
          <LinkContainer to="/">
            <Navbar.Brand><span style={{ color: '#dc1f5b', fontSize: '24px', fontWeight: 'bold' }}>Polly</span></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link><span style={{ color: '#000000' }}>Home</span></Nav.Link>
              </LinkContainer>

              <LinkContainer to="car-loan">
                <Nav.Link><span style={{ color: '#000000' }}>Car</span></Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="ml-auto">
              <LinkContainer to="car-loan">
                <Nav.Link><FontAwesomeIcon style={{ color: '#000000' }} icon="mobile" /><span style={{ color: '#000000' }}> Contact Us</span></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    );
  }
}

export default NavbarComponent;
