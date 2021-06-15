import React from "react";
import "./About.css";
import Bgimg from "./Footer/Bgimg";

function About() {
  return (
    <>
      <Bgimg />
      <div className="about">
        <h2>About.</h2>
        <p>
          Art itself is a serene and divine expression of feelings and emotions.
          An artist manifests human feelings beautifully in poems, paintings,
          music and in many other forms. While some play with words, some create
          magic with colors.
        </p>
      </div>
    </>
  );
}

export default About;
