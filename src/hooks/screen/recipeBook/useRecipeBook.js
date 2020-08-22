import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { recipeButtonItemsArray } from "../../../shared/buttonItemsArray";
import { getRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";

const useRecipeBook = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(30);

  const dispatch = useDispatch();
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { recipesError } = useSelector((state) => state.recipeBook);
  const { userData } = useSelector((state) => state.login);

  const handlePrev = (e) => {
    e.preventDefault();
    skip > 1 && setSkip(skip - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    !recipesError && setSkip(skip + 1);
  };

  useEffect(() => {
    setSkip(1);
  }, []);

  useEffect(() => {
    dispatch(
      getRecipe(
        recipeButtonItemsArray[recipeButtonId].category,
        userData._id,
        userData.email,
        skip,
        limit
      )
    );
  }, [skip, limit, recipeButtonId, userData._id, userData.email, dispatch]);

  return { skip, handlePrev, handleNext };
};

export default useRecipeBook;
