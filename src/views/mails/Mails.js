import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import { useSpring, animated } from "react-spring";
import useMails from "../../hooks/screen/mails/useMails";
import "./mails.css";

const Mails = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });

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
      <div className="mails-second-section"></div>
    </animated.div>
  );
};

export default Mails;
