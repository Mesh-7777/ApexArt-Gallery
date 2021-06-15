import React, { useEffect, useState,useContext } from "react";
import {Link} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Collections from "./collections/Collections";
import Footer from "./Footer/Footer";
import Axios from "axios";
//import Slider from './carousel/Slider'
//import Bgimg from "./Footer/Bgimg";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "./images/logo.png";
import "./dash.css";

function Navb() {

    
  Axios.defaults.withCredentials = true;
  const [loginstatus, setloginstatus] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      console.log(response);

      if (response.data.loggedIn === true) {
        setloginstatus(response.data.user[0].username);
      }
    });
  }, []);

  const logout = () => {
    localStorage.clear();
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
              ApexArt
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

      <Collections />
      <About />
      <Contact />
      <Footer />
      {console.log(loginstatus)}
    </>
  );
}

export default Navb;
