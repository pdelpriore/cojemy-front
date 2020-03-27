import { showRecipeDetailsCases } from "../../config/cases/Cases";
import { addRateAndCommentQuery } from "../query/addRateAndCommentQuery";
import { strings } from "../../../strings/Strings";

export const showRecipeDetailsComponent = bool => {
  return (dispatch, getState) => {
    if (bool) {
      dispatch({ type: showRecipeDetailsCases.SHOWED, payload: bool });
    }
  };
};

export const retrieveRecipeDetails = data => {
  let commentsSorted = data.comments.sort((a, b) => {
    return a.comment.date > b.comment.date ? -1 : 1;
  });
  let dataWithCommentsSorted = { ...data, comments: commentsSorted };
  return (dispatch, getState) => {
    dispatch({
      type: showRecipeDetailsCases.DETAILS_RETRIVED,
      payload: dataWithCommentsSorted
    });
  };
};

export const recipeDetailsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.CLEAR_STATE });
  };
};

export const addRateAndComment = (recipeId, rate, comment, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = addRateAndCommentQuery(recipeId, rate, comment, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        console.log(data);
        // dispatch({
        //   type: retrieveRecipesCases.RECIPE_RETRIVED,
        //   payload: data.retrieveRecipes
        // });
      } else if (errors) {
        console.log(errors);
        // dispatch({
        //   type: retrieveRecipesCases.ERROR,
        //   payload: errors[0].message
        // });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
