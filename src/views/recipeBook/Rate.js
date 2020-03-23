import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./recipeBook.css";

const Rate = ({ rate }) => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon className="recipeDetails-comments-stars" icon={faStar} />
    );

  stars.forEach((item, index, self) => {
    for (let i = 0; i < rate; i++) {
      self[i] = (
        <FontAwesomeIcon
          className="recipeDetails-comments-stars-active"
          icon={faStar}
        />
      );
    }
  });
  console.log(stars);

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default Rate;
