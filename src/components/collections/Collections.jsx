import React, { useState } from "react";
import { Router } from "react-router-dom";
import Card from "./Card";
import Bgimg from "../Footer/Bgimg";
import Item from "../cart/Item";
import "./Collections.css";

export default function Collections() {
  return (
    <>
      <Bgimg />
      <div id="collections">
        <h2>Collections.</h2>
        <Card />
      </div>
    </>
  );
}
