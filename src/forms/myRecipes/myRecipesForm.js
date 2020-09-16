import React from "react";
import { Form, Row, Col, Button, Image, Spinner } from "react-bootstrap";
import useNewRecipeForm from "../../hooks/form/myRecipes/useNewRecipeForm";
import { strings } from "../../strings/Strings";
import { capitalizeFirst, capitalize } from "../../util/Util";
import ImageUploader from "react-images-upload";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGrin } from "@fortawesome/free-regular-svg-icons";
import { toEditMyRecipeClearState } from "../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { showNewRecipeForm } from "../../redux/myRecipes/showNewRecipeForm/thunk/showNewRecipeFormThunk";
import { showEmojis } from "../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import { useSelector, useDispatch } from "react-redux";
import ScrollArea from "react-scrollbar";
import "./myRecipesForm.css";
import "../../shared/global.css";

const MyRecipesForm = () => {
  const dispatch = useDispatch();
  const {
    inputs,
    error,
    loadingImage,
    inputHasFocus,
    handleFocus,
    handleBlur,
    handleInputsChange,
    handlePicture,
    handleRemoveImage,
    handleRemoveVideo,
    handlePlayerError,
    handlePlayerReady,
    handleSubmit,
  } = useNewRecipeForm();

  const { loading } = useSelector((state) => state.isMyRecipeChanged);
  const { myRecipeToEdit } = useSelector((state) => state.toEditMyRecipe);

  return (
    <ScrollArea
      className="myrecipes-form-scroll-area"
      smoothScrolling={true}
      horizontal={false}
    >
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.TITLE)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleInputsChange}
                value={inputs.title || ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="title"
                type="text"
                maxLength="21"
                placeholder={strings.myRecipes.TITLE_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicPicture">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.PICTURE)}
              </Form.Label>
              <ImageUploader
                fileContainerStyle={{
                  height: 75,
                  fontFamily: "OpenSans-Regular",
                  border: "1px solid #CED4DA",
                  backgroundColor: "#e2f3f5",
                }}
                withIcon={false}
                singleImage={true}
                withLabel={true}
                label={capitalizeFirst(strings.myRecipes.MAX_PICTURE_SIZE)}
                buttonText={capitalizeFirst(strings.myRecipes.CHOOSE_PICTURE)}
                buttonStyles={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: "1vw",
                }}
                onChange={handlePicture}
                imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
                fileTypeError={capitalizeFirst(
                  strings.myRecipes.error.IMAGE_FORMAT
                )}
              />
            </Form.Group>
          </Col>
        </Row>
        {loadingImage ? (
          <Row>
            <Col xs={12}>
              <div className="myrecipes-form-loading-items">
                <Spinner animation="border" size="sm" />
                <div className="myrecipes-form-loadingimage-text">
                  {capitalizeFirst(strings.myRecipes.LOADING_IMAGE)}
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          inputs.recipeImage && (
            <Row>
              <Col xs={8}>
                <Image
                  src={
                    inputs.recipeImage.image ? inputs.recipeImage.image : null
                  }
                  thumbnail
                />
              </Col>
              <Col xs={1}>
                <FontAwesomeIcon
                  className="myrecipes-form-trash"
                  icon={faTrash}
                  onClick={handleRemoveImage}
                />
              </Col>
              <Col xs={2} />
            </Row>
          )
        )}
        {error.imageError && (
          <Row>
            <Col xs={12}>
              <div className="myrecipes-form-video-error">
                {error.imageError ? error.imageError : null}
              </div>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicVideo">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.VIDEO)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleInputsChange}
                value={inputs.video || ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="video"
                type="text"
                placeholder={strings.myRecipes.VIDEO_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        {error.playerError ? (
          <Row>
            <Col xs={12}>
              <div className="myrecipes-form-video-error">
                {error.playerError ? error.playerError : null}
              </div>
            </Col>
          </Row>
        ) : (
          inputs.video && (
            <Row>
              <Col xs={9}>
                <div className="myrecipes-form-player-wrapper">
                  <ReactPlayer
                    className="myrecipes-form-player"
                    url={inputs.video ? inputs.video : null}
                    controls={true}
                    width="100%"
                    height="100%"
                    onError={handlePlayerError}
                    onReady={handlePlayerReady}
                  />
                </div>
              </Col>
              <Col xs={1} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className="myrecipes-form-trash"
                  icon={faTrash}
                  onClick={handleRemoveVideo}
                />
              </Col>
              <Col xs={1} />
            </Row>
          )
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicCategory">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.CATEGORY)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                as="select"
                name="category"
                value={inputs.category || ""}
                onChange={handleInputsChange}
              >
                <option disabled={true} value="">
                  {capitalizeFirst(strings.myRecipes.CHOOSE_CATEGORY)}
                </option>
                <option value={strings.recipeBook.CAT_LUNCH || ""}>
                  {capitalize(strings.myRecipes.category.LUNCH)}
                </option>
                <option value={strings.recipeBook.CAT_DESSERT || ""}>
                  {capitalize(strings.myRecipes.category.DESSERTS)}
                </option>
                <option value={strings.recipeBook.CAT_DRINKS || ""}>
                  {capitalize(strings.myRecipes.category.DRINKS)}
                </option>
                <option value={strings.recipeBook.CAT_EVENING || ""}>
                  {capitalize(strings.myRecipes.category.EVENING)}
                </option>
                <option value={strings.recipeBook.CAT_SALADES || ""}>
                  {capitalize(strings.myRecipes.category.SALADES)}
                </option>
                <option value={strings.recipeBook.CAT_FAST_FOOD || ""}>
                  {capitalize(strings.myRecipes.category.FAST_FOOD)}
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicCookTime">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.COOK_TIME)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleInputsChange}
                value={inputs.cookTime || ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="cookTime"
                type="text"
                maxLength="3"
                placeholder={strings.myRecipes.COOK_TIME_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicIngredients">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.INGREDIENTS)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleInputsChange}
                value={inputs.ingredients || ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="ingredients"
                type="text"
                placeholder={strings.myRecipes.INGREDIENTS_EX}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicDescription">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myRecipes.DESCRIPTION)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleInputsChange}
                value={inputs.description || ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                as="textarea"
                rows="4"
                name="description"
                type="text"
                placeholder={strings.myRecipes.DESCRIPTION_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="myrecipes-form-buttons-box">
              {!myRecipeToEdit.recipeTitle ? (
                <div className="global-emoji-wrapper">
                  <Button
                    disabled={
                      loading ||
                      inputs.title === undefined ||
                      inputs.title === "" ||
                      error.imageError ||
                      error.playerError ||
                      inputs.category === undefined ||
                      inputs.category === "" ||
                      inputs.cookTime === undefined ||
                      inputs.cookTime === "" ||
                      inputs.ingredients === undefined ||
                      inputs.ingredients === "" ||
                      inputs.description === undefined ||
                      inputs.description === ""
                    }
                    type="submit"
                    className="global-button-label"
                    variant="outline-dark"
                  >
                    <div className="myrecipes-form-spinner">
                      {loading && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    {loading ? (
                      <div className="myrecipes-form-button-loading">
                        {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
                      </div>
                    ) : (
                      <div>{capitalizeFirst(strings.contact.BUTTON_TEXT)}</div>
                    )}
                  </Button>
                  <Button
                    className="global-emoji-button"
                    disabled={
                      (inputHasFocus !== "title" ||
                        inputs.title === "" ||
                        inputs.title === undefined) &&
                      (inputHasFocus !== "description" ||
                        inputs.description === "" ||
                        inputs.description === undefined)
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(showEmojis(true));
                    }}
                    size="sm"
                    variant="light"
                  >
                    <FontAwesomeIcon
                      className="global-emoji-button-icon"
                      icon={faGrin}
                    />
                  </Button>
                </div>
              ) : (
                <div className="global-emoji-wrapper">
                  <Button
                    disabled={
                      loading ||
                      inputs.title === undefined ||
                      inputs.title === "" ||
                      error.imageError ||
                      error.playerError ||
                      inputs.category === undefined ||
                      inputs.category === "" ||
                      inputs.cookTime === undefined ||
                      inputs.cookTime === "" ||
                      inputs.ingredients === undefined ||
                      inputs.ingredients === "" ||
                      inputs.description === undefined ||
                      inputs.description === ""
                    }
                    type="submit"
                    className="global-button-label"
                    variant="outline-dark"
                  >
                    <div className="myrecipes-form-spinner">
                      {loading && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    {loading ? (
                      <div className="myrecipes-form-button-loading">
                        {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
                      </div>
                    ) : (
                      <div>
                        {capitalizeFirst(strings.rating.BUTTON_EDIT_TEXT)}
                      </div>
                    )}
                  </Button>
                  <Button
                    className="global-emoji-button"
                    disabled={
                      (inputHasFocus !== "title" ||
                        inputs.title === "" ||
                        inputs.title === undefined) &&
                      (inputHasFocus !== "description" ||
                        inputs.description === "" ||
                        inputs.description === undefined)
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(showEmojis(true));
                    }}
                    size="sm"
                    variant="light"
                  >
                    <FontAwesomeIcon
                      className="global-emoji-button-icon"
                      icon={faGrin}
                    />
                  </Button>
                </div>
              )}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showNewRecipeForm(false));
                  dispatch(toEditMyRecipeClearState());
                }}
                className="global-button-label"
                variant="outline-secondary"
              >
                {capitalizeFirst(strings.rating.BUTTON_CANCEL_TEXT)}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </ScrollArea>
  );
};

export default MyRecipesForm;
