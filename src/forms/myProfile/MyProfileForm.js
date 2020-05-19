import React from "react";
import { Form, Row, Col, Button, Spinner, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import ImageUploader from "react-images-upload";
import useMyProfileForm from "../../hooks/form/myProfile/useMyProfileForm";
import { useSelector } from "react-redux";
import "./myProfileForm.css";

const MyProfileForm = () => {
  const {
    inputs,
    error,
    showOverlay,
    showEdit,
    handleInputChange,
    handlePicture,
    handleRemoveImage,
    handleEdit,
  } = useMyProfileForm();
  return (
    <Form onSubmit={null}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.USER_NAME)}
            </Form.Label>
            <Form.Control
              className="myprofile-text-family-username"
              onChange={handleInputChange}
              value={inputs.name || ""}
              size="lg"
              name="name"
              type="text"
              placeholder={strings.myProfile.USER_NAME_PLACEHOLDER}
            />
            {showOverlay && (
              <div className="myprofile-form-iuploader-overlay" />
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicPhoto">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myRecipes.PICTURE)}
            </Form.Label>
            <ImageUploader
              fileContainerStyle={{
                height: 75,
                fontFamily: "OpenSans-Regular",
                backgroundColor: "#f3cf7a",
                border: "1px solid #CED4DA",
                position: "relative",
              }}
              withIcon={false}
              singleImage={true}
              withLabel={true}
              label={capitalizeFirst(strings.myRecipes.MAX_PICTURE_SIZE)}
              buttonText={capitalizeFirst(strings.myRecipes.CHOOSE_PICTURE)}
              onChange={(picture) => handlePicture(picture)}
              imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
              fileTypeError={capitalizeFirst(
                strings.myRecipes.error.IMAGE_FORMAT
              )}
            />
            {showOverlay && (
              <div className="myprofile-form-iuploader-overlay" />
            )}
          </Form.Group>
        </Col>
      </Row>
      {inputs.profileImage && (
        <Row>
          <Col xs={9}>
            <Image
              src={inputs.profileImage.image ? inputs.profileImage.image : null}
              thumbnail
            />
          </Col>
          <Col xs={1} />
          <Col xs={1}>
            <FontAwesomeIcon
              className="myprofile-form-trash"
              icon={faTrash}
              onClick={(e) => {
                e.preventDefault();
                handleRemoveImage();
              }}
            />
          </Col>
          <Col xs={1} />
        </Row>
      )}
      {error.imageError && (
        <Row>
          <Col xs={12}>
            <div className="myprofile-form-image-error">
              {error.imageError ? error.imageError : null}
            </div>
          </Col>
        </Row>
      )}
      <Row className="mb-3" />
      <Row>
        <Col xs={12}>
          {showEdit && (
            <Button
              className="myprofile-button-text"
              variant="dark"
              onClick={handleEdit}
            >
              <div>{capitalizeFirst(strings.myProfile.BUTTON_TEXT_EDIT)}</div>
            </Button>
          )}
          {!showEdit && (
            <Button
              className="myprofile-button-text"
              type="submit"
              variant="outline-dark"
            >
              <div className="myprofile-spinner">
                {false && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </div>
              {false ? (
                <div className="myprofile-button-loading">
                  {capitalizeFirst(strings.myProfile.BUTTON_TEXT_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.myProfile.BUTTON_TEXT)}</div>
              )}
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default MyProfileForm;
