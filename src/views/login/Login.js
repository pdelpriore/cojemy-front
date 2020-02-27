import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";
import LoginForm from "../../forms/login/LoginForm";
import Notification from "../../components/notifications/Notification";
import "./login.css";

const Login = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  const loginForm = [<LoginForm />];
  const transition = useTransition(loginForm, loginForm => loginForm.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });
  const { userSignedup } = useSelector(state => state.signup);

  return (
    <animated.div style={props} className="login-area">
      <div className="login-first-section">
        <Navbar path={path} url={url} isExact={isExact} />
        <Row className="mb-5" />
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <Image
              className="login-image"
              src={require("../../assets/imgs/loginret.jpg")}
            />
          </Col>
          <Col xs={2} />
        </Row>
      </div>
      <div className="login-second-section">
        <Row className="mb-5" />
        <Row>
          <Col xs={6} />
          <Col xs={3}>
            {transition.map(({ item, key, props }) => (
              <animated.div key={key} style={props}>
                {item}
              </animated.div>
            ))}
          </Col>
          <Col xs={3} />
        </Row>
      </div>
      <div className="login-third-section">
        <Row className="mb-5" />
        <Row>
          <Col xs={1} />
          <Col xs={3}>
            <Notification notificationMessage="test" />
          </Col>
          <Col xs={8} />
        </Row>
      </div>
    </animated.div>
  );
};

export default Login;
