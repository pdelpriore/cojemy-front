import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import MyProfileForm from "../../forms/myProfile/MyProfileForm";
import MyProfilePreview from "./MyProfilePreview";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Notification from "../../components/notifications/Notification";
import MyPasswordForm from "../../forms/myProfile/MyPasswordForm";
import "./myProfile.css";

const MyProfile = ({ match: { path, url, isExact } }) => {
  const { loginError } = useSelector((state) => state.login);
  return (
    <div className="myprofile-main-area">
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
        <Row className="mb-4" />
        <Row className="mb-5" />
        <Row>
          <Col xs={8} />
          <Col xs={3}>
            <Button className="myprofile-button-text" variant="dark" size="sm">
              Mot de passe à changer ?
            </Button>
          </Col>
          <Col xs={1} />
        </Row>
        <Row>
          <Col xs={6} />
          <Col xs={5}>
            <MyPasswordForm />
          </Col>
          <Col xs={1} />
        </Row>
        <Row className="mb-3" />
        <Row>
          <Col xs={1} />
          <Col xs={6}>
            <MyProfileForm />
          </Col>
          <Col xs={5} />
        </Row>
      </div>
    </div>
  );
};

export default MyProfile;
