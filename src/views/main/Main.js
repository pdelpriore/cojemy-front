import React from "react";
import { Image, Row, Col, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./main.css";

const Main = () => {
  const props = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: 300 }
  });
  return (
    <animated.div
      style={props}
      className="main-section"
      id={strings.navbar.navHomeItems.LOGO}
    >
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
        <Col xs={5}>
          <div className="box">
            <div>
              <Row className="mb-5" />
              <Row className="mb-5" />
              <h1 className="main-text">
                {capitalizeFirst(strings.main.MAIN_TEXT)}
              </h1>
              <h3 className="main-sub-text">
                {capitalizeFirst(strings.main.MAIN_SUB_TEXT)}
              </h3>
              <Button className="button" variant="outline-danger">
                {capitalizeFirst(strings.main.BUTTON_TEXT)}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <Image
            className="image"
            src={require("../../assets/imgs/womancookingbackg.jpg")}
          />
        </Col>
      </Row>
    </animated.div>
  );
};

export default Main;
