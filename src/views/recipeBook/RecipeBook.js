import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import MakeRecipeButton from "./makeRecipeButton";
import RecipesList from "./RecipesList";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  return (
    <div className="recipebook-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="recipebook-first-section">
        <Row>
          <Col xs={2} />
          <Col xs={10}>
            <div className="recipebook-list">
              <RecipesList />
            </div>
          </Col>
        </Row>
      </div>
      <div className="recipebook-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-2" />
        <MakeRecipeButton />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={2} />
          <Col xs={10}>
            <Image
              className="recipebook-soup"
              src={require("../../assets/imgs/soupret.jpg")}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RecipeBook;
