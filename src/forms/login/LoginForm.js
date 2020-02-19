import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./loginForm.css";

const LoginForm = () => {
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login-text-family">
              {capitalizeFirst(strings.login.EMAIL)}
            </Form.Label>
            <Form.Control
              className="login-placeholder"
              size="lg"
              name="email"
              type="email"
              placeholder={strings.login.EMAIL}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="login-text-family">
              {capitalizeFirst(strings.login.PASSWORD)}
            </Form.Label>
            <Form.Control
              className="login-placeholder"
              size="lg"
              name="password"
              type="password"
              placeholder={strings.login.PASSWORD}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button className="login-button" type="submit" variant="outline-dark">
            {capitalizeFirst(strings.login.BUTTON_TEXT)}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
