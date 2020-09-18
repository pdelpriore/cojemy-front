import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { showRemindPassComponent } from "../../redux/remindPassword/showRemindPass/thunk/showRemindPassThunk";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";
import useLogin from "../../hooks/screen/login/useLogin";
import LoginForm from "../../forms/login/LoginForm";
import Notification from "../../components/notifications/Notification";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import RemindPasswordForm from "../../forms/remindPassword/RemindPasswordForm";
import "./login.css";

const Login = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const loginForm = [<LoginForm />];
  const transition = useTransition(loginForm, (loginForm) => loginForm.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });

  const { emailConfirmed } = useLogin();

  const { userSignedup } = useSelector((state) => state.signup);
  const { userGoogleSignedup } = useSelector((state) => state.signGoogle);
  const { show } = useSelector((state) => state.isRemindPassFormShown);
  const { passwordSent, remindPassError } = useSelector(
    (state) => state.remindPass
  );
  const { loginError } = useSelector((state) => state.login);

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
        <Row className="mb-4" />
        <Row>
          <Col xs={6} />
          <Col xs={3}>
            {!show ? (
              <div>
                {transition.map(({ item, key, props }) => (
                  <animated.div key={key} style={props}>
                    {item}
                  </animated.div>
                ))}
              </div>
            ) : (
              <div>
                <Row className="mb-5" />
                <RemindPasswordForm />
              </div>
            )}
          </Col>
          <Col xs={2}>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-4" />
            {!show && (
              <p
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showRemindPassComponent(true));
                }}
                className="forgot-password"
              >
                {capitalizeFirst(strings.login.FORGOT_PASSWORD)}
              </p>
            )}
          </Col>
          <Col xs={1} />
        </Row>
      </div>
      <div className="login-third-section">
        <Row className="mb-3" />
        <Row>
          <Col xs={1} />
          <Col xs={3}>
            <Notification
              notificationMessage={
                userSignedup !== null
                  ? strings.signup.CHECK_EMAIL
                  : remindPassError
                  ? remindPassError
                  : passwordSent
                  ? passwordSent
                  : loginError
                  ? loginError
                  : userGoogleSignedup !== null
                  ? capitalizeFirst(strings.signupGoogle.GOOGLE_USER_CREATED)
                  : emailConfirmed
                  ? emailConfirmed
                  : null
              }
            />
          </Col>
          <Col xs={8} />
        </Row>
      </div>
    </animated.div>
  );
};

export default Login;
