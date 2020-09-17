import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Row, Col, Button } from "react-bootstrap";
import cookie from "react-cookies";
import Notification from "../../components/notifications/Notification";
import { useSpring, animated } from "react-spring";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./main.css";

const Main = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const emailConfirmed = cookie.load("emailConfirmed");
  return (
    <animated.div
      style={props}
      className="main-section"
      id={strings.navbar.navHomeItems.MAIN}
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
              <Row className="mb-5" />
              <h1 className="main-text">
                {capitalizeFirst(strings.main.MAIN_TEXT)}
              </h1>
              <h3 className="main-sub-text">
                {capitalizeFirst(strings.main.MAIN_SUB_TEXT)}
              </h3>
              <NavLink to={strings.path.LOGIN} exact>
                <Button className="button" variant="outline-danger">
                  {capitalizeFirst(strings.main.BUTTON_TEXT)}
                </Button>
              </NavLink>
            </div>
          </div>
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Notification
            notificationMessage={emailConfirmed ? emailConfirmed : null}
          />
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
