import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import { myRecipePreviewClearState } from "../../redux/myRecipes/myRecipePreview/thunk/myRecipePreviewThunk";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import "./myRecipes.css";

const MyRecipePreview = () => {
  const dispatch = useDispatch();
  const props = useSpring({
    opacity: 1,
    config: { duration: 300 },
    from: { opacity: 0 },
  });
  const { myRecipePreviewData } = useSelector((state) => state.myRecipePreview);

  return (
    <animated.div style={props}>
      <Row>
        <Col xs={1} />
        <Col xs={6}>
          <h1 className="recipeDetails-title">{myRecipePreviewData.title}</h1>
        </Col>
        <Col xs={1}>
          <Img
            className="recipeDetails-author-photo"
            src={
              myRecipePreviewData.author.photo
                ? myRecipePreviewData.author.photo
                : require("../../assets/imgs/cookerret.png")
            }
            loader={<Spinner animation="border" variant="dark" />}
          />
        </Col>
        <Col xs={2} />
        <Col xs={1}>
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(myRecipePreviewClearState());
            }}
            className="recipeDetails-close-icon"
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </Col>
        <Col xs={1} />
      </Row>
      <Row className="mb-2" />
      <ScrollArea smoothScrolling={true} className="recipeDetails-main">
        <div>
          <Row>
            <Col xs={1} />
            <Col xs={5}>
              <Img
                className="recipeDetails-picture"
                src={
                  myRecipePreviewData.picture
                    ? "http://localhost:4000" + myRecipePreviewData.picture
                    : require("../../assets/imgs/panret.jpg")
                }
                loader={<Spinner animation="border" variant="dark" />}
              />
            </Col>
            <Col xs={5}>
              <div className="recipeDetails-ingredients-text">
                {capitalizeFirst(strings.recipeBookDetails.INGREDIENTS)}
              </div>
              <div style={{ height: 10 }} />
              {myRecipePreviewData.ingredients.map((ingredient, index) => (
                <div className="recipeDetails-ingredients-item" key={index}>
                  - {ingredient}
                </div>
              ))}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-3" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="recipeDetails-ingredients-text">
                {capitalizeFirst(strings.recipeBookDetails.DESCRIBE)}
              </div>
              <div style={{ height: 10 }} />
              <div className="recipeDetails-ingredients-description">
                {myRecipePreviewData.description}
              </div>
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              {myRecipePreviewData.video && (
                <div className="recipeDetails-player-wrapper">
                  <ReactPlayer
                    className="recipeDetails-player"
                    url={myRecipePreviewData.video}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              )}
            </Col>
            <Col xs={1} />
          </Row>
        </div>
      </ScrollArea>
    </animated.div>
  );
};

export default MyRecipePreview;
