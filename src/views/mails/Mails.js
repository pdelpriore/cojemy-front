import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Mails = ({ match: { path, url, isExact } }) => {
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to Mails
    </div>
  );
};

export default Mails;
