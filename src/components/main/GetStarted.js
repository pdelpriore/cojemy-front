import React from "react";
import { Button } from "react-bootstrap";
import "./getstarted.css";

const GetStarted = () => {
  return (
    <div className="box">
      <div>
        <h1 className="main-text">Recherche une recette ?</h1>
        <h3 className="main-sub-text">Vous êtes en bon endroit</h3>
        <Button variant="outline-danger">Commencez</Button>
      </div>
    </div>
  );
};

export default GetStarted;
