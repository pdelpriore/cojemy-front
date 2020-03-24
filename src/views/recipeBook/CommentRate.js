import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./recipeBook.css";

const CommentRate = ({ rate }) => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon className="recipeDetails-comments-stars" icon={faStar} />
    );

  for (let i = 0; i < rate; i++) {
    stars[i] = (
      <FontAwesomeIcon
        className="recipeDetails-comments-stars-active-details"
        icon={faStar}
      />
    );
  }

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default CommentRate;
