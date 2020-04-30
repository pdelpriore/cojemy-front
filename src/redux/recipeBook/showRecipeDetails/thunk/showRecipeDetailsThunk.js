import {
  showRecipeDetailsCases,
  addRateCommentCases,
} from "../../../config/cases/Cases";
import { addRateAndCommentQuery } from "../query/addRateAndCommentQuery";
import { editRateAndCommentQuery } from "../query/editRateAndCommentQuery";
import { removeRateAndCommentQuery } from "../query/removeRateAndCommentQuery";
import { sortCommentsByDate } from "../../../../shared/sortCommentsByDate";
import { strings } from "../../../../strings/Strings";

export const showRecipeDetailsComponent = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.SHOWED, payload: bool });
  };
};

export const retrieveRecipeDetails = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: showRecipeDetailsCases.DETAILS_RETRIVED,
      payload: { ...data, comments: sortCommentsByDate(data) },
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
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { data } = responseData;
      if (data) {
        dispatch({
          type: showRecipeDetailsCases.DETAILS_RETRIVED,
          payload: {
            ...data.addRecipeRateComment,
            comments: sortCommentsByDate(data.addRecipeRateComment),
          },
        });
        dispatch({
          type: addRateCommentCases.RATE_COMMENT_ADDED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const editRecipeRateAndComment = (
  recipeId,
  rateId,
  rateValue,
  commentId,
  commentContent,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = editRateAndCommentQuery(
      recipeId,
      rateId,
      rateValue,
      commentId,
      commentContent,
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
      const { data } = responseData;
      if (data) {
        dispatch({
          type: showRecipeDetailsCases.DETAILS_RETRIVED,
          payload: {
            ...data.editRecipeRateComment,
            comments: sortCommentsByDate(data.editRecipeRateComment),
          },
        });
        dispatch({
          type: addRateCommentCases.RATE_COMMENT_ADDED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const removeRecipeRateAndComment = (
  rateId,
  commentId,
  recipeId,
  commentItemId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = removeRateAndCommentQuery(
      rateId,
      commentId,
      recipeId,
      commentItemId,
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
      const { data } = responseData;
      if (data) {
        dispatch({
          type: showRecipeDetailsCases.DETAILS_RETRIVED,
          payload: {
            ...data.removeRecipeRateComment,
            comments: sortCommentsByDate(data.removeRecipeRateComment),
          },
        });
        dispatch({
          type: addRateCommentCases.RATE_COMMENT_ADDED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
