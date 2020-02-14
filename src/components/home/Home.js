import React from "react";
import Navbar from "../navbar/Navbar";
import Main from "../../views/main/Main";
import About from "../../views/about/About";
import Contact from "../../views/contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Contact />
    </>
  );
};

export default Home;
