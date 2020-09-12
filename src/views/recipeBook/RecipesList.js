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
import pl from "timeago.js/lib/lang/pl";
import RatingStars from "../../shared/RatingStars";
import RatingActiveStars from "../../shared/RatingActiveStars";
import { getAverageRating } from "../../shared/getAverageRating";
import { retrieveRecipeDetails } from "../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { changeRecipeListItem } from "../../redux/recipeBook/changeRecipeListItem/thunk/changeRecipeListItemThunk";
import "./recipeBook.css";

const RecipesList = () => {
  const dispatch = useDispatch();
  const { loadingRecipes, recipesRetrieved, recipesError } = useSelector(
    (state) => state.recipeBook
  );
  timeago.register("pl", pl);
  return loadingRecipes ? (
    <div className="recipesList-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : recipesError ? (
    <div className="recipesList-item-norecipes">{recipesError}</div>
  ) : (
    <div className="recipesList-main-area">
      {recipesRetrieved !== null &&
        recipesRetrieved.map((recipeRetrieved, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeRecipeListItem(true));
              dispatch(retrieveRecipeDetails(recipeRetrieved));
            }}
            className="recipesList-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <Img
                  className="recipesList-item-picture"
                  src={
                    recipeRetrieved.picture
                      ? strings.path.IMAGE_REQUEST + recipeRetrieved.picture
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
                        datetime={createDate(recipeRetrieved.date)}
                        locale="pl"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="recipesList-item-title">
                  {recipeRetrieved.title}
                </div>
                <div className="recipesList-item-rate-outter">
                  <RatingStars />
                  <div
                    style={{
                      width: getAverageRating(recipeRetrieved.comments),
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
                  <div>{recipeRetrieved.author.name}</div>
                </div>
                <div className="recipesList-item-time">
                  <div className="recipesList-item-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>{recipeRetrieved.cookTime} min.</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default RecipesList;
