import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import GetStarted from "../../components/main/GetStarted";
import "./main.css";

const Main = () => {
  return (
    <div className="main-section" id="quoi manger ?">
      <Row>
        <Col xs={2}>
          <div className="shape-top-left"></div>
        </Col>
        <Col xs={8} />
        <Col xs={2}>
          <div className="shape-top-right"></div>
        </Col>
      </Row>
      <Row>
        <Col xs={1} />
        <Col xs={4}>
          <GetStarted />
        </Col>
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
