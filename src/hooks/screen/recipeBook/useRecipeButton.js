import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../../../redux/retrieveRecipe/thunk/retrieveRecipesThunk";

const useRecipeButton = () => {
  const dispatch = useDispatch();
  const initialState = [false, false];
  const [activesClasses, setActive] = useState(initialState);
  const { userData } = useSelector(state => state.login);
  const { googleUserData } = useSelector(state => state.loginGoogle);

  const toggleActiveClass = (id, category) => {
    setActive(initialState.map((bool, index) => (index === id ? !bool : bool)));
    //dispatch retrieveReceipeByCategory
    if (userData.email) {
      dispatch(getRecipe(category, userData.email, userData.isGoogleUser));
    } else if (googleUserData.email) {
      dispatch(
        getRecipe(category, googleUserData.email, googleUserData.isGoogleUser)
      );
    }
  };
  return { activesClasses, toggleActiveClass };
};

export default useRecipeButton;
