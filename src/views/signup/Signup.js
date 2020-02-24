import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";
import Navbar from "../../components/navbar/Navbar";
import SignupForm from "../../forms/signup/SignupForm";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_USER } from "../../apollo/queries/signupUser";
import "./signup.css";

const Signup = ({ match: { path, url, isExact } }) => {
  const [inputs, setInputs] = useState({});
  const [signUp, { data, error, loading }] = useMutation(SIGNUP_USER);

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signUp({
      variables: {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
      }
    });
    setInputs({});
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  const signupForm = [
    <SignupForm
      inputs={inputs}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  ];
  const transition = useTransition(signupForm, signupForm => signupForm.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });
  console.log("signup page loading: ", loading);
  console.log("signup page data: ", data);
  console.log("signup page error: ", error);

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
          </Col>
          <Col xs={4} />
        </Row>
      </div>
    </animated.div>
  );
};

export default Signup;
