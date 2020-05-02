import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buttonItemsArray } from "../../../shared/buttonItemsArray";
import { getRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";

let skip = 1;

const useRecipeBook = () => {
  const limit = 30;
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
      getRecipe(
        buttonItems[recipeButtonId].category,
        userData.email,
        skip,
        limit
      )
    );
  };
  const handleNext = (e) => {
    e.preventDefault();
    !recipesError && skip++;
    dispatch(
      getRecipe(
        buttonItems[recipeButtonId].category,
        userData.email,
        skip,
        limit
      )
    );
  };

  useEffect(() => {
    skip = 1;
  }, []);

  return { skip, handlePrev, handleNext };
};

export default useRecipeBook;
