import { retrieveMyRecipesCases } from "../../../config/cases/Cases";
import { retrieveMyRecipesQuery } from "../query/retrieveMyRecipesQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const getMyRecipes = (userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveMyRecipesCases.LOADING, payload: true });
    const bodyRequest = retrieveMyRecipesQuery(userId, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: retrieveMyRecipesCases.MY_RECIPES_RETRIEVED,
          payload: data.retrieveMyRecipes,
        });
      } else if (errors) {
        dispatch({
          type: retrieveMyRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: retrieveMyRecipesCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const myRecipesClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: retrieveMyRecipesCases.CLEAR_STATE });
  };
};
