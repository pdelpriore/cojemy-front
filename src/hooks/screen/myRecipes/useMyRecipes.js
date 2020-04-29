import { useState } from "react";
import { toEditMyRecipe } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { removeMyRecipe } from "../../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";

const useMyRecipes = () => {
  const dispatch = useDispatch();
  const [showIcon, setShowIcon] = useState(false);

  const { userData } = useSelector((state) => state.login);

  const handleListItemMouseEnter = () => {
    setShowIcon(true);
  };

  const handleListItemMouseLeave = () => {
    setShowIcon(false);
  };

  const handleEditClick = (data) => {
    dispatch(toEditMyRecipe(data));
  };

  const handleTrashClick = (recipeId) => {
    dispatch(removeMyRecipe(recipeId, userData.email));
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
