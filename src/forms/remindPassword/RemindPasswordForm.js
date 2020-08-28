import React from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { capitalizeFirst } from "../../util/Util";
import useRemindPassForm from "../../hooks/form/remindPass/useRemindPassForm";
import { useSpring, animated } from "react-spring";
import { showRemindPassComponent } from "../../redux/remindPassword/showRemindPass/thunk/showRemindPassThunk";
import { useSelector, useDispatch } from "react-redux";
import { strings } from "../../strings/Strings";
import "./remindPassword.css";
import "../../shared/global.css";

const RemindPasswordForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useRemindPassForm();
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const { loading } = useSelector((state) => state.remindPass);
  const dispatch = useDispatch();
  return (
    <animated.div style={props}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicRemindPasswordEmail">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.remindPass.EMAIL)}
              </Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={inputs.email || ""}
                className="remindPass-form-control"
                size="lg"
                name="email"
                type="email"
                placeholder={strings.remindPass.EMAIL_PLACEHOLDER}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="remindPass-button">
              <Button
                className="global-button-label"
                disabled={
                  loading || inputs.email === undefined || inputs.email === ""
                }
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
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showRemindPassComponent(false));
                }}
                className="global-button-label"
                variant="outline-danger"
              >
                {capitalizeFirst(strings.remindPass.BUTTON_TEXT_CANCEL)}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </animated.div>
  );
};

export default RemindPasswordForm;
