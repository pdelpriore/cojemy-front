import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./incompatible.css";

const Incompatible = () => {
  return (
    <div className="incompatible-main">
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <div className="incompatible-text">
            Aplikacja niekompatybilna z urządzeniami mobilnymi
          </div>
        </Col>
        <Col xs={1} />
      </Row>
      <Row>
        <Col xs={1} />
        <Col xs={9}>
          <Image
            className="incompatible-image"
            src={require("../../assets/imgs/oops.jpg")}
          />
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default Incompatible;
