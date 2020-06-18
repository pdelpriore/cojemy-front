import * as React from "react";
import { useSelector } from "react-redux";
import { hereAPIKey } from "../../../config/Security";

const Map = ({ latitude, longitude }) => {
  const mapRef = React.useRef(null);

  const { selectedAddress } = useSelector(
    (state) => state.selectedEventAddress
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
        lat: latitude,
        lng: longitude,
      },
      zoom:
        selectedAddress.address &&
        selectedAddress.address.houseNumber &&
        selectedAddress.address.street &&
        selectedAddress.address.city &&
        selectedAddress.address.country
          ? 17
          : selectedAddress.address &&
            !selectedAddress.address.houseNumber &&
            selectedAddress.address.street &&
            selectedAddress.address.city &&
            selectedAddress.address.country
          ? 15
          : selectedAddress.address &&
            !selectedAddress.address.houseNumber &&
            !selectedAddress.address.street &&
            selectedAddress.address.city &&
            selectedAddress.address.country
          ? 10
          : selectedAddress.address &&
            !selectedAddress.address.houseNumber &&
            !selectedAddress.address.street &&
            !selectedAddress.address.city &&
            selectedAddress.address.country
          ? 4
          : 4,
      pixelRatio: window.devicePixelRatio || 1,
    });
    hMap.addObject(
      new H.map.Marker({
        lat:
          locationDetailsRetrieved.displayPosition &&
          locationDetailsRetrieved.displayPosition.latitude
            ? locationDetailsRetrieved.displayPosition.latitude
            : 52.229676,
        lng:
          locationDetailsRetrieved.displayPosition &&
          locationDetailsRetrieved.displayPosition.longitude
            ? locationDetailsRetrieved.displayPosition.longitude
            : 21.012229,
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
