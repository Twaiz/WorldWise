import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import styles from "./Map.module.css";

function Map() {
  const [mapPosition, setMapPosition] = useState([50.27, 30.31]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            Может я пидорас возможно <br /> но это был лишь раз.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
