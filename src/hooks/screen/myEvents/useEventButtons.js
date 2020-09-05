import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventCategorySelected } from "../../../redux/myEvents/eventCategorySelected/thunk/eventCategorySelectedThunk";
import { getEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";
import { showNewEventForm } from "../../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import { selectEventDateClearState } from "../../../redux/myEvents/selectEventDate/thunk/selectEventDateThunk";
import { eventButtonItemsArray } from "../../../shared/buttonItemsArray";

const useEventButtons = () => {
  const dispatch = useDispatch();

  const initialState = () => {
    let buttonInitialStates = [];
    for (let i = 0; i < eventButtonItemsArray.length; i++) {
      buttonInitialStates.push(false);
    }
    return buttonInitialStates;
  };

  const [activesClasses, setActive] = useState(initialState());

  const { userData } = useSelector((state) => state.login);
  const { searchEventFilled } = useSelector(
    (state) => state.isSearchEventFormFilled
  );
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { eventUpdated } = useSelector((state) => state.isEventChanged);

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

  useEffect(() => {
    if (!searchEventFilled) {
      dispatch(selectEventDateClearState());
      toggleActiveClass(
        eventButtonItemsArray[eventButtonId].id,
        eventButtonItemsArray[eventButtonId].category
      );
    }
    return () => dispatch(showNewEventForm(false));
  }, [eventUpdated, searchEventFilled, eventButtonId, dispatch]);

  return { activesClasses, toggleActiveClass };
};

export default useEventButtons;
