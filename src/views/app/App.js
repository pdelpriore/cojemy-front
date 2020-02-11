import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import Main from "../main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <About />
      <Contact />
    </Container>
  );
};

export default App;
