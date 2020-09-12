import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEmojis } from "../../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import {
  selectEmoji,
  selectEmojiClearState,
} from "../../../redux/emoji/selectEmoji/thunk/selectEmojiThunk";
import { strings } from "../../../strings/Strings";

const useEmoji = () => {
  const dispatch = useDispatch();

  const categories = [
    strings.emojis.categories.EMOTIONS,
    strings.emojis.categories.BODY,
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
    strings.emojis.categories_eng.ANIMALS,
    strings.emojis.categories_eng.FOOD,
    strings.emojis.categories_eng.TRAVEL,
    strings.emojis.categories_eng.ACTIVITIES,
    strings.emojis.categories_eng.OBJECTS,
    strings.emojis.categories_eng.SYMBOLS,
    strings.emojis.categories_eng.FLAGS,
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [emojisFiltered, setEmojisFiltered] = useState([]);
  const [emojiFilteredBySubGroup, setEmojiFilteredBySubGroup] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [loading, setLoading] = useState(false);

  const { emojisAll, emojiCategories } = useSelector((state) => state.emojis);

  const handleSelectCategory = (catIndex) => {
    setCategoryIndex(catIndex);
  };
  const handleEmoji = (emoji) => {
    setSelectedEmoji(emoji.character);
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(selectEmoji(selectedEmoji));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(showEmojis(false));
  };

  useEffect(() => {
    if (emojisAll.length > 0) {
      setLoading(true);
      setEmojiFilteredBySubGroup({});
      setEmojisFiltered(
        emojisAll.filter(
          (emoji) => emoji.group === categories_eng[categoryIndex]
        )
      );
    }
  }, [categoryIndex, emojisAll]);

  useEffect(() => {
    if (emojisFiltered.length > 0 && emojiCategories.length > 0) {
      const emojiCategoriesFiltered = emojiCategories.filter(
        (emoji) => emoji.slug !== "component"
      );
      emojiCategoriesFiltered[categoryIndex].subCategories.forEach((subCat) => {
        let subCatFiltered = emojisFiltered.filter(
          (emoji) => emoji.subGroup === subCat
        );
        if (subCatFiltered.length > 0) {
          setEmojiFilteredBySubGroup((emojiFilteredBySubGroup) => ({
            ...emojiFilteredBySubGroup,
            [subCat]: subCatFiltered,
          }));
        }
      });
      setLoading(false);
    }
  }, [emojisFiltered, emojiCategories, categoryIndex]);

  useEffect(() => {
    return () => dispatch(selectEmojiClearState());
  }, [dispatch]);

  return {
    categories,
    categoryIndex,
    emojiFilteredBySubGroup,
    selectedEmoji,
    loading,
    handleSelectCategory,
    handleEmoji,
    handleSave,
    handleCancel,
  };
};

export default useEmoji;
