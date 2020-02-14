import React from "react";
import { Image } from "react-bootstrap";
import "./about.css";

const Area = ({ image, text }) => {
  return (
    <div className="about-area">
      <Image
        className="image-area"
        src={require(`../../assets/${image}.jpg`)}
        roundedCircle
      />
      <h1 className="text-area">{text}</h1>
    </div>
  );
};

export default Area;
