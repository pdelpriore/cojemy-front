import React from "react";
import { Form, Row, Col, Button, Spinner, ListGroup } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import useMessageForm from "../../hooks/form/mails/useMessageForm";
import RecipientSuggestions from "../../components/mails/suggestions/RecipientSuggestions";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./messageForm.css";

const MessageForm = () => {
  const {
    inputs,
    recipients,
    handleInputChange,
    handleCancel,
    loading,
    error,
    showRecipientSuggestions,
  } = useMessageForm();
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicTo">
            <div className="myevents-icon-address-box">
              <Form.Control
                className="myprofile-text-family-username"
                onChange={handleInputChange}
                value={inputs.to || ""}
                size="lg"
                name="to"
                type="text"
                autoComplete="off"
                placeholder={strings.mails.TO_PLACEHOLDER}
              />
              <div className="myevents-input-spinner">
                {loading && <Spinner animation="border" size="sm" />}
              </div>
            </div>
            {showRecipientSuggestions && (
              <RecipientSuggestions recipients={recipients} />
            )}
            {error.searchRecipientError && (
              <div className="myevents-form-image-error">
                {error.searchRecipientError}
              </div>
            )}
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
              onChange={handleInputChange}
              value={inputs.content || ""}
              as="textarea"
              rows="3"
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

export default MessageForm;
