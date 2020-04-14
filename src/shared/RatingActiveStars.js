import React from "react";
import { initializeStarRating } from "./initializeStarRating";
import "../views/recipeBook/recipeBook.css";

const RatingActiveStars = ({ place }) => {
  const stars = initializeStarRating(place);

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default RatingActiveStars;
