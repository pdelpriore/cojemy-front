import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import Img from "react-image";
import { getImage } from "../../shared/getImage";
import { useSelector } from "react-redux";
import "./myProfile.css";

const MyProfilePreview = () => {
  const [inputUserPhoto, setInputUserPhoto] = useState({});
  const { userData } = useSelector((state) => state.login);

  useEffect(() => {
    if (
      !["googleusercontent.com"].some(
        (element) => userData.photo && userData.photo.includes(element)
      )
    )
      (async () => {
        const result = await getImage(userData.photo);
        if (result) {
          setInputUserPhoto((inputUserPhoto) => ({
            ...inputUserPhoto,
            userPhoto: result.imageBinary,
          }));
        }
      })();
  }, [userData.photo]);

  return (
    <div className="myprofile-preview-area">
      <Row>
        <Col xs={12}>
          <Img
            className="myprofile-user-image"
            src={
              ["googleusercontent.com"].some(
                (element) => userData.photo && userData.photo.includes(element)
              )
                ? userData.photo
                : inputUserPhoto.userPhoto
                ? inputUserPhoto.userPhoto
                : require("../../assets/imgs/cookerret.png")
            }
            loader={<Spinner animation="border" variant="dark" />}
          />
        </Col>
      </Row>
      <Row className="mb-3" />
      <Row>
        <Col xs={12}>
          <p className="myprofile-user-name">{userData.name}</p>
        </Col>
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
  );
};

export default MyProfilePreview;
