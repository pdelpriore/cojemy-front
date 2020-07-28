import React from "react";
import { useDispatch } from "react-redux";
import { showNewMessageForm } from "../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import { Form, Row, Col, Button, Spinner, ListGroup } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./messageForm.css";

const MessageForm = () => {
  const dispatch = useDispatch();
  return (
    <Form onSubmit={null}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicTo">
            <Form.Control
              className="myprofile-text-family-username"
              onChange={null}
              value={null}
              size="lg"
              name="to"
              type="text"
              placeholder={strings.mails.TO_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="message-form-conversation-box">
            <ScrollArea smoothScrolling={true}>
              <ListGroup variant="flush">
                <ListGroup.Item className="message-form-conversation-item">
                  message
                </ListGroup.Item>
              </ListGroup>
            </ScrollArea>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicContent">
            <Form.Control
              className="myprofile-text-family-username"
              onChange={null}
              value={null}
              size="lg"
              name="content"
              type="text"
              placeholder={strings.mails.CONTENT_PLACEHOLDER}
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
              onClick={(e) => {
                e.preventDefault();
                dispatch(showNewMessageForm(false));
              }}
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

export default MessageForm;
