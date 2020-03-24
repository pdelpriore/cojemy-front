import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./recipeBook.css";

const RatingActiveStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon
        className="recipeDetails-comments-stars-active"
        icon={faStar}
      />
    );

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default RatingActiveStars;
