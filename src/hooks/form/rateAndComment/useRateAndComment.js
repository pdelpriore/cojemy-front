import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import {
  addRateAndComment,
  editRecipeRateAndComment,
} from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { toEditRateCommentClearState } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { rateCommentRecipeUpdated } from "../../../redux/recipeBook/editRateCommentForm/thunk/editRateCommentFormThunk";
import { addRateComment } from "../../../redux/recipeBook/addRateComment/thunk/addRateCommentThunk";
import { useDispatch, useSelector } from "react-redux";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { googleUserData } = useSelector((state) => state.loginGoogle);
  const { rateAndComment } = useSelector((state) => state.toEditRateComment);
  const { recipeListItemChanged } = useSelector(
    (state) => state.hideRateCommentForm
  );

  const handleMouseEnter = (e) => {
    setRateHover(e.currentTarget.dataset.value);
  };

  const handleMouseLeave = () => {
    setRateHover("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setRate(e.currentTarget.dataset.value);
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: capitalizeFirst(e.target.value),
    }));
  };

  const handleOnSubmit = (recipeId) => {
    if (rateAndComment.commentValue) {
      if (userData.email) {
        dispatch(rateCommentRecipeUpdated());
        dispatch(
          editRecipeRateAndComment(
            recipeId,
            rateAndComment.rateId,
            rate,
            rateAndComment.commentId,
            inputs.comment,
            userData.email
          )
        );
        setRate("");
        setInputs({});
        dispatch(toEditRateCommentClearState());
      } else if (googleUserData.email) {
        dispatch(rateCommentRecipeUpdated());
        dispatch(
          editRecipeRateAndComment(
            recipeId,
            rateAndComment.rateId,
            rate,
            rateAndComment.commentId,
            inputs.comment,
            googleUserData.email
          )
        );
        setRate("");
        setInputs({});
        dispatch(toEditRateCommentClearState());
      }
    } else {
      if (userData.email) {
        dispatch(addRateComment(true));
        dispatch(
          addRateAndComment(recipeId, rate, inputs.comment, userData.email)
        );
        setRate("");
        setInputs({});
      } else if (googleUserData.email) {
        dispatch(addRateComment(true));
        dispatch(
          addRateAndComment(
            recipeId,
            rate,
            inputs.comment,
            googleUserData.email
          )
        );
        setRate("");
        setInputs({});
      }
    }
  };

  useEffect(() => {
    if (rateAndComment.rateValue) setRate(rateAndComment.rateValue);
    if (rateAndComment.commentValue)
      setInputs((inputs) => ({
        ...inputs,
        comment: rateAndComment.commentValue,
      }));
    if (recipeListItemChanged) {
      dispatch(toEditRateCommentClearState());
      setRate("");
      setInputs({});
    }
  }, [
    rateAndComment.rateValue,
    rateAndComment.commentValue,
    recipeListItemChanged,
    dispatch,
  ]);

  return {
    rate,
    rateHover,
    inputs,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    handleOnSubmit,
  };
};

export default useRateAndComment;
