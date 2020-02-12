import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./main.css";

const Main = () => {
  return (
    <div className="main-section">
      <Row>
        <Col xs>
          <div className="shape-top"></div>
        </Col>
      </Row>
      <Row>
        <Col xs={5} />
        <Col xs={6}>
          <Image
            className="image"
            src={require("../../assets/womancooking.jpg")}
          />
        </Col>
        <Col xs={1} />
      </Row>
    </div>
  );
};

export default Main;
