import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnOffRecipeButtons } from "../../../redux/recipeBook/turnOffRecipeButtons/thunk/turnOffRecipeButtonsThunk";
import { searchRecipe } from "../../../redux/recipeBook/searchRecipe/thunk/searchRecipeThunk";
import { getRecipeClearState } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";

const useSearchRecipe = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const { userData } = useSelector((state) => state.login);
  const { googleUserData } = useSelector((state) => state.loginGoogle);
  const { searchRecipesFound } = useSelector((state) => state.searchRecipe);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (inputs.recipe === "" || inputs.recipe === undefined) {
      dispatch(turnOffRecipeButtons(false));
    } else {
      dispatch(turnOffRecipeButtons(true));
      dispatch(getRecipeClearState());
      if (userData.email) {
        dispatch(searchRecipe(inputs.recipe, userData.email));
      } else if (googleUserData.email) {
        dispatch(searchRecipe(inputs.recipe, googleUserData.email));
      }
    }
    //wyczysc search inputs kiedy button category wcisniety
    //if (!searchRecipesFound) setInputs({});
  }, [
    inputs.recipe,
    userData.email,
    googleUserData.email,
    //searchRecipesFound,
    dispatch,
  ]);

  return { inputs, handleInputChange };
};

export default useSearchRecipe;
