import { useState } from "react";

const useRecipeDetails = () => {
  const [editShow, setEditShow] = useState(false);

  const handleMouseEnter = () => {
    setEditShow(true);
  };

  const handleMouseLeave = () => {
    setEditShow(false);
  };

  const handleEditClick = (editRate, editComment) => {
    console.log(editRate);
    console.log(editComment);
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
