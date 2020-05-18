import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImage } from "../../shared/getImage";
import { useSelector } from "react-redux";
import "./myProfile.css";

const MyProfilePreview = () => {
  const [inputUserPhoto, setInputUserPhoto] = useState({});
  const {
    userData: { photo, name },
  } = useSelector((state) => state.login);

  useEffect(() => {
    if (
      !["googleusercontent.com"].some(
        (element) => photo && photo.includes(element)
      )
    )
      (async () => {
        const result = await getImage(photo);
        if (result) {
          setInputUserPhoto((inputUserPhoto) => ({
            ...inputUserPhoto,
            userPhoto: result.imageBinary,
          }));
        }
      })();
  }, [photo]);

  return (
    <>
      <Row>
        <Col xs={12}>
          <Image
            className="myprofile-user-image"
            src={
              ["googleusercontent.com"].some((element) =>
                photo.includes(element)
              )
                ? photo
                : inputUserPhoto.userPhoto
                ? inputUserPhoto.userPhoto
                : require("../../assets/imgs/cookerret.png")
            }
            roundedCircle
          />
        </Col>
      </Row>
      <Row className="mb-3" />
      <Col xs={12}>
        <p className="myprofile-user-name">{name}</p>
      </Col>
    </>
  );
};

export default MyProfilePreview;
