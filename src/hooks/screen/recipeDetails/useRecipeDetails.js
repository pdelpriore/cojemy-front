import { useState } from "react";

const useRecipeDetails = () => {
  const [editShow, setEditShow] = useState(false);

  const handleMouseEnter = () => {
    setEditShow(true);
  };

  const handleMouseLeave = () => {
    setEditShow(false);
  };

  const handleTrashClick = (removeRate, removeComment) => {
    console.log(removeRate);
    console.log(removeComment);
  };
  return {
    editShow,
    handleMouseEnter,
    handleMouseLeave,
    handleTrashClick
  };
};

export default useRecipeDetails;
