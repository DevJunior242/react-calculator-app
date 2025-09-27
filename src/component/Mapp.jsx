import { NavigationControl, Marker } from "react-map-gl";
import Map from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";

function Mapp() {
  return (
    <div className="map">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14,
        }}
        style={{ width: "100%", height: "calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=VSKsLpNcEMLqwfZWq7Bh"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={16.62662018} latitude={49.2125578} anchor="bottom">
          <img
            src="https://png.pngtree.com/png-vector/20210216/ourmid/pngtree-location-icon-in-flat-style-png-image_2914820.jpg"
            style={{ width: "30px", height: "30px" }}
          />
        </Marker>
      </Map>
    </div>
  );
}

export default Mapp;
