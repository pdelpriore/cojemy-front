import React from "react";
import SimpleBar from "simplebar-react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./recipeBook.css";

const RecipesList = () => {
  const { loadingRecipes, recipesRetrieved, recipesError } = useSelector(
    state => state.recipeBook
  );
  return loadingRecipes ? (
    <div className="recipesList-loading-area">
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <div className="recipesList-main-area">{recipesError}</div>
  );
};

export default RecipesList;
