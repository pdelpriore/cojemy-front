import { useState } from "react";
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
  const { userData } = useSelector((state) => state.login);
  const { googleUserData } = useSelector((state) => state.loginGoogle);

  const toggleActiveClass = (id, category) => {
    if (id === null && category === null) {
      setActive(initialState());
    } else {
      dispatch(categorySelected(id));
      dispatch(recipeButtonTurnedOn());
      setActive(
        initialState().map((bool, index) => (index === id ? !bool : bool))
      );
      if (userData.email) {
        dispatch(getRecipe(category, userData.email));
      } else if (googleUserData.email) {
        dispatch(getRecipe(category, googleUserData.email));
      }
    }
  };
  return { activesClasses, toggleActiveClass };
};

export default useRecipeButton;
