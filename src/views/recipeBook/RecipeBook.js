import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ScrollArea from "react-scrollbar";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import MakeRecipeButton from "./makeRecipeButton";
import RecipesList from "./RecipesList";
import RecipeDetails from "./RecipeDetails";
import SearchRecipeForm from "../../forms/recipeBook/searchRecipe/SearchRecipeForm";
import useRecipeBook from "../../hooks/screen/recipeBook/useRecipeBook";
import { useSelector } from "react-redux";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });
  const { detailsShowed } = useSelector((state) => state.showRecipeDetails);
  const { recipesError } = useSelector((state) => state.recipeBook);
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );

  const { skip, handlePrev, handleNext } = useRecipeBook();
  return (
    <animated.div className="recipebook-area" style={props}>
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="recipebook-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="recipebook-list">
              <ScrollArea
                className="recipesList-item-simplebar"
                smoothScrolling={true}
              >
                <ListGroup>
                  <RecipesList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="recipebook-second-section">
        <div className={detailsShowed ? "recipebook-recipes-buttons" : ""}>
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={7} />
            <Col xs={4}>
              <SearchRecipeForm />
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <MakeRecipeButton />
            </Col>
            <Col xs={1} />
            <Col xs={5}>
              <Row className="mb-5" />
              <Row className="mb-3" />
              <Row>
                <Image
                  className="recipebook-soup"
                  src={require("../../assets/imgs/soupret.jpg")}
                />
              </Row>
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          {!searchInputFilled && (
            <Row>
              <Col xs={1} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className={
                    skip === 1
                      ? "recipebook-arrows-inactive"
                      : "recipebook-left-arrow"
                  }
                  onClick={skip === 1 ? null : handlePrev}
                  icon={faChevronCircleLeft}
                />
              </Col>
              <Col xs={2} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className={
                    recipesError
                      ? "recipebook-arrows-inactive"
                      : "recipebook-right-arrow"
                  }
                  onClick={recipesError ? null : handleNext}
                  icon={faChevronCircleRight}
                />
              </Col>
              <Col xs={7} />
            </Row>
          )}
        </div>
        {detailsShowed && (
          <div className="recipebook-recipes-details">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <RecipeDetails />
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default RecipeBook;
