import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../strings/Strings";
import "../views/recipeBook/recipeBook.css";
import "../forms/recipeBook/RateAndComment/rateAndComment.css";

export const initializeStarRating = (place) => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon
        className={
          place === strings.rating.COMMENT_RATE
            ? "recipeDetails-comments-stars-detail"
            : place === strings.rating.RATE_AND_COMMENT
            ? "rate-comment-stars"
            : place === strings.rating.RATING_STARS
            ? "recipeDetails-comments-stars"
            : place === strings.rating.LIST
            ? "recipeDetails-comments-stars-active-list"
            : place === strings.rating.DETAILS
            ? "recipeDetails-comments-stars-active-details"
            : null
        }
        icon={faStar}
      />
    );
  return stars;
};
