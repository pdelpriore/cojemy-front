import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Image } from "react-bootstrap";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  return (
    <div className="recipebook-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div>
        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <div className="recipebook-center-area">
              <div className="recipebook-list"></div>
              <Image
                className="recipebook-spoon"
                src={require("../../assets/imgs/spoonret.jpg")}
              />
            </div>
          </Col>
          <Col xs={1} />
        </Row>
      </div>
    </div>
  );
};

export default RecipeBook;
