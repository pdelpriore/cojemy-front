import { retrieveRecipesCases } from "../../../config/cases/Cases";
import { retrieveRecipeQuery } from "../query/retrieveRecipeQuery";
import { searchRecipeQuery } from "../query/searchRecipeQuery";
import { strings } from "../../../../strings/Strings";

export const getRecipe = (category, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveRecipesCases.LOADING, payload: true });
    const bodyRequest = retrieveRecipeQuery(category, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: retrieveRecipesCases.RECIPE_RETRIVED,
          payload: data.retrieveRecipes,
        });
      } else if (errors) {
        dispatch({
          type: retrieveRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const searchRecipe = (recipeTitle, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveRecipesCases.LOADING, payload: true });
    const bodyRequest = searchRecipeQuery(recipeTitle, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: retrieveRecipesCases.RECIPE_RETRIVED,
          payload: data.searchRecipe,
        });
      } else if (errors) {
        dispatch({
          type: retrieveRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
