import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffRecipeButtons } from "../../../redux/recipeBook/turnOffRecipeButtons/thunk/turnOffRecipeButtonsThunk";

const useSearchRecipe = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

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
    }
  }, [inputs.recipe, dispatch]);

  return { inputs, handleInputChange };
};

export default useSearchRecipe;
