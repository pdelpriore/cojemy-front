import {
  retrieveMyRecipesCases,
  addNewRecipeCases,
  showNewRecipeFormCases,
  newRecipeErrorCases,
} from "../../../config/cases/Cases";
import { retrieveMyRecipesQuery } from "../query/retrieveMyRecipesQuery";
import { addMyRecipeQuery } from "../query/addMyRecipeQuery";
import { editMyRecipeQuery } from "../query/editMyRecipeQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const getMyRecipes = (email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveMyRecipesCases.LOADING, payload: true });
    const bodyRequest = retrieveMyRecipesQuery(email);
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
      if (err) console.log(err);
    }
  };
};

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
    dispatch({ type: retrieveMyRecipesCases.LOADING, payload: true });
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
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: retrieveMyRecipesCases.MY_RECIPES_RETRIEVED,
          payload: data.addMyRecipe,
        });
        dispatch({ type: addNewRecipeCases.RECIPE_ADDED, payload: true });
        dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: false });
      } else if (errors) {
        if (
          errors[0].message ===
          capitalizeFirst(strings.myRecipes.error.RECIPE_EXISTS)
        ) {
          dispatch({ type: retrieveMyRecipesCases.LOADING, payload: false });
          dispatch({
            type: newRecipeErrorCases.ERROR_RECEIVED,
            payload: errors[0].message,
          });
        } else {
          dispatch({
            type: retrieveMyRecipesCases.ERROR,
            payload: errors[0].message,
          });
        }
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
    dispatch({ type: retrieveMyRecipesCases.LOADING, payload: true });
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
          type: retrieveMyRecipesCases.MY_RECIPES_RETRIEVED,
          payload: data.editMyRecipe,
        });
        dispatch({ type: addNewRecipeCases.RECIPE_ADDED, payload: true });
        dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: false });
      } else if (errors) {
        dispatch({
          type: retrieveMyRecipesCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const myRecipesClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: retrieveMyRecipesCases.CLEAR_STATE });
  };
};
