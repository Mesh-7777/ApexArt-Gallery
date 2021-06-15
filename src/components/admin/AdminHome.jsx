import React from "react";
import logo from "../images/logo.png";
import Footer from "../Footer/Footer";
import Slider from "../carousel/Slider";
import "./admin.css";
import { Nav, Navbar, Button } from "react-bootstrap";

function AdminHome() {
  const navst = {
    color: "white",
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  };

  return (
    <>
      <Navbar variant="tabs" bg="dark">
        <Nav.Link href="/AdminHome">
          <div>
            <img src={logo} alt="logo" width="40" height="40" />
          </div>
        </Nav.Link>
        <Nav.Link style={navst} href="/Addpainting">
          Add Painting
        </Nav.Link>
        <Nav.Link style={navst} href="/Adduser">
          Add User
        </Nav.Link>
        <Nav.Link style={navst} href="/Getqueries">
          Check Queries
        </Nav.Link>
        <Nav.Link eventKey={2}>
          <Button block variant="outline-light" type="submit" onClick={logout}>
            <i class="fas fa-sign-out-alt"></i>
          </Button>
        </Nav.Link>
      </Navbar>

      <Slider />
      <Footer />
    </>
  );
}

export default AdminHome;
