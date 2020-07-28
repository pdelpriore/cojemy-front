import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { showNewMessageForm } from "../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import MessageForm from "../../forms/mails/MessageForm";
import useMails from "../../hooks/screen/mails/useMails";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./mails.css";

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

  const { loading, messages, conversations, error } = useMails();
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
                <ListGroup></ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mails-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        {!newMessageFormShown && (
          <Row>
            <Col xs={3} />
            <Col xs={3}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showNewMessageForm(true));
                }}
                variant="outline-dark"
              >
                <div className="myevents-button-new-event">
                  {capitalize(strings.mails.BUTTON_NEW_MESSAGE)}
                </div>
              </Button>
            </Col>
            <Col xs={1} />
          </Row>
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
    </animated.div>
  );
};

export default Mails;
