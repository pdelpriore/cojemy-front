import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import GetStarted from "../../components/main/GetStarted";
import { useSpring, animated } from "react-spring";
import "./main.css";

const Main = () => {
  const props = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: 300 }
  });
  return (
    <animated.div style={props} className="main-section" id="quoi manger ?">
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
    </animated.div>
  );
};

export default Main;
