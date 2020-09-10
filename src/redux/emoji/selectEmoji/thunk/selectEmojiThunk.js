import { selectEmojiCases } from "../../../config/cases/Cases";

export const selectEmoji = (emojiCharacter) => {
  return (dispatch, getState) => {
    dispatch({
      type: selectEmojiCases.EMOJI_SELECTED,
      payload: emojiCharacter,
    });
  };
};

export const selectEmojiClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: selectEmojiCases.CLEAR_STATE });
  };
};
