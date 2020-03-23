import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./recipeBook.css";

const AverageRating = ({ data }) => {
  console.log(data);
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon className="recipeDetails-comments-stars" icon={faStar} />
    );

  const rates = data.map(item => item.rate.value);
  const average = rates.reduce((a, b) => a + b) / rates.length;
  const starPercentage = (average / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  console.log(starPercentageRounded);

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default AverageRating;
