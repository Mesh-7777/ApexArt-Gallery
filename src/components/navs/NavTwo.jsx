import React from "react";
import logo from "../images/logo.png";
import { Nav, Navbar } from "react-bootstrap";

function NavTwo() {
  const navst = {
    color: "white",
  };
  return (
    <>
      <Navbar variant="tabs" bg="dark">
        <Nav.Link style={navst} href="/Dashboard">
          <div>
          ApexArt
          </div>
        </Nav.Link>
        <Nav.Link style={navst} href="/Login">
          Login
        </Nav.Link>
        <Nav.Link style={navst} href="/SignUp">
          Sign Up
        </Nav.Link>
        <Nav.Link style={navst} href="/Dashboard">
          Continue Shopping
        </Nav.Link>
        <Nav.Link style={navst} disabled>
          Signed in as: {}
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default NavTwo;
