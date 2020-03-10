import { useState } from "react";

const useRecipeBook = () => {
  const initialState = [false, false];
  const [activesClasses, setActive] = useState(initialState);

  const toggleActiveClass = id => {
    setActive(initialState.map((bool, index) => (index === id ? !bool : bool)));
  };
  return { activesClasses, toggleActiveClass };
};

export default useRecipeBook;
