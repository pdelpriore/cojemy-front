import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { showNewMessageForm } from "../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import { newMessage } from "../../redux/mails/newMessageSelected/thunk/newMessageSelectedThunk";
import { conversationWindowOpen } from "../../redux/mails/conversationWindowOpen/thunk/conversationWindowOpenThunk";
import MessageForm from "../../forms/mails/MessageForm";
import MailsList from "./MailsList";
import Emoji from "../../components/emoji/Emoji";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./mails.css";
import "../../shared/global.css";

const Mails = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });

  const { newMessageFormShown } = useSelector(
    (state) => state.isNewMessageFormShown
  );
  const { emojisShown } = useSelector((state) => state.isEmojiShown);

  return (
    <animated.div className="mails-area" style={props}>
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="mails-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="myrecipes-list">
              <ScrollArea
                className="myrecipes-scroll-area"
                smoothScrolling={true}
              >
                <ListGroup>
                  <MailsList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mails-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-3" />
        {!newMessageFormShown && (
          <>
            <Row>
              <Col xs={5} />
              <Col xs={2}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(newMessage(true));
                    dispatch(showNewMessageForm(true));
                    dispatch(conversationWindowOpen(true));
                  }}
                  className="myrecipes-button-new-recipe"
                  variant="outline-dark"
                >
                  <FontAwesomeIcon
                    className="mails-button-icon"
                    icon={faEnvelope}
                  />
                  <div className="myevents-button-new-event">
                    {capitalize(strings.mails.BUTTON_NEW_MESSAGE)}
                  </div>
                </Button>
              </Col>
              <Col xs={5} />
            </Row>
            <Row className="mb-5" />
            <Row>
              <Col xs={1} />
              <Col xs={10}>
                <div className="mails-clean-message-info">
                  {strings.mails.CLEAN_MESSAGE_INFO}
                </div>
              </Col>
              <Col xs={1} />
            </Row>
          </>
        )}
        {!newMessageFormShown && (
          <>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row>
              <Col xs={9}>
                <Image
                  className="mails-image"
                  src={require("../../assets/imgs/cookfriendsret.jpg")}
                />
              </Col>
              <Col xs={3} />
            </Row>
          </>
        )}
        {newMessageFormShown && (
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <MessageForm />
            </Col>
            <Col xs={2} />
          </Row>
        )}
      </div>
      {emojisShown && (
        <div className="global-emoji-overlay">
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={4} />
            <Col xs={4}>
              <Emoji />
            </Col>
            <Col xs={4} />
          </Row>
        </div>
      )}
    </animated.div>
  );
};

export default Mails;
