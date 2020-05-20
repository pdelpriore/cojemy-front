import React from "react";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import useMyRecipePreview from "../../hooks/screen/myRecipes/useMyRecipePreview";
import { myRecipePreviewClearState } from "../../redux/myRecipes/myRecipePreview/thunk/myRecipePreviewThunk";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import { capitalize } from "../../util/Util";
import "./myRecipes.css";

const MyRecipePreview = () => {
  const dispatch = useDispatch();
  const props = useSpring({
    opacity: 1,
    config: { duration: 300 },
    from: { opacity: 0 },
  });
  const { handleEditClick, handleTrashClick } = useMyRecipePreview();
  const { myRecipePreviewData } = useSelector((state) => state.myRecipePreview);
  const { loadingMyRecipes } = useSelector((state) => state.myRecipes);

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
              ["googleusercontent.com"].some(
                (element) =>
                  myRecipePreviewData.author.photo &&
                  myRecipePreviewData.author.photo.includes(element)
              )
                ? myRecipePreviewData.author.photo
                : !["googleusercontent.com"].some(
                    (element) =>
                      myRecipePreviewData.author.photo &&
                      myRecipePreviewData.author.photo.includes(element)
                  )
                ? "http://localhost:4000" + myRecipePreviewData.author.photo
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
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={6}>
              <div className="myrecipes-button-preview-box">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleEditClick({
                      recipeId: myRecipePreviewData._id,
                      recipeTitle: myRecipePreviewData.title,
                      recipeImage: myRecipePreviewData.picture,
                      recipeVideo: myRecipePreviewData.video,
                      recipeCategory: myRecipePreviewData.category,
                      recipeCookTime: myRecipePreviewData.cookTime,
                      recipeIngredients: myRecipePreviewData.ingredients,
                      recipeDescription: myRecipePreviewData.description,
                    });
                  }}
                  className="myrecipes-preview-button"
                  variant="dark"
                >
                  <FontAwesomeIcon
                    className="myrecipes-preview-button-icon"
                    icon={faEdit}
                  />
                  <div className="myrecipes-button-text">
                    {capitalize(strings.myRecipes.BUTTON_CORRECTION)}
                  </div>
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleTrashClick(myRecipePreviewData._id);
                  }}
                  className="myrecipes-preview-button-delete"
                  variant="dark"
                >
                  <div className="myrecipes-form-spinner">
                    {loadingMyRecipes && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {loadingMyRecipes ? (
                    <div className="myrecipes-form-button-loading">
                      {capitalizeFirst(strings.myRecipes.BUTTON_REMOVE_LOADING)}
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        className="myrecipes-preview-button-icon"
                        icon={faTrash}
                      />
                      <div className="myrecipes-button-text">
                        {capitalize(strings.myRecipes.BUTTON_REMOVE)}
                      </div>
                    </>
                  )}
                </Button>
              </div>
            </Col>
            <Col xs={5} />
          </Row>
        </div>
      </ScrollArea>
    </animated.div>
  );
};

export default MyRecipePreview;
