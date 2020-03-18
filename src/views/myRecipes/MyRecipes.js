import React from "react";
import Navbar from "../../components/navbar/Navbar";

const MyRecipes = ({ match: { path, url, isExact } }) => {
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome
    </div>
  );
};

export default MyRecipes;
