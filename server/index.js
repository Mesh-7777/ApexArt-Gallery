const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieparser());
app.use(fileUpload());

app.use(
  session({
    key: "UserId",
    secret: "login",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 360000,
    },
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "artgallery",
  debug: false,
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("database Connected");
});

app.post("/Query", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  db.query(
    "INSERT INTO user_query (firstname,lastname,phonenumber,email,message) VALUES (?,?,?,?,?)",
    [firstname, lastname, phone, email, message],
    (err, result) => {
      req.session.user = result;
      console.log(err);
      res.send(result);
      console.log(result);
    }
  );
});

app.get("/getquery", (req, res) => {
  db.query("select * from user_query",(err, result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    res.send(result);
  })
});

app.post("/SignUp", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  db.query(
    "INSERT INTO users2 (firstname,lastname,email,phone,password,address,city,state,country) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      firstname,
      lastname,
      email,
      phone,
      password,
      address,
      city,
      state,
      country,
    ],
    (err, result) => {
      req.session.user = result;
      console.log(err);
      res.send(result);
      console.log(result);
    }
  );
});


app.post("/Cart", (req, res) => {
  const img = req.body.img;
  const filename = req.body.filename;
  const about = req.body.about;
  const price = req.body.price;
  db.query("INSERT INTO cart (file,filename,about,price) VALUES (?,?,?,?)",
  [img,filename,about,price],(err, result)=>{
      console.log(result);
      res.send(result);
    });
});

app.get("/Cart", (req,res)=>{
  db.query("select * from cart",(err,result)=>{
    if(err){
      res.send(err);
    }
    res.send(result);
  })
});

app.delete("/Cart/delete/:paintingName", (req, res)=>{
  const paintingName = req.params.paintingName;
  db.query("delete from cart where filename = ?",paintingName,(err, result)=>{
    console.log(result);
    if(err){
      res.send(err);
    }
    res.send(result);
  })
})



app.post("/Addpainting", (req, res) => {
  var file = req.body.file;
  // var file_image = file.name;
  const filename = req.body.filename;
  const about = req.body.about;
  const price = req.body.price;

  //const loggedin = true;
  db.query(
    "INSERT INTO paintingsdata (file,filename,about,price) VALUES (?,?,?,?)",
    [file,filename,about,price],
    (err, result, fields) => {
      
      if (err) {
        res.send({ err: err });
      }
    }
  );
  console.log(file);
});

app.get("/getProducts", (req,res) => {
  db.query("select * from paintingsdata",(err, result)=>{
    console.log(result);
    if(err){
      console.log(err);
    }
    res.send(result);
  })
});

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //const loggedin = true;
  db.query(
    "SELECT * FROM users2 WHERE firstname = ? and password = ?",
    [username, password],
    (err, result, fields) => {
      var data = Object.values(JSON.parse(JSON.stringify(result)))
      if (err) {
        res.send({ err: err });
      } else if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "User doesnot exist!" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running on 3001");
});
