import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./myProfile.css";

const MyProfile = ({ match: { path, url, isExact } }) => {
  return (
    <div className="myprofile-main-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="myprofile-first-section"></div>
      <div className="myprofile-second-section"></div>
    </div>
  );
};

export default MyProfile;
