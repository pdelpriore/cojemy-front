import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import useRateAndComment from "../../../hooks/form/rateAndComment/useRateAndComment";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { initializeStarRating } from "../../../shared/initializeStarRating";
import { toEditRateCommentClearState } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";
import "./rateAndComment.css";

const RateAndComment = ({ recipeId }) => {
  const dispatch = useDispatch();
  const {
    rate,
    rateHover,
    inputs,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    handleInputChange,
    handleOnSubmit,
  } = useRateAndComment();
  const { detailsLoading } = useSelector((state) => state.isRecipeDetailsShown);
  const { rateAndComment } = useSelector((state) => state.toEditRateComment);
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
  const ratingStars = stars.map((ratingStar, index) => (
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
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit(recipeId);
            }}
          >
            <Row>
              <Col xs={12}>
                <Form.Group controlId="formBasicRateComment">
                  <Form.Label className="rate-form-label">
                    {capitalizeFirst(strings.rating.COMMENT)}
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={inputs.comment || ""}
                    className="rate-form-control"
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
              <Col xs={1} />
              <Col xs={10}>
                {!rateAndComment.commentValue ? (
                  <div className="rate-button">
                    <Button
                      className="rate-button-send"
                      disabled={
                        detailsLoading ||
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
                            {capitalizeFirst(
                              strings.rating.BUTTON_TEXT_LOADING
                            )}
                          </div>
                        ) : (
                          <div>
                            {capitalizeFirst(strings.rating.BUTTON_TEXT)}
                          </div>
                        )}
                      </div>
                    </Button>
                  </div>
                ) : (
                  <div className="rate-button">
                    <Button
                      className="rate-button-send"
                      disabled={
                        detailsLoading ||
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
                            {capitalizeFirst(
                              strings.rating.BUTTON_EDIT_TEXT_LOADING
                            )}
                          </div>
                        ) : (
                          <div>
                            {capitalizeFirst(strings.rating.BUTTON_EDIT_TEXT)}
                          </div>
                        )}
                      </div>
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(toEditRateCommentClearState());
                      }}
                      className="rate-button-send"
                      variant="outline-secondary"
                    >
                      {capitalizeFirst(strings.rating.BUTTON_CANCEL_TEXT)}
                    </Button>
                  </div>
                )}
              </Col>
              <Col xs={1} />
            </Row>
          </Form>
        </Col>
        <Col xs={1} />
      </Row>
    </>
  );
};

export default RateAndComment;
