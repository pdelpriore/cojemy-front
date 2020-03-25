import React from "react";
import { initializeStarRating } from "./initializeStarRating";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const RatingStars = () => {
  const stars = initializeStarRating(strings.rating.RATING_STARS);

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default RatingStars;
