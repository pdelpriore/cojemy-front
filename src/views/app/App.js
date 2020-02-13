import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Main from "../main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";

//Switch will be used for app navigation when user logged

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <About />
        <Contact />
        <Switch></Switch>
      </Router>
    </>
  );
};

export default App;
