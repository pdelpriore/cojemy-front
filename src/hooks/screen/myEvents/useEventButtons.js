import { useState } from "react";
import { useDispatch } from "react-redux";
import { eventCategorySelected } from "../../../redux/myEvents/eventCategorySelected/thunk/eventCategorySelectedThunk";

const useEventButtons = (buttonQty) => {
  const dispatch = useDispatch();
  const initialState = () => {
    let buttonInitialStates = [];
    for (let i = 0; i < buttonQty; i++) {
      buttonInitialStates.push(false);
    }
    return buttonInitialStates;
  };

  const [activesClasses, setActive] = useState(initialState());

  const toggleActiveClass = (id, category) => {
    dispatch(eventCategorySelected(id));
    setActive(
      initialState().map((bool, index) => (index === id ? !bool : bool))
    );
    //   if (userData.email) {
    //     dispatch(
    //       getRecipe(category, userData._id, userData.email, skip, limit)
    //     );
    //   }
  };
  return { activesClasses, toggleActiveClass };
};

export default useEventButtons;
