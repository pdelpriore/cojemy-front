import { useState } from "react";
import { capitalizeFirst } from "../../../util/Util";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});

  const handleMouseEnter = e => {
    setRateHover(e.currentTarget.dataset.value);
  };

  const handleMouseLeave = () => {
    setRateHover("");
  };

  const handleClick = e => {
    e.preventDefault();
    setRate(e.currentTarget.dataset.value);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: capitalizeFirst(e.target.value)
    }));
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };
  return {
    rate,
    rateHover,
    inputs,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    handleOnSubmit
  };
};

export default useRateAndComment;
