import { useState } from "react";

const useRateAndComment = () => {
  const [rate, setRate] = useState(null);
  const [comment, setComment] = useState({});

  const handleMouseEnter = e => {
    setRate(e.currentTarget.dataset.value);
  };

  const handleMouseLeave = () => {
    setRate("");
  };

  const removeOnMouseLeave = e => {
    e.currentTarget.removeEventListener(
      "onMouseLeave",
      () => console.log("removed"),
      true
    );
  };

  const handleClick = e => {
    console.log(e.currentTarget.className);
    e.preventDefault();
    removeOnMouseLeave(e);
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
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleInputChange
  };
};

export default useRateAndComment;
