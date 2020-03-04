import React from "react";
import Navbar from "../../components/navbar/Navbar";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to Recipe Book
    </div>
  );
};

export default RecipeBook;
