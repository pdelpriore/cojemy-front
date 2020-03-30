import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import useRateAndComment from "../../hooks/form/rateAndComment/useRateAndComment";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { initializeStarRating } from "../../views/recipeBook/initializeStarRating";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./rateAndComment.css";

const RateAndComment = ({ recipeId }) => {
  const {
    rate,
    rateHover,
    inputs,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleInputChange,
    handleOnSubmit
  } = useRateAndComment();
  const { detailsLoading } = useSelector(state => state.showRecipeDetails);
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
    <>
      <Row>
        <Col xs={1} />
        <Col className="rate-note-center" xs={1}>
          <div className="rate-note-text">
            {capitalizeFirst(strings.rating.NOTE)}
          </div>
        </Col>
        <Col xs={2} />
        <Col xs={4}>
          <div className="rate-stars-box">{ratingStars}</div>
        </Col>
        <Col xs={4} />
      </Row>
      <Row className="mb-4" />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <Form
            onSubmit={e => {
              e.preventDefault();
              handleOnSubmit(recipeId);
            }}
          >
            <Row>
              <Col xs={12}>
                <Form.Group controlId="formBasicRateComment">
                  <Form.Label className="rate-text-family">
                    {capitalizeFirst(strings.rating.COMMENT)}
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={inputs.comment || ""}
                    className="rate-placeholder"
                    as="textarea"
                    rows="4"
                    size="lg"
                    name="comment"
                    type="text"
                    placeholder={strings.rating.COMMENT}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3" />
            <Row>
              <Col xs={4} />
              <Col xs={4}>
                <div className="rate-button">
                  <Button
                    className="rate-button-send"
                    disabled={
                      inputs.comment === undefined ||
                      inputs.comment === "" ||
                      rate === ""
                    }
                    type="submit"
                    variant="outline-dark"
                  >
                    <div className="rate-spinner">
                      {detailsLoading && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      {detailsLoading ? (
                        <div className="rate-loading-text">
                          {capitalizeFirst(strings.rating.BUTTON_TEXT_LOADING)}
                        </div>
                      ) : (
                        <div>{capitalizeFirst(strings.rating.BUTTON_TEXT)}</div>
                      )}
                    </div>
                  </Button>
                </div>
              </Col>
              <Col xs={4} />
            </Row>
          </Form>
        </Col>
        <Col xs={1} />
      </Row>
    </>
  );
};

export default RateAndComment;
