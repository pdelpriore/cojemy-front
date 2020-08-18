import React, { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import Img from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { createDate, capitalize } from "../../util/Util";
import { useDispatch, useSelector } from "react-redux";
import { continueConversation } from "../../redux/mails/continueConversation/thunk/continueConversationThunk";
import useMailsList from "../../hooks/screen/mails/useMailsList";
import "./mails.css";

const MailsList = () => {
  timeago.register("fr", fr);
  const dispatch = useDispatch();

  const { loading, error } = useMailsList();
  const { messages } = useSelector((state) => state.userMessages);
  const { userData } = useSelector((state) => state.login);
  const { socket } = useSelector((state) => state.socketData);

  return loading ? (
    <div className="myrecipes-list-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : error.getMessagesError ? (
    <div className="myrecipes-list-item-norecipes">
      {error.getMessagesError}
    </div>
  ) : (
    <div className="myrecipes-list-main-area">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              if (userData._id === message.recipient._id) {
                socket.emit("messageRead", message._id);
              }
              dispatch(continueConversation(message, userData._id));
            }}
            className="myrecipes-list-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <div className="mails-list-photo-box">
                  <Img
                    className="mails-list-item-picture"
                    src={require("../../assets/imgs/cookerret.png")}
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
                        className="myevents-item-timeago"
                        datetime={createDate(message.date)}
                        locale="fr"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="myrecipes-list-item-title">
                  {message.recipient.email !== userData.email
                    ? message.recipient.name
                    : message.sender.name}
                </div>
                <div style={{ height: 5 }} />
                <div className="mails-list-item-author">
                  <div className="myrecipes-list-item-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div
                    className={
                      userData._id === message.recipient._id &&
                      !message.isRecipientRead
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
