import * as React from "react";
import { hereAPIKey } from "../../../config/Security";

const Map = ({ latitude, longitude, zoom }) => {
  const mapRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (!mapRef.current) return;

    const H = window.H;
    const platform = new H.service.Platform({
      apikey: `${hereAPIKey}`,
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom: zoom,
      pixelRatio: window.devicePixelRatio || 1,
    });
    hMap.addObject(
      new H.map.Marker({
        lat: latitude,
        lng: longitude,
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
