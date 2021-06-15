import React, { createContext, useEffect, useState, useContext } from "react";
import data from "./Card-data";
import { Button } from "react-bootstrap";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Collections.css";

// export const cartContext = createContext();

// export function ThrowcartContext() {
//   return useContext(cartContext);
// }

// export const SetcartContext = createContext();

// export function ThrowsetcartContext() {
//   return useContext(SetcartContext);
// }

function Card() {
 

  const [Products, setProducts] = useState([]);
  var [cartdata, AddtoCart] = useState([]);

  // const viewItem = (val) => {};

  // const [idxarray] = useState([]);

 useEffect(()=>{
    Axios.get("http://localhost:3001/getProducts").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  },[]);

  // useEffect(()=>{addtocart();},[]);
  AddtoCart = (product) => {
    // setCart([...Cart, product]);
    
    const fileimg = product.file;
    const filename = product.filename;
    const about = product.about;
    const price = product.price;
    console.log(filename);
        Axios.post("http://localhost:3001/Cart",{
          img:fileimg,
          filename:filename,
          about:about,
          price:price 
        }).then((response) => {
      console.log(response);
    });
  
    //window.location.href = "/Cart"
  
  }
  console.log(Products);
  return Products.map((val, idx) => {
    return (
      <>
        <div key={idx} id="art-1" className="collec_item">
          <div className="images">
            <img src={val.file} width="150px" height="200px" alt={val.heading} />
          </div>
          <div className="description">
            <h4>{val.filename}</h4>
            <p>{val.about}</p>
            <h5>₹{val.price}</h5>
          </div>
          <Button variant="outline-dark" /*onClick={() => viewItem(val)}*/>
            <>View</>
          </Button>
          <Button variant="outline-dark" onClick={() => {AddtoCart(val)}}>
            Buy
          </Button>
        </div>
      </>
    );
  });
}

export default Card;
