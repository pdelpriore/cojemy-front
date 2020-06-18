import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Image,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst, capitalize } from "../../util/Util";
import ImageUploader from "react-images-upload";
import useMyEventsForm from "../../hooks/form/myEvents/useMyEventsForm";
import Suggestions from "../../components/map/suggestions/Suggestions";
import Map from "../../components/map/map/Map";
import { selectEventAddressClearState } from "../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toEditMyRecipeClearState } from "../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import { useSelector, useDispatch } from "react-redux";
import ScrollArea from "react-scrollbar";
import "./myEventsForm.css";

const MyEventsForm = () => {
  const dispatch = useDispatch();
  const { inputs, showSuggestions, handleOnChange } = useMyEventsForm();
  const { loadingAddresses } = useSelector((state) => state.addressSuggestions);
  const { loadingLocationDetails } = useSelector(
    (state) => state.locationDetails
  );
  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
  );

  return (
    <ScrollArea
      className="myevents-form-scroll-area"
      smoothScrolling={true}
      horizontal={false}
    >
      <Form onSubmit={null}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.TITLE)}
              </Form.Label>
              <Form.Control
                className="myevents-form-text-family-message"
                onChange={null}
                value={null}
                name="title"
                type="text"
                maxLength="21"
                placeholder={strings.myEvents.TITLE_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicPhoto">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.PHOTO)}
              </Form.Label>
              <ImageUploader
                fileContainerStyle={{
                  height: 75,
                  fontFamily: "OpenSans-Regular",
                  backgroundColor: "#22d1ee",
                  border: "1px solid #CED4DA",
                }}
                withIcon={false}
                singleImage={true}
                withLabel={true}
                label={capitalizeFirst(strings.myRecipes.MAX_PICTURE_SIZE)}
                buttonText={capitalizeFirst(strings.myRecipes.CHOOSE_PICTURE)}
                onChange={null}
                imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
                fileTypeError={capitalizeFirst(
                  strings.myRecipes.error.IMAGE_FORMAT
                )}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* {inputs.recipeImage && (
          <Row>
            <Col xs={9}>
              <Image
                src={inputs.recipeImage.image ? inputs.recipeImage.image : null}
                thumbnail
              />
            </Col>
            <Col xs={1} />
            <Col xs={1}>
              <FontAwesomeIcon
                className="myrecipes-form-trash"
                icon={faTrash}
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveImage();
                }}
              />
            </Col>
            <Col xs={1} />
          </Row>
        )}
        {error.imageError && (
          <Row>
            <Col xs={12}>
              <div className="myrecipes-form-video-error">
                {error.imageError ? error.imageError : null}
              </div>
            </Col>
          </Row>
        )} */}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicAddress">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.ADDRESS)}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className="myevents-form-text-family-message"
                  onChange={handleOnChange}
                  value={inputs.address || ""}
                  name="address"
                  type="text"
                  autoComplete="off"
                  placeholder={strings.myEvents.ADDRESS_PLACEHOLDER}
                />
                <div className="myevents-input-spinner">
                  {loadingAddresses ||
                    (loadingLocationDetails && (
                      <Spinner animation="border" size="sm" />
                    ))}
                </div>
              </InputGroup>
              {showSuggestions && <Suggestions />}
            </Form.Group>
          </Col>
        </Row>
        {selectedAddress.label && (
          <Row>
            <Col xs={12}>
              <Map />
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicDescription">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.DESCRIPTION)}
              </Form.Label>
              <Form.Control
                className="myevents-form-text-family-message"
                onChange={null}
                value={null}
                name="description"
                type="text"
                placeholder={strings.myEvents.DESCRIPTION_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicAvailablePlaces">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.AVAILABLE_PLACES)}
              </Form.Label>
              <Form.Control
                className="myevents-form-text-family-message"
                onChange={null}
                value={null}
                name="availablePlaces"
                type="text"
                maxLength="3"
                placeholder={strings.myEvents.AVAILABLE_PLACES_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicEventDate">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.EVENT_DATE)}
              </Form.Label>
              <Form.Control
                className="myevents-form-text-family-message"
                onChange={null}
                value={null}
                name="ingredients"
                type="text"
                placeholder={strings.myEvents.EVENT_DATE_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="myrecipes-form-buttons-box">
              {/* {!myRecipeToEdit.recipeTitle ? (
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
                  className="myrecipes-form-button-text"
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
              ) : (
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
                  className="myrecipes-form-button-text"
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
              )} */}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showNewEventForm(false));
                  dispatch(selectEventAddressClearState());
                  dispatch(getLocationDetailsClearState());
                  //dispatch(toEditMyRecipeClearState());
                }}
                className="myevents-form-button-cancel"
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

export default MyEventsForm;
