import React, { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { getMyRecipes } from "../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { strings } from "../../strings/Strings";
import Img from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock } from "@fortawesome/free-solid-svg-icons";
import { createDate, capitalize } from "../../util/Util";
import RatingStars from "../../shared/RatingStars";
import RatingActiveStars from "../../shared/RatingActiveStars";
import { getAverageRating } from "../../shared/getAverageRating";
import { showNewRecipeForm } from "../../redux/myRecipes/showNewRecipeForm/thunk/showNewRecipeFormThunk";
import { myRecipeData } from "../../redux/myRecipes/myRecipePreview/thunk/myRecipePreviewThunk";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { useDispatch, useSelector } from "react-redux";
import "./myRecipes.css";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { loadingMyRecipes, myRecipesRetrieved, myRecipesError } = useSelector(
    (state) => state.myRecipes
  );
  const { recipeUpdated } = useSelector((state) => state.isMyRecipeChanged);

  useEffect(() => {
    if (userData.email) {
      dispatch(getMyRecipes(userData._id, userData.email));
    }
    return () => {
      dispatch(showNewRecipeForm(false));
    };
  }, [userData._id, userData.email, recipeUpdated, dispatch]);
  timeago.register("fr", fr);

  return loadingMyRecipes ? (
    <div className="myrecipes-list-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : myRecipesError ? (
    <div className="myrecipes-list-item-norecipes">{myRecipesError}</div>
  ) : (
    <div className="myrecipes-list-main-area">
      {myRecipesRetrieved !== null &&
        myRecipesRetrieved.map((retrieveRecipe, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(myRecipeData(retrieveRecipe));
            }}
            className="myrecipes-list-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <Img
                  className="myrecipes-list-item-picture"
                  src={
                    retrieveRecipe.picture
                      ? strings.path.IMAGE_REQUEST + retrieveRecipe.picture
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
                        className="myrecipes-list-item-timeago"
                        datetime={createDate(retrieveRecipe.date)}
                        locale="fr"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="myrecipes-list-item-title">
                  {retrieveRecipe.title}
                </div>
                <div className="myrecipes-list-item-rate-outter">
                  <RatingStars />
                  <div
                    style={{
                      width: getAverageRating(retrieveRecipe.comments),
                    }}
                    className="myrecipes-list-item-rate-inner"
                  >
                    <RatingActiveStars place={strings.rating.LIST} />
                  </div>
                </div>
                <div style={{ height: 5 }} />
                <div className="myrecipes-list-item-author">
                  <div className="myrecipes-list-item-icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div>{capitalize(retrieveRecipe.category)}</div>
                </div>
                <div className="myrecipes-list-item-time">
                  <div className="myrecipes-list-item-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>{retrieveRecipe.cookTime} min.</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default MyRecipesList;
