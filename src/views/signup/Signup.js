import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";
import Navbar from "../../components/navbar/Navbar";
import SignupForm from "../../forms/signup/SignupForm";
import { useSelector } from "react-redux";
import "./signup.css";

const Signup = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  const signupForm = [<SignupForm />];
  const transition = useTransition(signupForm, signupForm => signupForm.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });
  const { loading, userSignedup, error } = useSelector(state => state.signup);
  return (
    <animated.div style={props} className="signup-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="signup-first-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={10}>
            <Image
              className="signup-image"
              src={require("../../assets/imgs/signupret.png")}
            />
          </Col>
          <Col xs={2} />
        </Row>
      </div>
      <div className="signup-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={2} />
          <Col xs={6}>
            {transition.map(({ item, key, props }) => (
              <animated.div key={key} style={props}>
                {item}
              </animated.div>
            ))}
            <div>{error && <p>{error}</p>}</div>
          </Col>
          <Col xs={4} />
        </Row>
      </div>
    </animated.div>
  );
};

export default Signup;
