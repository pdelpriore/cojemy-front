import React from "react";
import { useSelector } from "react-redux";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import useSignupForm from "../../hooks/form/signup/useSignupForm";
import useGoogleSignup from "../../hooks/googleButton/signup/useGoogleSignup";
import { GoogleLogin } from "react-google-login";
import { IdClient } from "../../config/Security";
import "./signupForm.css";
import "../../shared/global.css";

const SignupForm = () => {
  const { loading } = useSelector((state) => state.signup);
  const { loadingSignGoogle } = useSelector((state) => state.signGoogle);
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();
  const {
    handleGoogleSuccessResponse,
    handleGoogleFailureResponse,
  } = useGoogleSignup();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.signup.USER_NAME)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.name || ""}
              className="signup-form-control"
              size="lg"
              name="name"
              type="text"
              placeholder={strings.signup.USER_NAME_PLACEHOLDER}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.signup.EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.email || ""}
              className="signup-form-control"
              size="lg"
              name="email"
              type="email"
              placeholder={strings.signup.EMAIL_PLACEHOLDER}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicConfirmEmail">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.signup.CONFIRM_EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.confirmEmail || ""}
              className="signup-form-control"
              size="lg"
              name="confirmEmail"
              type="email"
              placeholder={strings.signup.CONFIRM_EMAIL_PLACEHOLDER}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.signup.PASSWORD)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.password || ""}
              className="signup-form-control"
              size="lg"
              name="password"
              type="password"
              placeholder={strings.signup.PASSWORD_PLACEHOLDER}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={
              loading ||
              inputs.name === undefined ||
              inputs.name === "" ||
              inputs.email === undefined ||
              inputs.email === "" ||
              inputs.confirmEmail === undefined ||
              inputs.confirmEmail === "" ||
              inputs.password === undefined ||
              inputs.password === ""
            }
            className="global-button-label"
            type="submit"
            variant="outline-dark"
          >
            <div className="signup-spinner">
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
                <div className="signup-loading-text">
                  {capitalizeFirst(strings.signup.BUTTON_TEXT_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.signup.BUTTON_TEXT)}</div>
              )}
            </div>
          </Button>
        </Col>
      </Row>
      <Row className="mb-3" />
      <Row>
        <Col xs={12}>
          <GoogleLogin
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled || loadingSignGoogle}
                variant="outline-dark"
                className="google-signup-button"
              >
                {!loadingSignGoogle ? (
                  <div className="google-signup-icon" />
                ) : (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {!loadingSignGoogle ? (
                  <div className="google-signup-text">
                    {capitalizeFirst(strings.signupGoogle.BUTTON_TEXT)}
                  </div>
                ) : (
                  <div className="google-signup-loading">
                    {capitalizeFirst(strings.signup.BUTTON_TEXT_LOADING)}
                  </div>
                )}
              </Button>
            )}
            clientId={IdClient}
            onSuccess={handleGoogleSuccessResponse}
            onFailure={handleGoogleFailureResponse}
            cookiePolicy={"single_host_origin"}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SignupForm;
