import React from "react";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faUserCircle,
  faUserPlus,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pl from "timeago.js/lib/lang/pl";
import { createDate } from "../../util/Util";
import { useSelector } from "react-redux";
import CommentRate from "./CommentRate";
import RatingStars from "../../shared/RatingStars";
import RatingActiveStars from "../../shared/RatingActiveStars";
import RateAndComment from "../../forms/recipeBook/RateAndComment/RateAndComment";
import { getAverageRating } from "../../shared/getAverageRating";
import useRecipeDetails from "../../hooks/screen/recipeDetails/useRecipeDetails";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import { userGooglePhoto } from "../../shared/testWordsArray";
import "./recipeBook.css";

const RecipeDetails = () => {
  const props = useSpring({
    opacity: 1,
    config: { duration: 300 },
    from: { opacity: 0 },
  });

  const { userData } = useSelector((state) => state.login);
  const { rateAndComment } = useSelector((state) => state.toEditRateComment);
  const { detailsLoading, detailsDataRetrieved } = useSelector(
    (state) => state.isRecipeDetailsShown
  );

  const recipeCommented =
    detailsDataRetrieved.comments.length > 0 &&
    detailsDataRetrieved.comments.map((comment) => comment.commentator.email);
  const recipeFollowed =
    detailsDataRetrieved.author.followers.length > 0 &&
    detailsDataRetrieved.author.followers.map(
      (follower) => follower && follower.email
    );

  const {
    editShow,
    handleMouseEnter,
    handleMouseLeave,
    handleEditClick,
    handleTrashClick,
    handleClearDetailsState,
    handleFollowRecipeAuthor,
    handleUnfollowRecipeAuthor,
  } = useRecipeDetails();

  timeago.register("pl", pl);

  return (
    <animated.div style={props}>
      <Row>
        <Col xs={1} />
        <Col xs={6}>
          <h1 className="recipeDetails-title">{detailsDataRetrieved.title}</h1>
        </Col>
        <Col xs={1}>
          <Img
            className="recipeDetails-author-photo"
            src={
              userGooglePhoto.some(
                (element) =>
                  detailsDataRetrieved.author.photo &&
                  detailsDataRetrieved.author.photo.includes(element)
              )
                ? detailsDataRetrieved.author.photo
                : !userGooglePhoto.some(
                    (element) =>
                      detailsDataRetrieved.author.photo &&
                      detailsDataRetrieved.author.photo.includes(element)
                  ) && detailsDataRetrieved.author.photo
                ? strings.path.IMAGE_REQUEST + detailsDataRetrieved.author.photo
                : require("../../assets/imgs/cookerret.png")
            }
            loader={<Spinner animation="border" variant="dark" />}
          />
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
            onClick={(e) => {
              e.preventDefault();
              handleClearDetailsState();
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
          <Row className="mb-1" />
          <Row>
            <Col xs={1} />
            <Col xs={3}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  (recipeFollowed &&
                    !recipeFollowed.some((email) =>
                      userData.email.includes(email)
                    )) ||
                  !recipeFollowed
                    ? handleFollowRecipeAuthor(
                        detailsDataRetrieved.author._id,
                        detailsDataRetrieved._id
                      )
                    : handleUnfollowRecipeAuthor(
                        detailsDataRetrieved.author._id,
                        detailsDataRetrieved._id
                      );
                }}
                disabled={userData.email === detailsDataRetrieved.author.email}
                className="recipeDetails-follow-button"
                variant="dark"
              >
                <div className="myrecipes-form-spinner">
                  {detailsLoading && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                </div>
                {detailsLoading ? (
                  <div className="myrecipes-form-button-loading">
                    {capitalizeFirst(strings.recipeBookDetails.FOLLOW_LOADING)}
                  </div>
                ) : (recipeFollowed &&
                    !recipeFollowed.some((email) =>
                      userData.email.includes(email)
                    )) ||
                  !recipeFollowed ? (
                  <>
                    <FontAwesomeIcon
                      className="myrecipes-preview-button-icon"
                      icon={faUserPlus}
                    />
                    <div className="myrecipes-button-text">
                      {capitalizeFirst(strings.recipeBookDetails.FOLLOW)}
                    </div>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon
                      className="myrecipes-preview-button-icon"
                      icon={faUserMinus}
                    />
                    <div className="myrecipes-button-text">
                      {capitalizeFirst(strings.recipeBookDetails.UNFOLLOW)}
                    </div>
                  </>
                )}
              </Button>
            </Col>
            <Col xs={8} />
          </Row>
          <Row className="mb-3" />
          <Row>
            <Col xs={1} />
            <Col xs={5}>
              <Img
                className="recipeDetails-picture"
                src={
                  detailsDataRetrieved.picture
                    ? strings.path.IMAGE_REQUEST + detailsDataRetrieved.picture
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
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {detailsDataRetrieved.video && (
                <div className="recipeDetails-player-wrapper">
                  <ReactPlayer
                    className="recipeDetails-player"
                    url={detailsDataRetrieved.video}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              )}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {((recipeCommented &&
                !recipeCommented.some((email) =>
                  userData.email.includes(email)
                ) &&
                detailsDataRetrieved.author.email !== userData.email) ||
                (!recipeCommented &&
                  detailsDataRetrieved.author.email !== userData.email) ||
                rateAndComment.commentValue) && (
                <RateAndComment recipeId={detailsDataRetrieved._id} />
              )}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {detailsDataRetrieved.comments.map((item, index) => (
                <div className="recipeDetails-comments-area" key={index}>
                  {item.commentator.photo ? (
                    <Img
                      className="recipeDetails-comments-photo"
                      src={
                        userGooglePhoto.some(
                          (element) =>
                            item.commentator.photo &&
                            item.commentator.photo.includes(element)
                        )
                          ? item.commentator.photo
                          : !userGooglePhoto.some(
                              (element) =>
                                item.commentator.photo &&
                                item.commentator.photo.includes(element)
                            ) && item.commentator.photo
                          ? strings.path.IMAGE_REQUEST + item.commentator.photo
                          : null
                      }
                      loader={
                        <Spinner animation="border" size="sm" variant="dark" />
                      }
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="recipeDetails-comments-icon"
                      icon={faUserCircle}
                    />
                  )}
                  <div
                    onMouseEnter={
                      item.commentator.email === userData.email
                        ? handleMouseEnter
                        : null
                    }
                    onMouseLeave={
                      item.commentator.email === userData.email
                        ? handleMouseLeave
                        : null
                    }
                    className="recipeDetails-comments-content-area"
                  >
                    <div className="recipeDetails-comments-author">
                      {item.commentator.name}
                      <TimeAgo
                        className="recipeDetails-comments-timeago"
                        datetime={createDate(item.comment.date)}
                        locale="pl"
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
                        onClick={(e) => {
                          e.preventDefault();
                          handleEditClick({
                            rateId: item.rate._id,
                            rateValue: item.rate.value,
                            commentId: item.comment._id,
                            commentValue: item.comment.content,
                          });
                        }}
                        className="recipeDetails-comments-edit-icon"
                        icon={faEdit}
                      />
                      {!detailsLoading ? (
                        <FontAwesomeIcon
                          onClick={(e) => {
                            e.preventDefault();
                            handleTrashClick(
                              item.rate._id,
                              item.comment._id,
                              detailsDataRetrieved._id,
                              item._id
                            );
                          }}
                          className="recipeDetails-comments-trash-icon"
                          icon={faTrash}
                        />
                      ) : (
                        <Spinner animation="border" size="sm" variant="dark" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </Col>
            <Col xs={1} />
          </Row>
        </div>
      </ScrollArea>
    </animated.div>
  );
};

export default RecipeDetails;
