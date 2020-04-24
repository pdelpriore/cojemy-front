import { useState } from "react";
import { toEditMyRecipe } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { useDispatch } from "react-redux";

const useMyRecipes = () => {
  const dispatch = useDispatch();
  const [showIcon, setShowIcon] = useState(false);

  const handleListItemMouseEnter = () => {
    setShowIcon(true);
  };

  const handleListItemMouseLeave = () => {
    setShowIcon(false);
  };

  const handleEditClick = (data) => {
    dispatch(toEditMyRecipe(data));
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
