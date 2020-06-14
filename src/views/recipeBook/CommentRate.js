import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { initializeStarRating } from "../../shared/initializeStarRating";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const CommentRate = ({ rate }) => {
  const stars = initializeStarRating(strings.rating.COMMENT_RATE);

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
