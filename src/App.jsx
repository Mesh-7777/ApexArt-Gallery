import React, { useState, createContext } from "react";
import Navb from "./components/Navb";
import Footer from "./components/Footer/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
import Cart from "./components/cart/Cart";
import Collections from "./components/collections/Collections";
import Home from "./components/Home";
import "./index.css";
import "./components/Footer/Bgimg.css";
import SignUp from "./components/signup/SignUp";
import AdminHome from "./components/admin/AdminHome";
import Addpainting from "./components/admin/Addpainting";
import Getqueries from "./components/admin/Getqueries";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Cart">
          <Cart />
        </Route>

        <Route exact path="/Collections">
          <Collections />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/AdminHome">
          <AdminHome />
        </Route>
        <Route exact path="/Getqueries">
          <Getqueries />
        </Route>
        <Route exact path="/Signup">
          <SignUp />
        </Route>
        <Route exact path="/Addpainting">
          <Addpainting />
        </Route>

        {/* <Route exact path="/Login" component={Login} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Collections" component={Collections} />
          <Route exact path="/SignUp" component={SignUp} />*/}
        {/* <Redirect path="/" />  */}
        <Footer />
      </Switch>
    </Router>
  );
};

export default App;
