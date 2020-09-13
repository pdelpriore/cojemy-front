import {
  showRecipeDetailsCases,
  changeRateCommentCases,
} from "../../../config/cases/Cases";
import { addRateAndCommentQuery } from "../query/addRateAndCommentQuery";
import { editRateAndCommentQuery } from "../query/editRateAndCommentQuery";
import { removeRateAndCommentQuery } from "../query/removeRateAndCommentQuery";
import { followAuthorQuery } from "../query/followAuthorQuery";
import { unfollowAuthorQuery } from "../query/unfollowAuthorQuery";
import { sortCommentsByDate } from "../../../../shared/sortCommentsByDate";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const showRecipeDetailsComponent = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.SHOWN, payload: bool });
  };
};

export const retrieveRecipeDetails = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: showRecipeDetailsCases.DETAILS_RETRIVED,
      payload: { ...data, comments: sortCommentsByDate(data) },
    });
    dispatch({ type: showRecipeDetailsCases.SHOWN, payload: true });
  };
};

export const recipeDetailsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.CLEAR_STATE });
  };
};

export const addRateAndComment = (recipeId, rate, comment, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = addRateAndCommentQuery(
      recipeId,
      rate,
      comment,
      userId,
      email,
      new Date()
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
            ...data.addRecipeRateComment,
            comments: sortCommentsByDate(data.addRecipeRateComment),
          },
        });
        dispatch({
          type: changeRateCommentCases.RATE_COMMENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showRecipeDetailsCases.SHOWN, payload: false });
        dispatch({
          type: showRecipeDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const editRecipeRateAndComment = (
  recipeId,
  rateId,
  rateValue,
  commentId,
  commentContent,
  userId,
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
          type: changeRateCommentCases.RATE_COMMENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showRecipeDetailsCases.SHOWN, payload: false });
        dispatch({
          type: showRecipeDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const removeRecipeRateAndComment = (
  rateId,
  commentId,
  recipeId,
  commentItemId,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = removeRateAndCommentQuery(
      rateId,
      commentId,
      recipeId,
      commentItemId,
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
          type: changeRateCommentCases.RATE_COMMENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showRecipeDetailsCases.SHOWN, payload: false });
        dispatch({
          type: showRecipeDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const followAuthor = (authorId, recipeId, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = followAuthorQuery(authorId, recipeId, userId, email);
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
            ...data.followAuthorRecipe,
            comments: sortCommentsByDate(data.followAuthorRecipe),
          },
        });
        dispatch({
          type: changeRateCommentCases.RATE_COMMENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showRecipeDetailsCases.SHOWN, payload: false });
        dispatch({
          type: showRecipeDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const unfollowAuthor = (authorId, recipeId, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.LOADING, payload: true });
    const bodyRequest = unfollowAuthorQuery(authorId, recipeId, userId, email);
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
            ...data.unfollowAuthorRecipe,
            comments: sortCommentsByDate(data.unfollowAuthorRecipe),
          },
        });
        dispatch({
          type: changeRateCommentCases.RATE_COMMENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: showRecipeDetailsCases.SHOWN, payload: false });
        dispatch({
          type: showRecipeDetailsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const recipeDetailsClearErrorState = () => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.CLEAR_ERROR_STATE });
  };
};
