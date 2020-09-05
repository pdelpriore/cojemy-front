import { useState, useEffect } from "react";
import { searchEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";
import { searchEventFilled } from "../../../redux/myEvents/searchEventFilled/thunk/searchEventFilledThunk";
import { useDispatch, useSelector } from "react-redux";
import { showCalendar } from "../../../redux/myEvents/showCalendar/thunk/showCalendarThunk";
import { selectEventDateClearState } from "../../../redux/myEvents/selectEventDate/thunk/selectEventDateThunk";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

const useSearchEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const { userData } = useSelector((state) => state.login);
  const { eventDate } = useSelector((state) => state.eventDateSelected);

  const handleOnChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.myEvents.inputName.CITY
          ? capitalizeFirst(e.target.value.replace(/[^a-zA-Z]+/g, ""))
          : e.target.value,
    }));
  };
  const handleShowCalendar = (e) => {
    e.preventDefault();
    dispatch(showCalendar(true));
  };
  const handleRemoveDate = (e) => {
    e.preventDefault();
    dispatch(selectEventDateClearState());
  };

  useEffect(() => {
    if (eventDate || inputs.city) {
      dispatch(
        searchEvents(
          new Date(eventDate),
          inputs.city,
          userData._id,
          userData.email
        )
      );
      dispatch(searchEventFilled(true));
    } else {
      dispatch(searchEventFilled(false));
    }
    return () => dispatch(searchEventFilled(false));
  }, [eventDate, userData._id, userData.email, inputs.city, dispatch]);

  return {
    inputs,
    handleOnChange,
    handleShowCalendar,
    handleRemoveDate,
  };
};

export default useSearchEventsForm;
