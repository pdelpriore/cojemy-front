import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetailsClearState } from "../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import "./recipeBook.css";

const RecipeDetails = () => {
  const dispatch = useDispatch();
  const { detailsDataRetrieved } = useSelector(
    state => state.showRecipeDetails
  );
  return (
    <ScrollArea smoothScrolling={true} className="recipeDetails-main">
      <div>
        <Row>
          <Col xs={10}>
            <h1 className="recipeDetails-title">
              {detailsDataRetrieved.title}
            </h1>
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
            <div>
              <div className="recipeDetails-ingredients-text">
                Ingredients:{" "}
              </div>
            </div>
          </Col>
          <Col xs={1} />
        </Row>
        <Row className="mb-3" />
        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <div className="recipeDetails-ingredients-text">Description: </div>
          </Col>
          <Col xs={1} />
        </Row>
      </div>
    </ScrollArea>
  );
};

export default RecipeDetails;
