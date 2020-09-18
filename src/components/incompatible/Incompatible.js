import React from "react";
import { Row, Col } from "react-bootstrap";
import "./incompatible.css";

const Incompatible = () => {
  return (
    <div className="incompatible-main">
      <Row className="mb-5" />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <div className="incompatible-text">
            Aplikacja niekompatybilna z urządzeniami mobilnymi
          </div>
        </Col>
        <Col xs={1} />
      </Row>
    </div>
  );
};

export default Incompatible;
