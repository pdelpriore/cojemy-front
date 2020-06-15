import { useState } from "react";

const useEventButtons = (buttonQty) => {
  const initialState = () => {
    let buttonInitialStates = [];
    for (let i = 0; i < buttonQty; i++) {
      buttonInitialStates.push(false);
    }
    return buttonInitialStates;
  };

  const [activesClasses, setActive] = useState(initialState());

  const toggleActiveClass = (id, category) => {
    //dispatch(categorySelected(id));
    //dispatch(recipeButtonTurnedOn());
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
