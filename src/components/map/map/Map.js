import React from "react";
import useMap from "../../../hooks/screen/myEvents/useMap";
import { useSelector } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../../strings/Strings";
import "./map.css";

const Map = ({ latitude, longitude, zoom }) => {
  const { showLoading, handleHideLoading } = useMap();
  const { userData } = useSelector((state) => state.login);
  return (
    <div className="map-iframe-main-area">
      <Row>
        <Col xs={12}>
          <div className="map-iframe-box">
            {showLoading && (
              <div className="map-iframe-spinner-box">
                <Row>
                  <Col xs={4} />
                  <Col xs={4}>
                    <Spinner animation="border" size="sm" />
                  </Col>
                  <Col xs={4} />
                </Row>
              </div>
            )}
            <iframe
              title="map"
              className={showLoading ? "map-iframe-hidden" : ""}
              style={{ height: "450px" }}
              src={
                strings.path.MAP_REQUEST +
                `/${latitude}/${longitude}/${zoom}/${userData._id}/${userData.email}`
              }
              scrolling="no"
              frameBorder="0"
              onLoad={handleHideLoading}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Map;
