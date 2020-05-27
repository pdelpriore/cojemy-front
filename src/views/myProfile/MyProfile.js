import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import MyProfileForm from "../../forms/myProfile/MyProfileForm";
import MyProfilePreview from "./MyProfilePreview";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../../components/notifications/Notification";
import MyPasswordForm from "../../forms/myProfile/MyPasswordForm";
import { showMyPasswordForm } from "../../redux/login/updateMyProfile/showMyPassword/thunk/showMyPasswordThunk";
import { capitalizeFirst } from "../../util/Util";
import { useSpring, animated } from "react-spring";
import { strings } from "../../strings/Strings";
import "./myProfile.css";

const MyProfile = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const props = useSpring({
    opacity: 1,
    config: { duration: 300 },
    from: { opacity: 0 },
  });
  const { loginError } = useSelector((state) => state.login);
  const { myPasswordFormShowed } = useSelector(
    (state) => state.isMyPasswordFormShowed
  );
  return (
    <animated.div className="myprofile-main-area" style={props}>
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="myprofile-first-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={4} />
          <Col xs={4}>
            <MyProfilePreview />
          </Col>
          <Col xs={4} />
        </Row>
        <Row>
          <Col xs={5}>
            <Image
              className="myprofile-background-image"
              src={require("../../assets/imgs/panret2.jpg")}
            />
          </Col>
          <Col xs={1} />
          <Col xs={5}>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Notification notificationMessage={loginError} />
          </Col>
          <Col xs={1} />
        </Row>
      </div>
      <div className="myprofile-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        {!myPasswordFormShowed && (
          <Row>
            <Col xs={8} />
            <Col xs={3}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showMyPasswordForm(true));
                }}
                className="myprofile-button-text"
                variant="dark"
                size="sm"
              >
                {capitalizeFirst(strings.myProfile.BUTTON_EDIT_PASS)}
              </Button>
            </Col>
            <Col xs={1} />
          </Row>
        )}
        {myPasswordFormShowed && (
          <>
            <Row className="mb-3" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row>
              <Col xs={1} />
              <Col xs={5}>
                <MyPasswordForm />
              </Col>
              <Col xs={6} />
            </Row>
          </>
        )}
        {!myPasswordFormShowed && (
          <>
            <Row className="mb-3" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row>
              <Col xs={1} />
              <Col xs={6}>
                <MyProfileForm />
              </Col>
              <Col xs={5} />
            </Row>
          </>
        )}
      </div>
    </animated.div>
  );
};

export default MyProfile;
