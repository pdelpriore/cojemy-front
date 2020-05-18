import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import ImageUploader from "react-images-upload";
import useMyProfileForm from "../../hooks/form/myProfile/useMyProfileForm";
import { useSelector } from "react-redux";
import "./myProfileForm.css";

const MyProfileForm = () => {
  const { handlePicture } = useMyProfileForm();
  return (
    <Form onSubmit={null}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.USER_NAME)}
            </Form.Label>
            <Form.Control
              className="text-family-username"
              onChange={null}
              value={null}
              size="lg"
              name="name"
              type="text"
              placeholder={strings.myProfile.USER_NAME_PLACEHOLDER}
            />
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
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            type="submit"
            className="myprofile-button-text"
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
                {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
              </div>
            ) : (
              <div>{capitalizeFirst(strings.contact.BUTTON_TEXT)}</div>
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MyProfileForm;
