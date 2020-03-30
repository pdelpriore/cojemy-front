import { useState } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { addRateAndComment } from "../../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { useDispatch, useSelector } from "react-redux";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.login);
  const { googleUserData } = useSelector(state => state.loginGoogle);

  const handleMouseEnter = e => {
    setRateHover(e.currentTarget.dataset.value);
  };

  const handleMouseLeave = () => {
    setRateHover("");
  };

  const handleClick = e => {
    e.preventDefault();
    setRate(e.currentTarget.dataset.value);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: capitalizeFirst(e.target.value)
    }));
  };

  const handleOnSubmit = recipeId => {
    if (userData.email) {
      dispatch(
        addRateAndComment(recipeId, rate, inputs.comment, userData.email)
      );
      setInputs({});
      setRate("");
    } else if (googleUserData.email) {
      dispatch(
        addRateAndComment(recipeId, rate, inputs.comment, googleUserData.email)
      );
      setInputs({});
      setRate("");
    }
  };
  return {
    rate,
    rateHover,
    inputs,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    handleOnSubmit
  };
};

export default useRateAndComment;
