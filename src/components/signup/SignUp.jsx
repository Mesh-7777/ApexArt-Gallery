import React, { useState } from "react";
import { Form, Col, Button, Nav, Container } from "react-bootstrap";
//import Redirect from "react-dom";
//import Login from "../Login/Login";
import NavOne from "../navs/NavOne";
import "./signup.css";
import Axios from "axios";
import logo from "../images/logo.png";

function Signup() {
  const [firstname, changefirstname] = useState("");
  const [lastname, changelastname] = useState("");
  const [email, changeemail] = useState("");
  const [phone, changephone] = useState("");
  const [password, changepassword] = useState("");
  const [address, changeadress] = useState("");
  const [city, changecity] = useState("");
  const [state, changestate] = useState("");
  const [country, changecountry] = useState("");
  const Signup = () => {
    Axios.post("http://localhost:3001/SignUp", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      password: password,
      address: address,
      city: city,
      state: state,
      country: country,
    }).then((response, err) => {
      console.log(response);
      if (err) {
        console.log(err.errno);
      } else {
        window.location.href = "/Login";
      }
    });
  };

  return (
    <>
      <NavOne />
      <div className="signup">
        <Form className="signup-form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  changefirstname(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  changelastname(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  changeemail(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter phone"
                onChange={(e) => {
                  changephone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  changepassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Address..."
              onChange={(e) => {
                changeadress(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City Name"
                onChange={(e) => {
                  changecity(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="State Name"
                onChange={(e) => {
                  changestate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="Country Name"
                onChange={(e) => {
                  changecountry(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="dark" onClick={Signup}>
            SignUp
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signup;
