import React from "react";
import SimpleBar from "simplebar-react";
import { Row, Col, Image, Spinner } from "react-bootstrap";
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
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <div className="recipesList-main-area">
      {recipesError ? (
        recipesError
      ) : (
        <SimpleBar>
          {recipesRetrieved.map((retrieveRecipe, index) => (
            <div className="recipesList-item" key={index}>
              <Row className="mb-3" />
              <Row>
                <Col xs={8} />
                <Col xs={3}>
                  <div>
                    <TimeAgo
                      datetime={createDate(retrieveRecipe.date)}
                      locale="fr"
                    />
                  </div>
                </Col>
                <Col xs={1} />
              </Row>
              <Row>
                <Col xs={1} />
                <Col xs={3}>
                  <Image
                    className="recipesList-item-picture"
                    src={
                      retrieveRecipe.picture
                        ? retrieveRecipe.picture
                        : require("../../assets/imgs/panret.jpg")
                    }
                    roundedCircle
                  />
                </Col>
                <Col xs={7}>
                  <div style={{ height: 50 }} />
                  <div className="recipesList-item-title">
                    {retrieveRecipe.title}
                  </div>
                </Col>
                <Col xs={1} />
              </Row>
              <Row className="mb-3" />
              <Row>
                <Col xs={1} />
                <Col xs={11}>
                  <div className="recipesList-item-author">
                    par: typol jakis
                  </div>
                </Col>
              </Row>
              <Row className="mb-3" />
              <Row>
                <Col xs={1} />
                <Col xs={11}>
                  <div className="recipesList-item-time">
                    temps: iles tam minut
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
