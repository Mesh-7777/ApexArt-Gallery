import React, { useState, useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import NavTwo from "../navs/NavTwo";
import { ThrowcartContext, ThrowsetcartContext } from "../collections/Card";

import Item from "./Item";

function Cart() {
  return (
    <>
      <NavTwo />
      <Jumbotron>
        <Item />
      </Jumbotron>
    </>
  );
}

export default Cart;
