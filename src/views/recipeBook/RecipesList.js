import React from "react";
import SimpleBar from "simplebar-react";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { createDate } from "../../util/Util";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import "./recipeBook.css";

const RecipesList = () => {
  const { loadingRecipes, recipesRetrieved, recipesError } = useSelector(
    state => state.recipeBook
  );
  timeago.register("fr", fr);
  return loadingRecipes ? (
    <div className="recipesList-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : (
    <div className="recipesList-main-area">
      {recipesError ? (
        <div className="recipesList-item-norecipes">{recipesError}</div>
      ) : (
        <SimpleBar>
          {recipesRetrieved.map((retrieveRecipe, index) => (
            <div className="recipesList-item" key={index}>
              <Row>
                <Col xs={3}>
                  <Image
                    className="recipesList-item-picture"
                    src={
                      retrieveRecipe.picture
                        ? retrieveRecipe.picture
                        : require("../../assets/imgs/panret.jpg")
                    }
                    thumbnail
                  />
                </Col>
                <Col xs={9}>
                  <Row>
                    <Col xs={8} />
                    <Col xs={4}>
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
                  <div style={{ height: 10 }} />
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
            </div>
          ))}
        </SimpleBar>
      )}
    </div>
  );
};

export default RecipesList;
