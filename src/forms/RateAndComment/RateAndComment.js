import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import useRateAndComment from "../../hooks/form/rateAndComment/useRateAndComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./rateAndComment.css";

const RateAndComment = () => {
  const {
    rate,
    handleMouseOver,
    handleMouseOut,
    handleClick,
    handleInputChange
  } = useRateAndComment();
  const stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <FontAwesomeIcon className="rate-comment-stars" icon={faStar} />
    );
  for (let i = 0; i < rate; i++) {
    stars[i] = (
      <FontAwesomeIcon className="rate-comment-stars-active" icon={faStar} />
    );
  }
  let ratingStars = stars.map((ratingStar, index) => (
    <div
      className="star"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={e => handleClick(e, true)}
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
