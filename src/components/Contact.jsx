import React,{useState} from "react";
import "./Contact.css";
import Axios from "axios";
import Bgimg from "./Footer/Bgimg";
 
function Contact() { 


  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const Query = () => {
    Axios.post("http://localhost:3001/Query", {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      message: message,
      
    }).then((response, err) => {
      console.log(response);
      if (err) {
        console.log(err.errno);
      }else{
        alert("We appreciate your Intrests, the query has been submitted, We are looking into it!Thank You Have a good day.")
      }
    });
    
  };



  return (
    <>
      <Bgimg />
      <div id="contact">
        <h2>Contact us.</h2>
        <form id="container">
          <span className="input">
            <input type="text" className="input__field" id="input-1" onChange={(e) => {
                setfirstname(e.target.value);
              }} />
            <label htmlFor="input-1" className="input__label">
              <span className="input__label-content">First Name</span>
            </label>
          </span>

          <span className="input">
            <input type="text" className="input__field" id="input-2" onChange={(e) => {
                setlastname(e.target.value);
              }} />
            <label htmlFor="input-2" className="input__label">
              <span className="input__label-content">Last Name</span>
            </label>
          </span>

          <span class="input">
            <input type="text" class="input__field" id="input-3" onChange={(e) => {
                setphone(e.target.value);
              }} />
            <label htmlFor="input-3" class="input__label">
              <span class="input__label-content">Phone Number</span>
            </label>
          </span>

          <span class="input">
            <input type="text" class="input__field" id="input-4" onChange={(e) => {
                setemail(e.target.value);
              }} />
            <label htmlFor="input-4" class="input__label">
              <span class="input__label-content">Email Address</span>
            </label>
          </span>

          <span class="input message">
            <textarea class="input__field" id="input-5" onChange={(e) => {
                setmessage(e.target.value);
              }}></textarea>
            <label htmlFor="input-5" class="input__label">
              <span class="input__label-content">Message</span>
            </label>
          </span>

          <button id="send-button" type="button" onClick={(e)=>Query(e.preventDefault)}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
