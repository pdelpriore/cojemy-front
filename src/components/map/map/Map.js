import React from "react";
import useMap from "../../../hooks/screen/myEvents/useMap";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../../strings/Strings";
import "./map.css";

const Map = ({ latitude, longitude, zoom }) => {
  const { showLoading, handleHideLoading } = useMap();
  return (
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
              strings.path.MAP_REQUEST + `/${latitude}/${longitude}/${zoom}/`
            }
            scrolling="no"
            frameBorder="0"
            onLoad={handleHideLoading}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Map;
