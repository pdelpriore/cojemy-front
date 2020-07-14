import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventCategorySelected } from "../../../redux/myEvents/eventCategorySelected/thunk/eventCategorySelectedThunk";
import { getEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";

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

  const { userData } = useSelector((state) => state.login);

  const toggleActiveClass = (id, category) => {
    const skip = 1;
    const limit = 30;
    dispatch(eventCategorySelected(id));
    setActive(
      initialState().map((bool, index) => (index === id ? !bool : bool))
    );
    if (userData.email) {
      dispatch(getEvents(category, userData._id, userData.email, skip, limit));
    }
  };
  return { activesClasses, toggleActiveClass };
};

export default useEventButtons;
