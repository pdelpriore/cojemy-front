import {
  changeMyRecipesCases,
  showNewRecipeFormCases,
  myRecipePreviewCases,
} from "../../../config/cases/Cases";
import { addMyRecipeQuery } from "../query/addMyRecipeQuery";
import { editMyRecipeQuery } from "../query/editMyRecipeQuery";
import { removeMyRecipeQuery } from "../query/removeMyRecipeQuery";
import { strings } from "../../../../strings/Strings";

export const addMyRecipe = (
  title,
  image,
  video,
  category,
  cookTime,
  ingredients,
  description,
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
      console.log(responseData);
      const { errors, data } = responseData;
      if (data.addMyRecipe !== null) {
        dispatch({
          type: changeMyRecipesCases.RECIPE_UPDATED,
          payload: data.addMyRecipe,
        });
        dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: false });
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

export const editMyRecipe = (
  recipeId,
  title,
  recipeImage,
  video,
  category,
  cookTime,
  ingredients,
  description,
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
      if (data) {
        dispatch({
          type: changeMyRecipesCases.RECIPE_UPDATED,
          payload: data.editMyRecipe,
        });
        dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: false });
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

export const removeMyRecipe = (recipeId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeMyRecipesCases.LOADING, payload: true });
    const bodyRequest = removeMyRecipeQuery(recipeId, email);
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
        dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWED, payload: false });
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
