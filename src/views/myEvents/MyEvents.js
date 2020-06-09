import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollArea from "react-scrollbar";
import MyEventsList from "./MyEventsList";
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
      <div className="myevents-first-section"></div>
      <div className="myevents-second-section"></div>
    </animated.div>
  );
};

export default MyEvents;
