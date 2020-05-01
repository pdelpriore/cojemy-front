import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buttonItemsArray } from "../../../shared/buttonItemsArray";
import { getRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";

let skip = 1;

const useRecipeBook = () => {
  const dispatch = useDispatch();
  const buttonItems = buttonItemsArray;
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { recipesError } = useSelector((state) => state.recipeBook);
  const { userData } = useSelector((state) => state.login);

  const handlePrev = (e) => {
    e.preventDefault();
    skip > 1 && skip--;
    dispatch(
      getRecipe(buttonItems[recipeButtonId].category, userData.email, skip, 8)
    );
  };
  const handleNext = (e) => {
    e.preventDefault();
    !recipesError && skip++;
    dispatch(
      getRecipe(buttonItems[recipeButtonId].category, userData.email, skip, 8)
    );
  };

  useEffect(() => {
    skip = 1;
  }, []);

  return { handlePrev, handleNext };
};

export default useRecipeBook;
