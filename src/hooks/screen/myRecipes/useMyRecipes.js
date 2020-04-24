import { useState } from "react";

const useMyRecipes = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleListItemMouseEnter = () => {
    setShowIcon(true);
  };

  const handleListItemMouseLeave = () => {
    setShowIcon(false);
  };

  const handleEditClick = (data) => {
    console.log(data);
  };

  const handleTrashClick = (data) => {
    console.log(data);
  };

  return {
    showIcon,
    handleListItemMouseEnter,
    handleListItemMouseLeave,
    handleEditClick,
    handleTrashClick,
  };
};

export default useMyRecipes;
