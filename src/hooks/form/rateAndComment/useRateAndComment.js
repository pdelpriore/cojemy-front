import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import {
  addRateAndComment,
  editRecipeRateAndComment,
} from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { showEmojis } from "../../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import { toEditRateCommentClearState } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { useDispatch, useSelector } from "react-redux";

const useRateAndComment = () => {
  const dispatch = useDispatch();

  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});
  const [inputHasFocus, setInputHasFocus] = useState("");

  const { userData } = useSelector((state) => state.login);
  const { rateAndComment } = useSelector((state) => state.toEditRateComment);
  const { recipeListItemChanged } = useSelector(
    (state) => state.isRecipeListItemChanged
  );
  const { rateCommentChanged } = useSelector(
    (state) => state.isRateCommentChanged
  );
  const { emojiCharacter } = useSelector((state) => state.selectedEmoji);

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
  const handleFocus = (e) => {
    setInputHasFocus(e.target.name);
  };
  const handleBlur = (e) => {
    if (
      (e.relatedTarget &&
        e.relatedTarget.className &&
        !e.relatedTarget.className.includes("btn")) ||
      e.relatedTarget === null
    ) {
      setInputHasFocus("");
    }
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
    if (emojiCharacter) {
      setInputs((inputs) => ({
        ...inputs,
        [inputHasFocus]: inputs[inputHasFocus].concat(emojiCharacter),
      }));
      dispatch(showEmojis(false));
    }
  }, [emojiCharacter, inputHasFocus, dispatch]);

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
    inputHasFocus,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    handleOnSubmit,
    handleFocus,
    handleBlur,
  };
};

export default useRateAndComment;
