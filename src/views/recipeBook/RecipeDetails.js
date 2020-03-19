import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetailsClearState } from "../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import "./recipeBook.css";

const RecipeDetails = () => {
  const dispatch = useDispatch();
  const { detailsDataRetrieved } = useSelector(
    state => state.showRecipeDetails
  );
  return (
    <div className="recipeDetails-main">
      <h1>{detailsDataRetrieved.title}</h1>
      <div style={{ height: 50 }} />
      <div
        onClick={e => {
          e.preventDefault();
          dispatch(recipeDetailsClearState());
        }}
      >
        Ferme
      </div>
    </div>
  );
};

export default RecipeDetails;
