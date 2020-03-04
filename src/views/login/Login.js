import React, { useEffect, useCallback } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { showRemindPassComponent } from "../../redux/showRemindPass/thunk/showRemindPassThunk";
import { Row, Col, Image } from "react-bootstrap";
import { useSpring, useTransition, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import LoginForm from "../../forms/login/LoginForm";
import Notification from "../../components/notifications/Notification";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import RemindPasswordForm from "../../forms/remindPassword/RemindPasswordForm";
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
  const { show } = useSelector(state => state.showRemindPass);
  const { passwordSent, remindPassError } = useSelector(
    state => state.remindPass
  );
  const { userData, loginError } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  let redirectToRecipeBook = useCallback(() => {
    return history.push(strings.path.RECIPE_BOOK);
  }, [history]);

  useEffect(() => {
    if (userData.email !== undefined) redirectToRecipeBook();
  }, [userData, redirectToRecipeBook]);

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
          <Col xs={3} />
        </Row>
        <Row>
          <Col xs={7} />
          <Col xs={2}>
            {!show && (
              <p
                onClick={() => dispatch(showRemindPassComponent(true))}
                className="forgot-password"
              >
                {capitalizeFirst(strings.login.FORGOT_PASSWORD)}
              </p>
            )}
          </Col>
          <Col xs={3} />
        </Row>
      </div>
      <div className="login-third-section">
        <Row className="mb-5" />
        <Row>
          <Col xs={1} />
          <Col xs={3}>
            <Notification
              notificationMessage={
                userSignedup
                  ? strings.signup.CHECK_EMAIL
                  : remindPassError
                  ? remindPassError
                  : passwordSent
                  ? passwordSent
                  : loginError
                  ? loginError
                  : null
                //pozniej zamiast null daj errory z reduxa podczas loginu
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
