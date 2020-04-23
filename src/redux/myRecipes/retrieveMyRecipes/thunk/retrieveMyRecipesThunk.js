import {
  retrieveMyRecipesCases,
  showNewRecipeFormCases,
} from "../../../config/cases/Cases";
import { retrieveMyRecipesQuery } from "../query/retrieveMyRecipesQuery";
import { addMyRecipeQuery } from "../query/addMyRecipeQuery";
import { strings } from "../../../../strings/Strings";

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

export const myRecipesClearErrorState = () => {
  return (dispatch, getState) => {
    dispatch({ type: retrieveMyRecipesCases.CLEAR_ERROR_STATE });
  };
};
