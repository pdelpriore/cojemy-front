import React from "react";
import { Form, Row, Col, Button, Spinner, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import useMessageForm from "../../hooks/form/mails/useMessageForm";
import RecipientSuggestions from "../../components/mails/suggestions/RecipientSuggestions";
import Recipient from "../../components/mails/suggestions/Recipient";
import { useSelector } from "react-redux";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./messageForm.css";

const MessageForm = () => {
  const {
    inputs,
    recipients,
    handleInputChange,
    handleCancel,
    handleRemoveRecipient,
    handleSubmitMessage,
    loading,
    error,
    showRecipientSuggestions,
  } = useMessageForm();

  const { recipient } = useSelector((state) => state.isRecipientChosen);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );
  const { conversations } = useSelector((state) => state.userConversations);

  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicTo">
            {!recipient.name && newMessageSelected ? (
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
            ) : (
              <div className="message-form-recipient">
                <Recipient recipient={recipient} />
                {newMessageSelected && (
                  <FontAwesomeIcon
                    onClick={handleRemoveRecipient}
                    className="message-form-recipient-trash"
                    icon={faTimes}
                  />
                )}
              </div>
            )}
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
              {conversations &&
                conversations.length > 0 &&
                conversations.map((conversation, index) => (
                  <ListGroup key={index} variant="flush">
                    <ListGroup.Item>{conversation.content}</ListGroup.Item>
                  </ListGroup>
                ))}
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
              onClick={handleSubmitMessage}
              className="myprofile-button-text"
              type="submit"
              variant="outline-dark"
              disabled={
                loading ||
                !recipient.name ||
                inputs.content === undefined ||
                inputs.content === ""
              }
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
                  {capitalizeFirst(strings.mails.BUTTON_SEND_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.mails.BUTTON_SEND)}</div>
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
