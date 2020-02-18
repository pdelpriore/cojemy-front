import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Signup = ({ match }) => {
  let { path, url, isExact } = match;
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to signup
    </div>
  );
};

export default Signup;
