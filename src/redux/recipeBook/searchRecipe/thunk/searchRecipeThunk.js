import { searchRecipeCases } from "../../../config/cases/Cases";
import { searchRecipeQuery } from "../query/searchRecipeQuery";
import { strings } from "../../../../strings/Strings";

export const searchRecipe = (recipeTitle, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: searchRecipeCases.LOADING, payload: true });
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
          type: searchRecipeCases.RECIPE_FOUND,
          payload: data.searchRecipe,
        });
      } else if (errors) {
        dispatch({
          type: searchRecipeCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const searchRecipeClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: searchRecipeCases.CLEAR_STATE });
  };
};
