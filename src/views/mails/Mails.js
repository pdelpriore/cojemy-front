import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";

const Mails = ({ match: { path, url, isExact } }) => {
  const { socket } = useSelector((state) => state.socketData);

  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to Mails
    </div>
  );
};

export default Mails;
