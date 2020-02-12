import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Main from "../main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Contact />
    </>
  );
};

export default App;
