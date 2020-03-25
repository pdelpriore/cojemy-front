import { useState } from "react";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState({});

  const handleMouseOver = e => {
    e.persist();
    setRate(e.currentTarget.dataset.value);
  };

  const handleMouseOut = bool => {
    if (!bool) {
      setRate("");
    }
  };

  const handleClick = (e, bool) => {
    e.preventDefault();
    handleMouseOut(bool);
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
    handleMouseOver,
    handleMouseOut,
    handleClick,
    handleInputChange
  };
};

export default useRateAndComment;
