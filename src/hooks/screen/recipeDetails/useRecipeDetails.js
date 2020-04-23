import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toEditRateComment } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { hideRateCommentForm } from "../../../redux/recipeBook/hideRateCommentForm/thunk/hideRateCommentFormThunk";
import {
  recipeDetailsClearState,
  removeRecipeRateAndComment,
} from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";

const useRecipeDetails = () => {
  const dispatch = useDispatch();
  const [editShow, setEditShow] = useState(false);

  const { userData } = useSelector((state) => state.login);

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
      dispatch(
        removeRecipeRateAndComment(
          rateId,
          commentId,
          recipeId,
          commentItemId,
          userData.email
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
