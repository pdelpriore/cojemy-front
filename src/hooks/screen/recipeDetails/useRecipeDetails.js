import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toEditRateComment } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { changeRecipeListItem } from "../../../redux/recipeBook/changeRecipeListItem/thunk/changeRecipeListItemThunk";
import {
  recipeDetailsClearState,
  removeRecipeRateAndComment,
  followAuthor,
  unfollowAuthor,
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
    dispatch(changeRecipeListItem(false));
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
          userData._id,
          userData.email
        )
      );
    }
  };

  const handleFollowRecipeAuthor = (authorId, recipeId) => {
    dispatch(followAuthor(authorId, recipeId, userData._id, userData.email));
  };

  const handleUnfollowRecipeAuthor = (authorId, recipeId) => {
    dispatch(unfollowAuthor(authorId, recipeId, userData._id, userData.email));
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
    handleFollowRecipeAuthor,
    handleUnfollowRecipeAuthor,
  };
};

export default useRecipeDetails;
