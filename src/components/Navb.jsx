import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./images/logo.png";
import "./Nav.css";

function Navb() {

  return (
    <>
      <Navbar
        className="navigation"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey={2} href="/">
            <img src={logo} alt="logo" width="40" height="40" />
            </Nav.Link>
            <Nav.Link href="/Login">
              <i className="icon-1 fas fa-user fa-2x"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navb;
