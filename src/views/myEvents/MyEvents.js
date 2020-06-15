import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollArea from "react-scrollbar";
import MyEventsList from "./MyEventsList";
import MakeEventButtons from "./makeEventButtons";
import "./myEvents.css";

const MyEvents = ({ match: { path, url, isExact } }) => {
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
          <Col xs={7} />
          <Col xs={3}>
            <MakeEventButtons />
          </Col>
          <Col xs={2} />
        </Row>
      </div>
    </animated.div>
  );
};

export default MyEvents;
