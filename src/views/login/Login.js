import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import LoginForm from "../../forms/login/LoginForm";
import "./login.css";

const Login = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
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
            <LoginForm />
          </Col>
          <Col xs={3} />
        </Row>
      </div>
      <div className="login-third-section"></div>
    </animated.div>
  );
};

export default Login;
