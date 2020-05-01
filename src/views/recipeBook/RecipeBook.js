import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ScrollArea from "react-scrollbar";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
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
  const { handlePrev, handleNext } = useRecipeBook();
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
              <div onClick={handlePrev}>prev</div>
              <div onClick={handleNext}>next</div>
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
