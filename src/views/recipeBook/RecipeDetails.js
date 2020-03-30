import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { createDate } from "../../util/Util";
import { useDispatch, useSelector } from "react-redux";
import CommentRate from "./CommentRate";
import RatingStars from "./RatingStars";
import RatingActiveStars from "./RatingActiveStars";
import RateAndComment from "../../forms/RateAndComment/RateAndComment";
import { getAverageRating } from "./getAverageRating";
import { recipeDetailsClearState } from "../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import useRecipeDetails from "../../hooks/screen/recipeDetails/useRecipeDetails";
import "./recipeBook.css";

const RecipeDetails = () => {
  const dispatch = useDispatch();
  const { detailsDataRetrieved } = useSelector(
    state => state.showRecipeDetails
  );
  const { userData } = useSelector(state => state.login);
  const { googleUserData } = useSelector(state => state.loginGoogle);
  const isCommented =
    detailsDataRetrieved.comments.length > 0 &&
    detailsDataRetrieved.comments.filter(
      comment =>
        comment.commentator.email === userData.email ||
        comment.commentator.email === googleUserData.email
    )[0].commentator.email;
  const {
    editShow,
    handleMouseEnter,
    handleMouseLeave,
    handleEditClick,
    handleTrashClick
  } = useRecipeDetails();
  timeago.register("fr", fr);
  return (
    <>
      <Row>
        <Col xs={1} />
        <Col xs={7}>
          <h1 className="recipeDetails-title">{detailsDataRetrieved.title}</h1>
        </Col>
        <Col xs={2}>
          <div className="recipeDetails-rate-outter">
            <RatingStars />
            <div
              style={{ width: getAverageRating(detailsDataRetrieved.comments) }}
              className="recipeDetails-rate-inner"
            >
              <RatingActiveStars place={strings.rating.DETAILS} />
            </div>
          </div>
        </Col>
        <Col xs={1}>
          <div
            onClick={e => {
              e.preventDefault();
              dispatch(recipeDetailsClearState());
            }}
            className="recipeDetails-close-icon"
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </Col>
        <Col xs={1} />
      </Row>
      <Row className="mb-2" />
      <ScrollArea smoothScrolling={true} className="recipeDetails-main">
        <div>
          <Row>
            <Col xs={1} />
            <Col xs={5}>
              <Img
                className="recipeDetails-picture"
                src={
                  detailsDataRetrieved.picture
                    ? detailsDataRetrieved.picture
                    : require("../../assets/imgs/panret.jpg")
                }
                loader={<Spinner animation="border" variant="dark" />}
              />
            </Col>
            <Col xs={5}>
              <div className="recipeDetails-ingredients-text">
                {capitalizeFirst(strings.recipeBookDetails.INGREDIENTS)}
              </div>
              <div style={{ height: 10 }} />
              {detailsDataRetrieved.ingredients.map((ingredient, index) => (
                <div className="recipeDetails-ingredients-item" key={index}>
                  - {ingredient}
                </div>
              ))}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-3" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="recipeDetails-ingredients-text">
                {capitalizeFirst(strings.recipeBookDetails.DESCRIBE)}
              </div>
              <div style={{ height: 10 }} />
              <div className="recipeDetails-ingredients-description">
                {detailsDataRetrieved.description}
              </div>
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-5" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {!isCommented && (
                <RateAndComment recipeId={detailsDataRetrieved._id} />
              )}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-5" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {detailsDataRetrieved.comments.map((item, index) => (
                <div className="recipeDetails-comments-area" key={index}>
                  {item.commentator.photo || item.commentator.googlePhoto ? (
                    <Img
                      className="recipeDetails-comments-photo"
                      src={
                        item.commentator.photo
                          ? item.commentator.photo
                          : item.commentator.googlePhoto
                          ? item.commentator.googlePhoto
                          : null
                      }
                      loader={
                        <Spinner animation="border" size="sm" variant="dark" />
                      }
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="recipeDetails-comments-icon"
                      icon={faUser}
                    />
                  )}
                  <div
                    onMouseEnter={
                      (item.commentator.email === userData.email ||
                        item.commentator.email === googleUserData.email) &&
                      handleMouseEnter
                    }
                    onMouseLeave={
                      (item.commentator.email === userData.email ||
                        item.commentator.email === googleUserData.email) &&
                      handleMouseLeave
                    }
                    className="recipeDetails-comments-content-area"
                  >
                    <div className="recipeDetails-comments-author">
                      {item.commentator.name}
                      <TimeAgo
                        className="recipeDetails-comments-timeago"
                        datetime={createDate(item.comment.date)}
                        locale="fr"
                      />
                    </div>
                    <div className="recipeDetails-comments-rate">
                      <CommentRate rate={item.rate.value} />
                    </div>
                    <div style={{ height: 5 }} />
                    <div className="recipeDetails-comments-content">
                      {item.comment.content}
                    </div>
                  </div>
                  {editShow && (
                    <div
                      className="recipeDetails-comments-edit-box"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <FontAwesomeIcon
                        onClick={handleEditClick}
                        className="recipeDetails-comments-edit-icon"
                        icon={faEdit}
                      />
                      <FontAwesomeIcon
                        onClick={handleTrashClick}
                        className="recipeDetails-comments-trash-icon"
                        icon={faTrash}
                      />
                    </div>
                  )}
                </div>
              ))}
            </Col>
            <Col xs={1} />
          </Row>
        </div>
      </ScrollArea>
    </>
  );
};

export default RecipeDetails;
