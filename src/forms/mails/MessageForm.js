import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Image,
  Spinner,
  ListGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import useMessageForm from "../../hooks/form/mails/useMessageForm";
import RecipientSuggestions from "../../components/mails/suggestions/RecipientSuggestions";
import Recipient from "../../components/mails/suggestions/Recipient";
import { useSelector } from "react-redux";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { userGooglePhoto } from "../../shared/testWordsArray";
import { getConversationDate } from "./getConversationDate";
import "./messageForm.css";
import "../../shared/global.css";

const MessageForm = () => {
  const {
    inputs,
    recipients,
    handleInputChange,
    handleCancel,
    handleRemoveRecipient,
    handleSubmitMessage,
    conversationScrollRef,
    loading,
    searchLoading,
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
                  className="message-form-control"
                  onChange={handleInputChange}
                  value={inputs.to || ""}
                  size="lg"
                  name="to"
                  type="text"
                  autoComplete="off"
                  placeholder={strings.mails.TO_PLACEHOLDER}
                />
                <div className="myevents-input-spinner">
                  {searchLoading && <Spinner animation="border" size="sm" />}
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
            <ScrollArea
              ref={conversationScrollRef}
              className="message-form-conversation-scroll"
              smoothScrolling={true}
              horizontal={false}
            >
              {conversations &&
                conversations.length > 0 &&
                conversations.map((conversation, index) => (
                  <ListGroup key={index} variant="flush">
                    <ListGroup.Item>
                      <div className="conversation-area">
                        <div className="conversation-author-box">
                          <Image
                            className="conversation-author-image"
                            src={
                              conversation.author.photo &&
                              userGooglePhoto.some(
                                (element) =>
                                  conversation.author.photo &&
                                  conversation.author.photo.includes(element)
                              )
                                ? conversation.author.photo
                                : conversation.author.photo
                                ? strings.path.IMAGE_REQUEST +
                                  conversation.author.photo
                                : require("../../assets/imgs/cookerret.png")
                            }
                            roundedCircle
                          />
                          <div className="conversation-author">
                            {conversation.author.name}
                          </div>
                        </div>
                        <div className="conversation-date">
                          {getConversationDate(new Date(conversation.date))}
                        </div>
                      </div>
                      <div className="conversation-content">
                        {conversation.content}
                      </div>
                    </ListGroup.Item>
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
              className="message-form-control"
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
          <div className="message-form-buttons-box">
            <Button
              onClick={handleSubmitMessage}
              className="global-button-label"
              type="submit"
              variant="outline-dark"
              disabled={
                loading ||
                !recipient.name ||
                inputs.content === undefined ||
                inputs.content === ""
              }
            >
              <div className="message-spinner">
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
                <div className="message-button-loading">
                  {capitalizeFirst(strings.mails.BUTTON_SEND_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.mails.BUTTON_SEND)}</div>
              )}
            </Button>
            <Button
              onClick={handleCancel}
              className="global-button-label"
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
