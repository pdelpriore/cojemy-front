import React from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { capitalizeFirst } from "../../util/Util";
import useRemindPassForm from "../../hooks/form/remindPass/useRemindPassForm";
import "./remindPass.css";

const RemindPasswordForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useRemindPassForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicRemindPasswordEmail">
            <Form.Label className="remindPass-text-family">
              {capitalizeFirst(strings.remindPass.EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.email || ""}
              className="remindPass-placeholder"
              size="lg"
              name="email"
              type="email"
              placeholder={strings.remindPass.EMAIL}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={inputs.email === undefined || inputs.email === ""}
            className="remindPass-button"
            type="submit"
            variant="outline-dark"
          >
            <div className="remindPass-spinner">
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {loading ? (
                <div className="remindPass-loading-text">
                  {capitalizeFirst(strings.remindPass.BUTTON_TEXT_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.remindPass.BUTTON_TEXT)}</div>
              )}
            </div>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default RemindPasswordForm;
