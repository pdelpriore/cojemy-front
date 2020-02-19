import React from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "../../components/navbar/Navbar";
import "./signup.css";

const Signup = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <animated.div style={props} className="signup-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="signup-first-section"></div>
      <div className="signup-second-section"></div>
    </animated.div>
  );
};

export default Signup;
