import React, { useEffect } from "react";
import { categorySelectedClearState } from "../../redux/recipeBook/recipeCategorySelected/thunk/recipeCategorySelectedThunk";
import { recipeDetailsClearState } from "../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar/Navbar";

const MyRecipes = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categorySelectedClearState());
    dispatch(recipeDetailsClearState());
  }, [dispatch]);

  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome
    </div>
  );
};

export default MyRecipes;
