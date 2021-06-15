import React from "react";
import { Navbar, Nav, Button, Jumbotron, Card } from "react-bootstrap";
import logo from "./images/logo.png";

function View() {
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Navbar
        className="nav-dash"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey={2} href="/Dashboard">
              <img src={logo} alt="logo" width="40" height="40" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="/Cart">
              <i className="icon-2 fas fa-shopping-cart fa-2x"></i>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Button
                block
                variant="outline-light"
                type="submit"
                onClick={logout}
              >
                <i class="fas fa-sign-out-alt"></i>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default View;
