import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toEditRateComment } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { hideRateCommentForm } from "../../../redux/recipeBook/hideRateCommentForm/thunk/hideRateCommentFormThunk";
import {
  recipeDetailsClearState,
  removeRecipeRateAndComment,
} from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { removeRateComment } from "../../../redux/recipeBook/removeRateComment/thunk/removeRateCommentThunk";

const useRecipeDetails = () => {
  const dispatch = useDispatch();
  const [editShow, setEditShow] = useState(false);

  const { userData } = useSelector((state) => state.login);
  const { googleUserData } = useSelector((state) => state.loginGoogle);

  const handleMouseEnter = () => {
    setEditShow(true);
  };

  const handleMouseLeave = () => {
    setEditShow(false);
  };

  const handleEditClick = (data) => {
    dispatch(hideRateCommentForm(false));
    dispatch(toEditRateComment(data));
  };

  const handleTrashClick = (rateId, commentId, recipeId, commentItemId) => {
    if (userData.email) {
      dispatch(removeRateComment(true));
      dispatch(
        removeRecipeRateAndComment(
          rateId,
          commentId,
          recipeId,
          commentItemId,
          userData.email
        )
      );
    } else if (googleUserData.email) {
      dispatch(removeRateComment(true));
      dispatch(
        removeRecipeRateAndComment(
          rateId,
          commentId,
          recipeId,
          commentItemId,
          googleUserData.email
        )
      );
    }
  };

  const handleClearDetailsState = () => {
    dispatch(recipeDetailsClearState());
  };
  return {
    editShow,
    handleMouseEnter,
    handleMouseLeave,
    handleEditClick,
    handleTrashClick,
    handleClearDetailsState,
  };
};

export default useRecipeDetails;
