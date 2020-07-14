import { useState, useEffect } from "react";
import { searchEvents } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";
import { searchEventFilled } from "../../../redux/myEvents/searchEventFilled/thunk/searchEventFilledThunk";
import { useDispatch, useSelector } from "react-redux";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

const useSearchEventsForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const { userData } = useSelector((state) => state.login);

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
  const handleDateTime = (dateTime) => {
    setInputs((inputs) => ({
      ...inputs,
      eventDate: dateTime,
    }));
  };
  const handleInitializeDate = () => {
    setInputs((inputs) => ({
      ...inputs,
      eventDate: new Date(),
    }));
  };

  useEffect(() => {
    if (inputs.eventDate || inputs.city) {
      dispatch(
        searchEvents(
          inputs.eventDate,
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
  }, [inputs.eventDate, inputs.city, dispatch]);

  return {
    inputs,
    handleOnChange,
    handleInitializeDate,
    handleDateTime,
  };
};

export default useSearchEventsForm;
