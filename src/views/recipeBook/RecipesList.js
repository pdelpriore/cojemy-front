import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import Img from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { createDate } from "../../util/Util";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import RatingStars from "./RatingStars";
import RatingActiveStars from "./RatingActiveStars";
import { getAverageRating } from "./getAverageRating";
import {
  showRecipeDetailsComponent,
  retrieveRecipeDetails
} from "../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { hideRateCommentForm } from "../../redux/hideRateCommentForm/thunk/hideRateCommentFormThunk";
import { addRateComment } from "../../redux/addRateComment/thunk/addRateCommentThunk";
import { useSpring, animated } from "react-spring";
import "./recipeBook.css";

const RecipesList = () => {
  const props = useSpring({
    opacity: 1,
    config: { duration: 400 },
    from: { opacity: 0 }
  });
  const dispatch = useDispatch();
  const { loadingRecipes, recipesRetrieved, recipesError } = useSelector(
    state => state.recipeBook
  );
  timeago.register("fr", fr);
  return loadingRecipes ? (
    <div className="recipesList-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : (
    <animated.div className="recipesList-main-area" style={props}>
      {recipesError || recipesRetrieved === null ? (
        <div className="recipesList-item-norecipes">{recipesError}</div>
      ) : (
        <div>
          {recipesRetrieved.map((retrieveRecipe, index) => (
            <div
              onClick={e => {
                e.preventDefault();
                dispatch(hideRateCommentForm(true));
                dispatch(showRecipeDetailsComponent(true));
                dispatch(addRateComment(false));
                dispatch(retrieveRecipeDetails(retrieveRecipe));
              }}
              className="recipesList-item"
              key={index}
            >
              <Row>
                <Col xs={3}>
                  <Img
                    className="recipesList-item-picture"
                    src={
                      retrieveRecipe.picture
                        ? retrieveRecipe.picture
                        : require("../../assets/imgs/panret.jpg")
                    }
                    loader={<Spinner animation="border" variant="info" />}
                  />
                </Col>
                <Col xs={9}>
                  <Row>
                    <Col xs={7} />
                    <Col xs={5}>
                      <div>
                        <TimeAgo
                          className="recipesList-item-timeago"
                          datetime={createDate(retrieveRecipe.date)}
                          locale="fr"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="recipesList-item-title">
                    {retrieveRecipe.title}
                  </div>
                  <div className="recipesList-item-rate-outter">
                    <RatingStars />
                    <div
                      style={{
                        width: getAverageRating(retrieveRecipe.comments)
                      }}
                      className="recipesList-item-rate-inner"
                    >
                      <RatingActiveStars place={strings.rating.LIST} />
                    </div>
                  </div>
                  <div style={{ height: 5 }} />
                  <div className="recipesList-item-author">
                    <div className="recipesList-item-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>{retrieveRecipe.author.name}</div>
                  </div>
                  <div className="recipesList-item-time">
                    <div className="recipesList-item-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div>{retrieveRecipe.cookTime} min.</div>
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  height: 10,
                  backgroundColor: "#2E303F",
                  borderRadius: "10px"
                }}
              />
            </div>
          ))}
        </div>
      )}
    </animated.div>
  );
};

export default RecipesList;
