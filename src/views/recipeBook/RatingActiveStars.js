import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const RatingActiveStars = ({ place }) => {
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon
        className={
          place === strings.rating.LIST
            ? "recipeDetails-comments-stars-active-list"
            : "recipeDetails-comments-stars-active-details"
        }
        icon={faStar}
      />
    );

  return stars.map((star, index) => <div key={index}>{star}</div>);
};

export default RatingActiveStars;
