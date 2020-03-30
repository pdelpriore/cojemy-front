import { useState } from "react";

const useRecipeDetails = () => {
  const [editShow, setEditShow] = useState(false);

  const handleMouseEnter = () => {
    setEditShow(true);
  };
  const handleMouseLeave = () => {
    setEditShow(false);
  };
  const handleEditClick = e => {
    e.preventDefault();
    console.log("edit clicked");
  };
  const handleTrashClick = e => {
    e.preventDefault();
    console.log("trash clicked");
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
