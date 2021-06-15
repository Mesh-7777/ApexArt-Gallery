import React, { useState } from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import Axios from "axios";
import logo from "../images/logo.png";
import "./admin.css";

function Addpainting() {
  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("");
  const [about, setabout] = useState("");
  const [price, setprice] = useState("");
  Axios.defaults.withCredentials = true;

  const upload = () => {
    Axios.post("http://localhost:3001/Addpainting", {
      file: file,
      filename: filename,
      about: about,
      price: price,
    }).then((res) => {
      console.log(res);
    });
  };
  const navst = {
    color: "white",
  };
  return (
    <>
      <Navbar variant="tabs" bg="dark">
        <Nav.Link href="/">
          <div>
            <img src={logo} alt="logo" width="40" height="40" />
          </div>
        </Nav.Link>
        <Nav.Link style={navst} href="">
          Add Painting
        </Nav.Link>
        <Nav.Link style={navst} href="/SignUp">
          Add User
        </Nav.Link>
        <Nav.Link style={navst} href="/SignUp">
          Add
        </Nav.Link>
      </Navbar>
      <div className="addpainting">
        <Form className="addpaintingform" action="/Addpainting" encType="multipart/form-data">
          <Form.Group>
            <Form.Group>
            File Link<br/>
              <input
                id="exampleFormControlFile1"
                label="File Link"
                name="file"
                type = "file"
                onChange={(e) => {
                  setfile(e.target.value);
                }}
              />
            </Form.Group>
            {/* <Form.Control
              autoFocus
              name="file"
              type="text"
              placeholder="...(or) File Link"
              onChange={(e) => {
                setfile(e.target.value);
              }}
              className="errors"
            /> */}
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Painting Name</Form.Label>
            <Form.Control
              autoFocus
              name="paintingname"
              type="text"
              placeholder="Painting Name"
              onChange={(e) => {
                setfilename(e.target.value);
              }}
              className="errors"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="aboutpainting"
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setabout(e.target.value);
              }}
              className="errors"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              placeholder="Painting Price"
              onChange={(e) => {
                setprice(e.target.value);
              }}
              className="errors"
            />
          </Form.Group>
          <Button
            block
            size="lg"
            type="submit"
            onClick={(e) => {
              upload(e.preventDefault());
            }}
          >
            Upload
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Addpainting;
