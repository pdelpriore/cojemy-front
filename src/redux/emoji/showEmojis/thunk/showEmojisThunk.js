import { showEmojisCases } from "../../../config/cases/Cases";

export const showEmojis = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showEmojisCases.EMOJIS_SHOWN, payload: bool });
  };
};
