import { toEditMyRecipe } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { removeMyRecipe } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";

const useMyRecipePreview = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);

  const handleEditClick = (data) => {
    dispatch(toEditMyRecipe(data));
  };

  const handleTrashClick = (recipeId) => {
    dispatch(removeMyRecipe(recipeId, userData.email));
  };

  return {
    handleEditClick,
    handleTrashClick,
  };
};

export default useMyRecipePreview;
