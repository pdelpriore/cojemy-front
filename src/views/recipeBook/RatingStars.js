import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./recipeBook.css";

const RatingStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon className="recipeDetails-comments-stars" icon={faStar} />
    );

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default RatingStars;
