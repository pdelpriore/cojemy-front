import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import MyProfileForm from "../../forms/myProfile/MyProfileForm";
import MyProfilePreview from "./MyProfilePreview";
import Navbar from "../../components/navbar/Navbar";
import "./myProfile.css";

const MyProfile = ({ match: { path, url, isExact } }) => {
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
          <Col xs={12}>
            <Image
              className="myprofile-background-image"
              src={require("../../assets/imgs/panret2.jpg")}
            />
          </Col>
        </Row>
      </div>
      <div className="myprofile-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
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
      </div>
    </div>
  );
};

export default MyProfile;
