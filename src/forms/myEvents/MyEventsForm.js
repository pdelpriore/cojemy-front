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
import DatePicker from "react-datepicker";
import moment from "moment";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { generateZoom } from "../../shared/generateZoom";
import { selectEventAddressClearState } from "../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getAddressClearState } from "../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { getLocationDetailsClearState } from "../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toEditMyRecipeClearState } from "../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import { useSelector, useDispatch } from "react-redux";
import ScrollArea from "react-scrollbar";
import "./myEventsForm.css";
import "react-datepicker/dist/react-datepicker.css";

const MyEventsForm = () => {
  registerLocale("fr", fr);
  const dispatch = useDispatch();
  const {
    inputs,
    showMap,
    showSuggestions,
    error,
    handleOnChange,
    handleDateTime,
    handleInitializeDate,
    handlePicture,
    handleRemoveImage,
  } = useMyEventsForm();
  const { loadingAddresses } = useSelector((state) => state.addressSuggestions);
  const { loadingLocationDetails } = useSelector(
    (state) => state.locationDetails
  );
  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
  );
  const { locationDetailsRetrieved } = useSelector(
    (state) => state.locationDetails
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
                onChange={handleOnChange}
                value={inputs.title || ""}
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
                onChange={(picture) => handlePicture(picture)}
                imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
                fileTypeError={capitalizeFirst(
                  strings.myRecipes.error.IMAGE_FORMAT
                )}
              />
            </Form.Group>
          </Col>
        </Row>
        {inputs.recipeImage && (
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
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicAddress">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.ADDRESS)}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className="myevents-form-text-family-message address"
                  onChange={handleOnChange}
                  value={inputs.address || ""}
                  name="address"
                  type="text"
                  autoComplete="off"
                  placeholder={strings.myEvents.ADDRESS_PLACEHOLDER}
                />
                <div className="myevents-input-spinner">
                  {(loadingAddresses || loadingLocationDetails) && (
                    <Spinner animation="border" size="sm" />
                  )}
                </div>
              </InputGroup>
              {showSuggestions && <Suggestions />}
            </Form.Group>
          </Col>
        </Row>
        {showMap && (
          <Row>
            <Col xs={12}>
              <Map
                latitude={
                  locationDetailsRetrieved.displayPosition &&
                  locationDetailsRetrieved.displayPosition.latitude
                    ? locationDetailsRetrieved.displayPosition.latitude
                    : 52.229676
                }
                longitude={
                  locationDetailsRetrieved.displayPosition &&
                  locationDetailsRetrieved.displayPosition.longitude
                    ? locationDetailsRetrieved.displayPosition.longitude
                    : 21.012229
                }
                zoom={generateZoom(selectedAddress)}
              />
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
                onChange={handleOnChange}
                value={inputs.description || ""}
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
                onChange={handleOnChange}
                value={inputs.availablePlaces || ""}
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
              <div className="myevents-datepicker-box">
                <Form.Label className="myevents-form-text-family">
                  {capitalizeFirst(strings.myEvents.EVENT_DATE)}
                </Form.Label>
                <div className="myevents-datepicker-icon-box">
                  <DatePicker
                    onFocus={handleInitializeDate}
                    minDate={new Date()}
                    minTime={
                      inputs.eventDate &&
                      moment(
                        new Date(inputs.eventDate).setHours(0, 0, 0, 0)
                      ).isSame(new Date().setHours(0, 0, 0, 0))
                        ? new Date().getTime()
                        : new Date().setHours(0, 0, 0, 1)
                    }
                    maxTime={new Date().setHours(23, 59, 59, 999)}
                    timeIntervals={5}
                    className="myevents-datepicker"
                    locale="fr"
                    showTimeSelect={true}
                    onChange={(dateTime) => handleDateTime(dateTime)}
                    selected={inputs.eventDate}
                    dateFormat="d MMMM yyyy, HH:mm"
                    onChangeRaw={(e) => e.preventDefault()}
                    withPortal={true}
                  />
                  <FontAwesomeIcon
                    className="myevents-datepicker-icon"
                    icon={faCalendarAlt}
                  />
                </div>
              </div>
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
                  dispatch(getAddressClearState());
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
