import { useState } from "react";
import { useDispatch } from "react-redux";
import { toEditRateComment } from "../../../redux/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { hideRateCommentForm } from "../../../redux/hideRateCommentForm/thunk/hideRateCommentFormThunk";

const useRecipeDetails = () => {
  const dispatch = useDispatch();
  const [editShow, setEditShow] = useState(false);

  const handleMouseEnter = () => {
    setEditShow(true);
  };

  const handleMouseLeave = () => {
    setEditShow(false);
  };

  const handleEditClick = data => {
    dispatch(hideRateCommentForm(false));
    dispatch(toEditRateComment(data));
  };

  const handleTrashClick = (removeRate, removeComment) => {
    console.log(removeRate);
    console.log(removeComment);
  };
  return {
    editShow,
    handleMouseEnter,
    handleMouseLeave,
    handleEditClick,
    handleTrashClick
  };
};

export default useRecipeDetails;
