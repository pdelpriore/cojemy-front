import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";
import { recipeButtonTurnedOn } from "../../../redux/recipeBook/recipeButtonTurnedOn/thunk/recipeButtonTurnedOnThunk";
import { categorySelected } from "../../../redux/recipeBook/recipeCategorySelected/thunk/recipeCategorySelectedThunk";

const useRecipeButton = (buttonQty) => {
  const dispatch = useDispatch();

  const initialState = () => {
    let buttonInitialStates = [];
    for (let i = 0; i < buttonQty; i++) {
      buttonInitialStates.push(false);
    }
    return buttonInitialStates;
  };

  const [activesClasses, setActive] = useState(initialState());
  const [buttonPressedCount, setButtonPressedCount] = useState(0);

  const { userData } = useSelector((state) => state.login);

  const toggleActiveClass = (id, category) => {
    const skip = 1;
    const limit = 30;
    if (id === null && category === null) {
      setActive(initialState());
    } else {
      dispatch(categorySelected(id));
      setActive(
        initialState().map((bool, index) => (index === id ? !bool : bool))
      );
      if (userData.email) {
        dispatch(
          getRecipe(category, userData._id, userData.email, skip, limit)
        );
      }
    }
  };

  useEffect(() => {
    setButtonPressedCount(0);
  }, []);

  useEffect(() => {
    dispatch(recipeButtonTurnedOn(buttonPressedCount));
  }, [buttonPressedCount, dispatch]);

  return {
    activesClasses,
    toggleActiveClass,
    buttonPressedCount,
    setButtonPressedCount,
  };
};

export default useRecipeButton;
