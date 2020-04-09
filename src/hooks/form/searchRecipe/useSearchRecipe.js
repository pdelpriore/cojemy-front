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
  const { recipeButtonPressed } = useSelector(
    (state) => state.recipeButtonTurnedOn
  );
  const { recipeUpdated } = useSelector((state) => state.editRateCommentForm);
  const { rateCommentAdded } = useSelector((state) => state.addRateComment);
  const { rateCommentRemoved } = useSelector(
    (state) => state.removeRateComment
  );
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );

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
  }, [inputs.recipe, userData.email, googleUserData.email, dispatch]);

  useEffect(() => {
    setInputs({});
    return () => dispatch(turnOffRecipeButtons(false));
  }, [recipeButtonPressed, dispatch]);

  useEffect(() => {
    if (searchInputFilled) {
      if (userData.email) {
        dispatch(searchRecipe(inputs.recipe, userData.email));
      } else if (googleUserData.email) {
        dispatch(searchRecipe(inputs.recipe, googleUserData.email));
      }
    }
  }, [
    searchInputFilled,
    recipeUpdated,
    rateCommentAdded,
    rateCommentRemoved,
    userData.email,
    googleUserData.email,
    inputs.recipe,
    dispatch,
  ]);

  return { inputs, handleInputChange };
};

export default useSearchRecipe;
