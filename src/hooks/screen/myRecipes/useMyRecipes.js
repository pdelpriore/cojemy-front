import { useState } from "react";

const useMyRecipes = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleListItemMouseEnter = () => {
    setShowIcon(true);
  };

  const handleListItemMouseLeave = () => {
    setShowIcon(false);
  };

  return { showIcon, handleListItemMouseEnter, handleListItemMouseLeave };
};

export default useMyRecipes;
