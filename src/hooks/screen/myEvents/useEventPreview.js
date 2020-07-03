import { useEffect } from "react";
import { toEditMyRecipe } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { removeMyRecipe } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { changeMyRecipesClearState } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";

const useEventPreview = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { recipeUpdated } = useSelector((state) => state.isMyRecipeChanged);

  const handleEditClick = (data) => {
    console.log("edit clicked !");
    //dispatch(toEditMyRecipe(data));
  };

  const handleTrashClick = (recipeId) => {
    console.log("trash clicked !");
    //dispatch(removeMyRecipe(recipeId, userData._id, userData.email));
  };

  //   useEffect(() => {
  //     if (recipeUpdated) dispatch(changeMyRecipesClearState());
  //   }, [recipeUpdated]);

  return {
    handleEditClick,
    handleTrashClick,
  };
};

export default useEventPreview;
