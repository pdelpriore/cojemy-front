import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import {
  addRateAndComment,
  editRecipeRateAndComment,
} from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { toEditRateCommentClearState } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { useDispatch, useSelector } from "react-redux";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { rateAndComment } = useSelector((state) => state.toEditRateComment);
  const { recipeListItemChanged } = useSelector(
    (state) => state.isRecipeListItemChanged
  );
  const { rateCommentChanged } = useSelector(
    (state) => state.isRateCommentChanged
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
      dispatch(
        editRecipeRateAndComment(
          recipeId,
          rateAndComment.rateId,
          parseInt(rate),
          rateAndComment.commentId,
          inputs.comment,
          userData._id,
          userData.email
        )
      );
    } else {
      dispatch(
        addRateAndComment(
          recipeId,
          parseInt(rate),
          inputs.comment,
          userData._id,
          userData.email
        )
      );
    }
  };

  useEffect(() => {
    if (rateCommentChanged) {
      setRate("");
      setInputs({});
      dispatch(toEditRateCommentClearState());
    }
  }, [rateCommentChanged, dispatch]);

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
