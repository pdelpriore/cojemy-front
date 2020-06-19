import React from "react";
import { strings } from "../../../strings/Strings";

const Map = ({ latitude, longitude, zoom }) => {
  return (
    <iframe
      src={strings.path.MAP_REQUEST + `/${latitude}/${longitude}/${zoom}/`}
      style={{ height: "450px" }}
      scrolling="no"
      frameBorder="0"
    />
  );
};

export default Map;
