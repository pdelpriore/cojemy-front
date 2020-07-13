import { useState } from "react";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

const useSearchEventsForm = () => {
  const [inputs, setInputs] = useState({});

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    inputs,
    handleOnChange,
    handleInitializeDate,
    handleDateTime,
    handleSubmit,
  };
};

export default useSearchEventsForm;
