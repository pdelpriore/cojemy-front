import { changeMyRecipesCases } from "../../../config/cases/Cases";
import { addMyRecipeQuery } from "../query/addMyRecipeQuery";
import { editMyRecipeQuery } from "../query/editMyRecipeQuery";
import { removeMyRecipeQuery } from "../query/removeMyRecipeQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const addMyRecipe = (
  title,
  image,
  video,
  category,
  cookTime,
  ingredients,
  description,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeMyRecipesCases.LOADING, payload: true });
    const bodyRequest = addMyRecipeQuery(
      title,
      image,
      video,
      category,
      cookTime,
      ingredients,
      description,
      userId,
      email
    );
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
      if (data.addMyRecipe !== null) {
        dispatch({
          type: changeMyRecipesCases.RECIPE_UPDATED,
          payload: data.addMyRecipe,
        });
      } else if (errors) {
        dispatch({
          type: changeMyRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: changeMyRecipesCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const editMyRecipe = (
  recipeId,
  title,
  recipeImage,
  video,
  category,
  cookTime,
  ingredients,
  description,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeMyRecipesCases.LOADING, payload: true });
    const bodyRequest = editMyRecipeQuery(
      recipeId,
      title,
      recipeImage,
      video,
      category,
      cookTime,
      ingredients,
      description,
      userId,
      email
    );
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
      if (data.editMyRecipe !== null) {
        dispatch({
          type: changeMyRecipesCases.RECIPE_UPDATED,
          payload: data.editMyRecipe,
        });
      } else if (errors) {
        dispatch({
          type: changeMyRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const removeMyRecipe = (recipeId, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeMyRecipesCases.LOADING, payload: true });
    const bodyRequest = removeMyRecipeQuery(recipeId, userId, email);
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
      if (data.removeMyRecipe !== null) {
        dispatch({
          type: changeMyRecipesCases.RECIPE_UPDATED,
          payload: data.removeMyRecipe,
        });
      } else if (errors) {
        dispatch({
          type: changeMyRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const changeMyRecipesClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: changeMyRecipesCases.CLEAR_STATE });
  };
};
