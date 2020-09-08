import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmojis } from "../../../redux/emoji/getEmojis/thunk/getEmojisThunk";
import { strings } from "../../../strings/Strings";

const useEmoji = () => {
  const dispatch = useDispatch();

  const categories = [
    strings.emojis.categories.EMOTIONS,
    strings.emojis.categories.BODY,
    strings.emojis.categories.COMPONENT,
    strings.emojis.categories.ANIMALS,
    strings.emojis.categories.FOOD,
    strings.emojis.categories.TRAVEL,
    strings.emojis.categories.ACTIVITIES,
    strings.emojis.categories.OBJECTS,
    strings.emojis.categories.SYMBOLS,
    strings.emojis.categories.FLAGS,
  ];

  const categories_eng = [
    strings.emojis.categories_eng.EMOTIONS,
    strings.emojis.categories_eng.BODY,
    strings.emojis.categories_eng.COMPONENT,
    strings.emojis.categories_eng.ANIMALS,
    strings.emojis.categories_eng.FOOD,
    strings.emojis.categories_eng.TRAVEL,
    strings.emojis.categories_eng.ACTIVITIES,
    strings.emojis.categories_eng.OBJECTS,
    strings.emojis.categories_eng.SYMBOLS,
    strings.emojis.categories_eng.FLAGS,
  ];

  const [emojis, setEmojis] = useState(null);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleSelectCategory = (catIndex) => {
    setCategoryIndex(catIndex);
  };

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  return { emojis, categories, categoryIndex, handleSelectCategory };
};

export default useEmoji;
