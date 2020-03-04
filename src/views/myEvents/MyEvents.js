import React from "react";
import Navbar from "../../components/navbar/Navbar";

const MyEvents = ({ match: { path, url, isExact } }) => {
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to My Events
    </div>
  );
};

export default MyEvents;
