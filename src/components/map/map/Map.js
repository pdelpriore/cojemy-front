import * as React from "react";
import { useSelector } from "react-redux";
import { hereAPIKey } from "../../../config/Security";

const Map = () => {
  const mapRef = React.useRef(null);

  const { locationDetailsRetrieved } = useSelector(
    (state) => state.locationDetails
  );

  React.useLayoutEffect(() => {
    if (!mapRef.current) return;

    const H = window.H;
    const platform = new H.service.Platform({
      apikey: `${hereAPIKey}`,
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: {
        lat: locationDetailsRetrieved.displayPosition.latitude,
        lng: locationDetailsRetrieved.displayPosition.longitude,
      },
      zoom: 17,
      pixelRatio: window.devicePixelRatio || 1,
    });
    hMap.addObject(
      new H.map.Marker({
        lat: locationDetailsRetrieved.displayPosition.latitude,
        lng: locationDetailsRetrieved.displayPosition.longitude,
      })
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    return () => {
      hMap.dispose();
    };
  });
  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
