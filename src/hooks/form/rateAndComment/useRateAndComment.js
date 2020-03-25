import { useState } from "react";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [comment, setComment] = useState({});

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
    setComment(comment => ({
      ...comment,
      [e.target.name]: e.target.value
    }));
  };
  return {
    rate,
    rateHover,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange
  };
};

export default useRateAndComment;
