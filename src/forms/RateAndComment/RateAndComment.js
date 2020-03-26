import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import useRateAndComment from "../../hooks/form/rateAndComment/useRateAndComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { initializeStarRating } from "../../views/recipeBook/initializeStarRating";
import { strings } from "../../strings/Strings";
import "./rateAndComment.css";

const RateAndComment = () => {
  const {
    rate,
    rateHover,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleInputChange
  } = useRateAndComment();
  const stars = initializeStarRating(strings.rating.RATE_AND_COMMENT);
  for (let i = 0; i < rate; i++) {
    stars[i] = (
      <FontAwesomeIcon className="rate-comment-stars-active" icon={faStar} />
    );
  }
  for (let i = 0; i < rateHover; i++) {
    stars[i] = (
      <FontAwesomeIcon className="rate-comment-stars-active" icon={faStar} />
    );
    for (let i = rateHover; i < stars.length; i++) {
      stars[i] = (
        <FontAwesomeIcon className="rate-comment-stars" icon={faStar} />
      );
    }
  }
  let ratingStars = stars.map((ratingStar, index) => (
    <div
      className="star"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={index}
      data-value={index + 1}
    >
      {ratingStar}
    </div>
  ));
  return (
    <Row>
      <Col xs={4} />
      <Col xs={4}>
        <div className="rate-stars-box">{ratingStars}</div>
      </Col>
      <Col xs={4} />
    </Row>
  );
};

export default RateAndComment;
