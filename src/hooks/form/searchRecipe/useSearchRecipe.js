import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnOffRecipeButtons } from "../../../redux/recipeBook/turnOffRecipeButtons/thunk/turnOffRecipeButtonsThunk";
import { searchRecipe } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";
import { addRateComment } from "../../../redux/recipeBook/addRateComment/thunk/addRateCommentThunk";

const useSearchRecipe = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const { userData } = useSelector((state) => state.login);
  const { recipeButtonPressed } = useSelector(
    (state) => state.recipeButtonTurnedOn
  );
  const { rateCommentAdded } = useSelector((state) => state.addRateComment);
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
      if (userData.email) {
        dispatch(searchRecipe(inputs.recipe, userData.email));
      }
    }
  }, [inputs.recipe, userData.email, dispatch]);

  useEffect(() => {
    setInputs({});
    return () => dispatch(turnOffRecipeButtons(false));
  }, [recipeButtonPressed, dispatch]);

  useEffect(() => {
    if (searchInputFilled) {
      if (userData.email) {
        dispatch(searchRecipe(inputs.recipe, userData.email));
      }
    }
    return () => {
      dispatch(addRateComment(false));
    };
  }, [
    searchInputFilled,
    rateCommentAdded,
    userData.email,
    inputs.recipe,
    dispatch,
  ]);

  return { inputs, handleInputChange };
};

export default useSearchRecipe;
