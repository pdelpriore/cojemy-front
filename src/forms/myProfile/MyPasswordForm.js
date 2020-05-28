import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import useMyPasswordForm from "../../hooks/form/myProfile/useMyPasswordForm";
import { useSelector } from "react-redux";
import "./myProfileForm.css";

const MyPasswordForm = () => {
  const {
    inputs,
    handleCancel,
    handleOnChange,
    handleSubmit,
  } = useMyPasswordForm();
  const { loading } = useSelector((state) => state.isUserPasswordChanged);
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicCurrentPassword">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.CURRENT_PASS)}
            </Form.Label>
            <Form.Control
              className="myprofile-text-family-username"
              onChange={handleOnChange}
              value={inputs.currentPass || ""}
              size="lg"
              name="currentPass"
              type="password"
              placeholder={strings.myProfile.CURRENT_PASS_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicNewPassword">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.NEW_PASS)}
            </Form.Label>
            <Form.Control
              className="myprofile-text-family-username"
              onChange={handleOnChange}
              value={inputs.newPass || ""}
              size="lg"
              name="newPass"
              type="password"
              placeholder={strings.myProfile.NEW_PASS_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.CONFIRM_PASS)}
            </Form.Label>
            <Form.Control
              className="myprofile-text-family-username"
              onChange={handleOnChange}
              value={inputs.confirmPass || ""}
              size="lg"
              name="confirmPass"
              type="password"
              placeholder={strings.myProfile.CONFIRME_PASS_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="myprofile-form-buttons-box">
            <Button
              disabled={
                loading ||
                inputs.currentPass === undefined ||
                inputs.currentPass === "" ||
                inputs.newPass === undefined ||
                inputs.newPass === "" ||
                inputs.confirmPass === undefined ||
                inputs.confirmPass === ""
              }
              className="myprofile-button-text"
              type="submit"
              variant="outline-dark"
            >
              <div className="myprofile-spinner">
                {loading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </div>
              {loading ? (
                <div className="myprofile-button-loading">
                  {capitalizeFirst(strings.myProfile.BUTTON_TEXT_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.myProfile.BUTTON_TEXT)}</div>
              )}
            </Button>
            <Button
              onClick={handleCancel}
              className="myprofile-form-button-cancel"
              variant="outline-secondary"
            >
              {capitalizeFirst(strings.rating.BUTTON_CANCEL_TEXT)}
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default MyPasswordForm;
