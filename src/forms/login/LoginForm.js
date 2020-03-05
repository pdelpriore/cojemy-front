import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import useLoginForm from "../../hooks/form/login/useLoginForm";
import "./loginForm.css";

const LoginForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useLoginForm();
  const { loading } = useSelector(state => state.login);
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="login-text-family">
              {capitalizeFirst(strings.login.EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.email || ""}
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
              onChange={handleInputChange}
              value={inputs.password || ""}
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
          <div className="login-button">
            <Button
              className="login-button-send"
              disabled={
                inputs.email === undefined ||
                inputs.email === "" ||
                inputs.password === undefined ||
                inputs.password === ""
              }
              type="submit"
              variant="outline-dark"
            >
              <div className="login-spinner">
                {loading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {loading ? (
                  <div className="login-loading-text">
                    {capitalizeFirst(strings.login.BUTTON_TEXT_LOADING)}
                  </div>
                ) : (
                  <div>{capitalizeFirst(strings.login.BUTTON_TEXT)}</div>
                )}
              </div>
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
