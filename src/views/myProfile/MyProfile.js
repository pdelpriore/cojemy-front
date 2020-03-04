import React from "react";
import Navbar from "../../components/navbar/Navbar";

const MyProfile = ({ match: { path, url, isExact } }) => {
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to My Profile
    </div>
  );
};

export default MyProfile;
