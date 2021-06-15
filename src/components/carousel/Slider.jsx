import React from "react";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import Bgimg from "../Footer/Bgimg";
import data from "../collections/Card-data";
import "./slides.css";

function Slider() {
  const jumbo = {};
  const imgstyle = {
    height: "730px",
    width: "100%",
  };
  return (
    <>
      <Bgimg />
      <div
        style={{
          padding: "1rem 2rem",
          height: "930px",
          backgroundColor: "antiquewhite",
        }}
      >
        <h2>Gallery.</h2>
        <Carousel fade>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[0].slides}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[1].slides}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[2].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[3].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[4].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[5].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[6].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[7].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              className="d-block w-100"
              src={data[8].slides}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Caption>
            <Button variant="outline-light" size="lg" href="/Collections">
              View Collections.
            </Button>
          </Carousel.Caption>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
