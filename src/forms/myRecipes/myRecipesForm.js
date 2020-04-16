import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import useNewRecipeForm from "../../hooks/screen/myRecipes/useNewRecipeForm";
import { strings } from "../../strings/Strings";
import { capitalizeFirst, capitalize } from "../../util/Util";
import ImageUploader from "react-images-upload";
import { showNewRecipeForm } from "../../redux/myRecipes/showNewRecipeForm/thunk/showNewRecipeFormThunk";
import { useSelector, useDispatch } from "react-redux";
import "./myRecipesForm.css";

const MyRecipesForm = () => {
  const dispatch = useDispatch();
  const {
    inputs,
    handleInputsChange,
    handlePicture,
    handleSubmit,
  } = useNewRecipeForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.TITLE)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputsChange}
              value={inputs.title || ""}
              name="title"
              type="text"
              maxLength="21"
              placeholder={strings.myRecipes.TITLE}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicPicture">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.PICTURE)}
            </Form.Label>
            <ImageUploader
              fileContainerStyle={{
                height: 75,
                fontFamily: "OpenSans-Regular",
                backgroundColor: "#f3cf7a",
                border: "1px solid #CED4DA",
              }}
              withIcon={false}
              singleImage={true}
              withLabel={true}
              label={capitalizeFirst(strings.myRecipes.MAX_PICTURE_SIZE)}
              buttonText={capitalizeFirst(strings.myRecipes.CHOOSE_PICTURE)}
              onChange={(picture) => handlePicture(picture)}
              imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
              fileSizeError={capitalizeFirst(
                strings.myRecipes.PICTURE_SIZE_ERROR
              )}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicVideo">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.VIDEO)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputsChange}
              value={inputs.video || ""}
              name="video"
              type="text"
              placeholder={strings.myRecipes.VIDEO_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicCategory">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.CATEGORY)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              as="select"
              name="category"
              defaultValue=""
              onChange={handleInputsChange}
            >
              <option disabled={true} value="">
                {capitalizeFirst(strings.myRecipes.CHOOSE_CATEGORY)}
              </option>
              <option value={strings.myRecipes.category.LUNCH || ""}>
                {capitalize(strings.myRecipes.category.LUNCH)}
              </option>
              <option value={strings.myRecipes.category.DESSERTS || ""}>
                {capitalize(strings.myRecipes.category.DESSERTS)}
              </option>
              <option value={strings.myRecipes.category.DRINKS || ""}>
                {capitalize(strings.myRecipes.category.DRINKS)}
              </option>
              <option value={strings.myRecipes.category.EVENING || ""}>
                {capitalize(strings.myRecipes.category.EVENING)}
              </option>
              <option value={strings.myRecipes.category.SALADES || ""}>
                {capitalize(strings.myRecipes.category.SALADES)}
              </option>
              <option value={strings.myRecipes.category.FAST_FOOD || ""}>
                {capitalize(strings.myRecipes.category.FAST_FOOD)}
              </option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicCookTime">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.COOK_TIME)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputsChange}
              value={inputs.cookTime || ""}
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
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.INGREDIENTS)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputsChange}
              value={inputs.ingredients || ""}
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
            <Form.Label className="text-family">
              {capitalizeFirst(strings.myRecipes.DESCRIPTION)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputsChange}
              value={inputs.description || ""}
              name="description"
              type="text"
              placeholder={strings.myRecipes.DESCRIPTION}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(showNewRecipeForm(false));
            }}
            type="submit"
            className="button-text"
            variant="outline-dark"
          >
            <div className="contact-spinner">
              {false && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </div>
            {false ? (
              <div className="contact-button-loading">
                {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
              </div>
            ) : (
              <div>{capitalizeFirst(strings.contact.BUTTON_TEXT)}</div>
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MyRecipesForm;
