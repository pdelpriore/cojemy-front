import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Img from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pl from "timeago.js/lib/lang/pl";
import { createDate } from "../../util/Util";
import { useDispatch, useSelector } from "react-redux";
import { continueConversation } from "../../redux/mails/continueConversation/thunk/continueConversationThunk";
import useMailsList from "../../hooks/screen/mails/useMailsList";
import { strings } from "../../strings/Strings";
import { userGooglePhoto } from "../../shared/testWordsArray";
import "./mails.css";

const MailsList = () => {
  timeago.register("pl", pl);
  const dispatch = useDispatch();

  const { loading } = useMailsList();
  const { messages } = useSelector((state) => state.userMessages);
  const { userData } = useSelector((state) => state.login);
  const { mailError } = useSelector((state) => state.hasMailError);

  return loading ? (
    <div className="mails-list-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : mailError ? (
    <div className="mails-list-item-norecipes">{mailError}</div>
  ) : (
    <div className="mails-list-main-area">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(continueConversation(message, userData._id));
            }}
            className="mails-list-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <div className="mails-list-photo-box">
                  <Img
                    className="mails-list-item-picture"
                    src={
                      message.recipient._id !== userData._id
                        ? userGooglePhoto.some(
                            (element) =>
                              message.recipient.photo &&
                              message.recipient.photo.includes(element)
                          )
                          ? message.recipient.photo
                          : !userGooglePhoto.some(
                              (element) =>
                                message.recipient.photo &&
                                message.recipient.photo.includes(element)
                            ) && message.recipient.photo
                          ? strings.path.IMAGE_REQUEST + message.recipient.photo
                          : require("../../assets/imgs/cookerret.png")
                        : userGooglePhoto.some(
                            (element) =>
                              message.sender.photo &&
                              message.sender.photo.includes(element)
                          )
                        ? message.sender.photo
                        : !userGooglePhoto.some(
                            (element) =>
                              message.sender.photo &&
                              message.sender.photo.includes(element)
                          ) && message.sender.photo
                        ? strings.path.IMAGE_REQUEST + message.sender.photo
                        : require("../../assets/imgs/cookerret.png")
                    }
                    loader={<Spinner animation="border" variant="info" />}
                  />
                  <div
                    className={
                      message.recipient.email !== userData.email
                        ? message.recipient.isConnected
                          ? "mails-recipient-active"
                          : "mails-recipient-inactive"
                        : message.sender.isConnected
                        ? "mails-recipient-active"
                        : "mails-recipient-inactive"
                    }
                  ></div>
                </div>
              </Col>
              <Col xs={9}>
                <Row>
                  <Col xs={7} />
                  <Col xs={5}>
                    <div>
                      <TimeAgo
                        className="mails-item-timeago"
                        datetime={createDate(
                          message.conversations[
                            message.conversations.length - 1
                          ].date
                        )}
                        locale="pl"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mails-list-item-title">
                  {message.recipient._id !== userData._id
                    ? message.recipient.name
                    : message.sender.name}
                </div>
                <div style={{ height: 5 }} />
                <div className="mails-list-item-author">
                  <div className="mails-list-item-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div
                    className={
                      !message.isRead &&
                      ((userData._id === message.recipient._id &&
                        userData._id !==
                          message.conversations[
                            message.conversations.length - 1
                          ].author._id) ||
                        (userData._id === message.sender._id &&
                          userData._id !==
                            message.conversations[
                              message.conversations.length - 1
                            ].author._id))
                        ? "mails-list-item-message-unread"
                        : ""
                    }
                  >
                    {message.conversations[message.conversations.length - 1]
                      .content.length > 64
                      ? message.conversations[
                          message.conversations.length - 1
                        ].content
                          .substr(0, 64)
                          .concat(" ...")
                      : message.conversations[message.conversations.length - 1]
                          .content}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default MailsList;
