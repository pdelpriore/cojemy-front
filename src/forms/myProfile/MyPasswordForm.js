import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import useMyPasswordForm from "../../hooks/form/myProfile/useMyPasswordForm";
import { useSelector } from "react-redux";
import "./myProfileForm.css";

const MyPasswordForm = () => {
  const { inputs } = useMyPasswordForm();
  return (
    <Form onSubmit={null}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicCurrentPassword">
            <Form.Label className="myprofile-form-text-family">
              {capitalizeFirst(strings.myProfile.CURRENT_PASS)}
            </Form.Label>
            <Form.Control
              className="myprofile-text-family-username"
              onChange={null}
              value={inputs.currentPass || ""}
              size="sm"
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
              onChange={null}
              value={inputs.newPass || ""}
              size="sm"
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
              onChange={null}
              value={inputs.confirmPass || ""}
              size="sm"
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
              className="myprofile-button-text"
              type="submit"
              variant="outline-dark"
              size="sm"
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
            <Button
              onClick={null}
              className="myprofile-form-button-cancel"
              variant="outline-secondary"
              size="sm"
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
