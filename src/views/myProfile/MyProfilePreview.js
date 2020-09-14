import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Img from "react-image";
import useMyProfilePreview from "../../hooks/screen/myProfile/useMyProfilePreview";
import { userGooglePhoto } from "../../shared/testWordsArray";
import "./myProfile.css";
import "../../shared/global.css";

const MyProfilePreview = () => {
  const { inputUserPhoto, userData } = useMyProfilePreview();

  return (
    <div className="myprofile-preview-area">
      <Row>
        <Col xs={12}>
          <Img
            className="myprofile-user-image"
            src={
              userGooglePhoto.some(
                (element) => userData.photo && userData.photo.includes(element)
              )
                ? userData.photo
                : inputUserPhoto.userPhoto
                ? inputUserPhoto.userPhoto
                : require("../../assets/imgs/cookerret.png")
            }
            loader={
              <div className="global-list-picture-loading-box">
                <Spinner animation="border" variant="dark" />
              </div>
            }
          />
        </Col>
      </Row>
      <Row className="mb-3" />
      <Row>
        <Col xs={12}>
          <p className="myprofile-user-name">{userData.name}</p>
        </Col>
      </Row>
    </div>
  );
};

export default MyProfilePreview;
