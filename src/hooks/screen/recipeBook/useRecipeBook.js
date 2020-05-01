import { useSelector, useDispatch } from "react-redux";
import { buttonItemsArray } from "../../../shared/buttonItemsArray";
import { getRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";

const useRecipeBook = () => {
  const dispatch = useDispatch();
  const buttonItems = buttonItemsArray;
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { userData } = useSelector((state) => state.login);
  const handleOnScroll = (e) => {
    if (e.topPosition === e.realHeight - e.containerHeight) {
      dispatch(
        getRecipe(buttonItems[recipeButtonId].category, userData.email, 8, 8)
      );
    }
  };
  return { handleOnScroll };
};

export default useRecipeBook;
