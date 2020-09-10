import React from "react";
import { Form, Row, Col, Button, Image, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import ImageUploader from "react-images-upload";
import useMyEventsForm from "../../hooks/form/myEvents/useMyEventsForm";
import Suggestions from "../../components/map/suggestions/Suggestions";
import Map from "../../components/map/map/Map";
import moment from "moment";
import { generateZoom } from "../../shared/generateZoom";
import { selectEventAddressClearState } from "../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getAddressClearState } from "../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { getLocationDetailsClearState } from "../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toEditEventClearState } from "../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import { selectEventDateClearState } from "../../redux/myEvents/selectEventDate/thunk/selectEventDateThunk";
import { showEmojis } from "../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import { useSelector, useDispatch } from "react-redux";
import ScrollArea from "react-scrollbar";
import "./myEventsForm.css";
import "../../shared/global.css";

const MyEventsForm = () => {
  const dispatch = useDispatch();

  const {
    inputs,
    addressObj,
    showMap,
    showSuggestions,
    error,
    loadingImage,
    inputHasFocus,
    handleOnChange,
    handleShowCalendar,
    handlePicture,
    handleRemoveImage,
    handleSubmit,
    handleFocus,
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
  const { loadingEventUpdating } = useSelector((state) => state.isEventChanged);
  const { eventToEdit } = useSelector((state) => state.toEditEvent);
  const { eventDate } = useSelector((state) => state.eventDateSelected);

  return (
    <ScrollArea
      className="myevents-form-scroll-area"
      smoothScrolling={true}
      horizontal={false}
    >
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.TITLE)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleOnChange}
                onFocus={handleFocus}
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
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.PHOTO)}
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
              <div className="myevents-form-loading-items">
                <Spinner animation="border" size="sm" />
                <div className="myevents-form-loadingimage-text">
                  {capitalizeFirst(strings.myRecipes.LOADING_IMAGE)}
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          inputs.eventImage && (
            <Row>
              <Col xs={9}>
                <Image
                  src={inputs.eventImage.image ? inputs.eventImage.image : null}
                  thumbnail
                />
              </Col>
              <Col xs={1} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className="myevents-form-trash"
                  icon={faTrash}
                  onClick={handleRemoveImage}
                />
              </Col>
              <Col xs={1} />
            </Row>
          )
        )}
        {error.imageError && (
          <Row>
            <Col xs={12}>
              <div className="myevents-form-image-error">
                {error.imageError ? error.imageError : null}
              </div>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicAddress">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.ADDRESS)}
              </Form.Label>
              <div className="myevents-icon-address-box">
                <Form.Control
                  className="global-form-control"
                  onChange={handleOnChange}
                  onFocus={handleFocus}
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
              </div>
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
                    : addressObj.latitude
                    ? addressObj.latitude
                    : 52.229676
                }
                longitude={
                  locationDetailsRetrieved.displayPosition &&
                  locationDetailsRetrieved.displayPosition.longitude
                    ? locationDetailsRetrieved.displayPosition.longitude
                    : addressObj.longitude
                    ? addressObj.longitude
                    : 21.012229
                }
                zoom={
                  addressObj.zoom
                    ? addressObj.zoom
                    : generateZoom(selectedAddress)
                }
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicDescription">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.DESCRIPTION)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleOnChange}
                value={inputs.description || ""}
                onFocus={handleFocus}
                as="textarea"
                rows="4"
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
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.AVAILABLE_PLACES)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleOnChange}
                onFocus={handleFocus}
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
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.EVENT_DATE)}
              </Form.Label>
              <div className="myevents-datepicker-icon-box">
                <Form.Control
                  className="global-form-control"
                  onChange={() => {}}
                  value={
                    eventDate
                      ? moment(eventDate).format("DD/MM/YYYY, HH:mm")
                      : ""
                  }
                  onClick={handleShowCalendar}
                  onFocus={handleFocus}
                  type="text"
                  placeholder={strings.myEvents.DATE_PLACEHOLDER}
                  autoComplete="off"
                />
                <div className="myevents-datepicker-icon-wrapper">
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
            <Form.Group controlId="formBasicContactTel">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.TEL)}
              </Form.Label>
              <Form.Control
                className="global-form-control"
                onChange={handleOnChange}
                onFocus={handleFocus}
                value={inputs.tel || ""}
                name="tel"
                type="text"
                maxLength="9"
                placeholder={strings.myEvents.TEL_PLACEHOLDER}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="myevents-form-button-box">
              {!eventToEdit.eventData ? (
                <Button
                  disabled={
                    loadingEventUpdating ||
                    inputs.title === undefined ||
                    inputs.title === "" ||
                    error.imageError ||
                    !addressObj.country ||
                    inputs.description === undefined ||
                    inputs.description === "" ||
                    inputs.availablePlaces === undefined ||
                    inputs.availablePlaces === "" ||
                    !eventDate ||
                    eventDate === "" ||
                    inputs.tel === "" ||
                    inputs.tel === undefined
                  }
                  type="submit"
                  className="global-button-label"
                  variant="outline-dark"
                >
                  <div className="myevents-form-spinner">
                    {loadingEventUpdating && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {loadingEventUpdating ? (
                    <div className="myevents-form-button-loading">
                      {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
                    </div>
                  ) : (
                    <div>{capitalizeFirst(strings.contact.BUTTON_TEXT)}</div>
                  )}
                </Button>
              ) : (
                <Button
                  disabled={
                    loadingEventUpdating ||
                    inputs.title === undefined ||
                    inputs.title === "" ||
                    error.imageError ||
                    !addressObj.country ||
                    inputs.description === undefined ||
                    inputs.description === "" ||
                    inputs.availablePlaces === undefined ||
                    inputs.availablePlaces === "" ||
                    !eventDate ||
                    eventDate === "" ||
                    inputs.tel === "" ||
                    inputs.tel === undefined
                  }
                  type="submit"
                  className="global-button-label"
                  variant="outline-dark"
                >
                  <div className="myevents-form-spinner">
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
                    <div className="myevents-form-button-loading">
                      {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
                    </div>
                  ) : (
                    <div>
                      {capitalizeFirst(strings.rating.BUTTON_EDIT_TEXT)}
                    </div>
                  )}
                </Button>
              )}
              <Button
                disabled={
                  inputHasFocus !== "title" && inputHasFocus !== "description"
                }
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showEmojis(true));
                }}
                size="sm"
                variant="dark"
              >
                <div className="global-emoji-button">
                  {strings.emojis.EMOJIS}
                </div>
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showNewEventForm(false));
                  dispatch(getAddressClearState());
                  dispatch(selectEventAddressClearState());
                  dispatch(getLocationDetailsClearState());
                  dispatch(toEditEventClearState());
                  dispatch(selectEventDateClearState());
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

export default MyEventsForm;
