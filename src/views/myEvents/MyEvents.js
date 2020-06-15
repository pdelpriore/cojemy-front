import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";
import ScrollArea from "react-scrollbar";
import MyEventsList from "./MyEventsList";
import MakeEventButtons from "./makeEventButtons";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./myEvents.css";

const MyEvents = ({ match: { path, url, isExact } }) => {
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props} className="myevents-main-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="myevents-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="myevents-list">
              <ScrollArea
                className="myevents-list-simplebar"
                smoothScrolling={true}
              >
                <ListGroup>
                  <MyEventsList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="myevents-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          {eventButtonId === 1 ? (
            <>
              <Col xs={3} />
              <Col xs={3}>
                <Button variant="outline-dark">
                  <div className="myevents-button-new-event">
                    {capitalize(strings.myEvents.BUTTON_NEW_EVENT)}
                  </div>
                </Button>
              </Col>
              <Col xs={1} />
            </>
          ) : (
            <Col xs={7} />
          )}
          <Col xs={4}>
            <MakeEventButtons />
          </Col>
          <Col xs={1} />
        </Row>
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-3" />
        <Row>
          <Col xs={3} />
          <Col xs={4}>
            <Image
              className="myevents-main-image"
              src={require("../../assets/imgs/spoonret.jpg")}
            />
          </Col>
          <Col xs={5} />
        </Row>
      </div>
    </animated.div>
  );
};

export default MyEvents;
