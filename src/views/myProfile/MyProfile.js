import React from "react";
import { Row, Col, Image, Button, Spinner } from "react-bootstrap";
import MyProfileForm from "../../forms/myProfile/MyProfileForm";
import MyProfilePreview from "./MyProfilePreview";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Notification from "../../components/notifications/Notification";
import MyPasswordForm from "../../forms/myProfile/MyPasswordForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import useMyProfile from "../../hooks/screen/myProfile/useMyProfile";
import { showMyPasswordForm } from "../../redux/updateMyProfile/showMyPassword/thunk/showMyPasswordThunk";
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
  const { logoutError } = useSelector((state) => state.logout);
  const { userPasswordChanged, changeUserPasswordError } = useSelector(
    (state) => state.isUserPasswordChanged
  );
  const { myPasswordFormShown } = useSelector(
    (state) => state.isMyPasswordFormShown
  );
  const { loading, removingAccountError } = useSelector(
    (state) => state.isAccountRemoved
  );
  const { userData } = useSelector((state) => state.login);
  const {
    showRemoveAccount,
    handleTrash,
    handleCancel,
    handleDeleteAccount,
  } = useMyProfile();
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
            <Notification
              notificationMessage={
                loginError
                  ? loginError
                  : logoutError
                  ? logoutError
                  : removingAccountError
                  ? removingAccountError
                  : changeUserPasswordError
                  ? changeUserPasswordError
                  : userPasswordChanged
                  ? capitalizeFirst(strings.myProfile.PASSWORD_CHANGED)
                  : null
              }
            />
          </Col>
          <Col xs={1} />
        </Row>
      </div>
      <div className="myprofile-second-section">
        <Row className="mb-5" />
        <Row className="mb-4" />
        {showRemoveAccount && (
          <Row>
            <Col xs={10} />
            <Col xs={1}>
              <FontAwesomeIcon
                onClick={handleTrash}
                className="myprofile-trash-icon"
                icon={faTrash}
              />
            </Col>
            <Col xs={1} />
          </Row>
        )}
        {!showRemoveAccount && (
          <Row>
            <Col xs={5} />
            <Col xs={6}>
              <div className="myprofile-remove-account-area">
                <p className="myprofile-remove-account-text">
                  {capitalizeFirst(strings.myProfile.REMOVE_ACCOUNT)}
                </p>
                {!loading && (
                  <div>
                    <FontAwesomeIcon
                      onClick={handleDeleteAccount}
                      className="myprofile-remove-account-icon yes"
                      icon={faCheckCircle}
                    />
                    <FontAwesomeIcon
                      onClick={handleCancel}
                      className="myprofile-remove-account-icon no"
                      icon={faTimesCircle}
                    />
                  </div>
                )}
                {loading && <Spinner animation="border" variant="dark" />}
              </div>
            </Col>
            <Col xs={1} />
          </Row>
        )}
        <Row className="mb-3" />
        {!myPasswordFormShown && (
          <Row>
            <Col xs={1} />
            <Col xs={3}>
              <Button
                disabled={userData.isGoogleUser}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showMyPasswordForm(true));
                }}
                className="myprofile-button-show-pass-form"
                variant="dark"
                size="sm"
              >
                {capitalizeFirst(strings.myProfile.BUTTON_EDIT_PASS)}
              </Button>
            </Col>
            <Col xs={8} />
          </Row>
        )}
        {myPasswordFormShown && (
          <>
            <Row className="mb-3" />
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
        {!myPasswordFormShown && (
          <>
            <Row className="mb-3" />
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
