import React from 'react';
import logo from "../images/logo.png"
import { Nav,Navbar } from "react-bootstrap";

function NavOne() {
    const navst = {
        color: "white",
      };
    return (
        <>
            <Navbar variant="tabs" bg="dark">
        <Nav.Link style={navst} href="/">
          <div>
            <img src={logo} alt="logo" width="40" height="40" />
          </div>
        </Nav.Link>
        <Nav.Link style={navst} href="/Login">
          Login
        </Nav.Link>
        <Nav.Link style={navst} href="/SignUp">
          Sign Up
        </Nav.Link>
      </Navbar>
        </>
    )
}

export default NavOne
