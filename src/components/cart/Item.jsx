import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Axios from "axios";
import "./item.css";

function Item() {
 
  var [cart, setcartdata] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/Cart").then((response) => {
      setcartdata(response.data);
    });
  }, []);

  const showbill = () => {
    alert("Your bill is : ");
    window.location.href = "/Dashboard";
  };

  console.log(cart);
  function removeFromCart(painting) {
    Axios.delete(`http://localhost:3001/Cart/delete/${painting}`);
    window.location.reload();
  }
  return (
    <>
      <Container className="cartcontainer">
        <div className="item1">
          {cart.map((val, keyid) => {
            return (
              <>
                <Card key={keyid} style={{ width: "18rem" }} className="card">
                  <Card.Img variant="top" src={val.file} />
                  <Card.Body>
                    <Card.Title>{val.filename}</Card.Title>
                    <Card.Text>{val.about}</Card.Text>
                    <Card.Text>₹{val.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      varient="light"
                      size="sm"
                      onClick={() => {removeFromCart(val.filename)}}
                    >
                      Remove
                    </Button>
                  </Card.Footer>
                </Card>
              </>
            );
          })}
        </div>
        <div className="item2">
          <h1>Cart Total</h1>
          <h3>
            Total Amount : <span>₹{} </span>
          </h3>

          <Button
            onClick={(e) => {
              showbill(e.preventDefault());
            }}
          >
            Checkout
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Item;
