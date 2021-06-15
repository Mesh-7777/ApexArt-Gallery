import React, { useState, useEffect } from "react";
import { Table, Container, Navbar, Nav, Button } from "react-bootstrap";
import NavOne from "../navs/NavTwo";
import logo from "../images/logo.png";
import Footer from "../Footer/Footer";
import Bgimg from "../Footer/Bgimg";
import Axios from "axios";

function Getqueries() {
  const [query, setquery] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getquery").then((response) => {
      console.log(response);
      setquery(response.data);
    });
  }, []);

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
      <Bgimg />
      <Table style={{ padding: "40px" }} striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>Query</th>
          </tr>
        </thead>
        <tbody>
          {query.map((qur, id) => {
            return (
              <>
                <tr>
                  <td>{qur.id}</td>
                  <td>{qur.firstname}</td>
                  <td>{qur.lastname}</td>
                  <td>{qur.phonenumber}</td>
                  <td>{qur.email}</td>
                  <td>{qur.message}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <Footer />
    </>
  );
}

export default Getqueries;
