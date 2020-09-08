import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmojis } from "../../../redux/emoji/getEmojis/thunk/getEmojisThunk";

const useEmoji = () => {
  const dispatch = useDispatch();

  const [emojis, setEmojis] = useState(null);

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  return { emojis };
};

export default useEmoji;
