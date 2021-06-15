import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button, Form } from "react-bootstrap";
// import { Formik } from "formik";
// import * as yup from "yup";
import Axios from "axios";
import NavOne from "../navs/NavOne";
//import * as emailvalidator from "email-validator";
import "./Login.css";
import logo from "../images/logo.png";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpass] = useState("");
  const [loginstatus, setloginstatus] = useState('');
  Axios.defaults.withCredentials = true;

  const [pid,setpid] = useState([]);
  const login = () => {
  Axios.get("http://localhost:3001/getpid").then((response)=>{
    setpid(response.data);
    localStorage.setItem("cardetails",JSON.stringify(response.data));
  })
    Axios.post("http://localhost:3001/Login", {
      username: username,
      password: password,
    }).then((res) => {
      localStorage.setItem("userdetails",JSON.stringify(res.data));
      console.log(res.data[0]);
      if (res.data.message) {
        setloginstatus(res.data.message);
        alert(res.data.message);
      }
      else if (
        res.data[0].firstname === "adi" &&
        res.data[0].password === "Mesh@7777"
      ) {
        setloginstatus("Welcome "+res.data[0].firstname);
        alert("Welcome Admin "+res.data[0].firstname);
        window.location.href = "/AdminHome";
      }  
     else {
        setloginstatus({ login: true, msg: "User welcome." });
        alert("Welcome "+res.data[0].firstname);
        window.location.href = "/Dashboard";
      }
    });
  };
    

  useEffect(() => {
    Axios.get("http://localhost:3001/Login").then((response) => {
      console.log(response);

      if (response.data.loggedIn === true) {
        setloginstatus(response.data.user[0]);
      }
    });
  }, []);
  // const alert = ()=>{
  //   alert("user already logged in!")
  // }

  const navst = {
    color: "white",
  };

  return (
    <>
      <NavOne />
      <div className="Login">
        <Form className="login-form">
          <Form.Group size="lg" controlId="email">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              autoFocus
              name="username"
              type="text"
              placeholder="User Name"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              className="errors"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpass(e.target.value);
              }}
              className="errors"
            />
          </Form.Group>
          <Button
            block
            variant="dark"
            size="lg"
            type="submit"
            onClick={(e) => {
              login(e.preventDefault());
            }}
          >
            Login
          </Button>
          <Form.Text>
            <a href="/SignUp">Register Here</a>
          </Form.Text>
        </Form>
      </div>
    </>
  );
}
