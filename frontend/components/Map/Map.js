import {
  GoogleMap,
  MarkerF,
  useLoadScript
} from "@react-google-maps/api";
import styles from "./Map.module.scss"

const Map = (props) => {
  const { lat, lng } = props
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading....</div>;

  const center = { lat: lat, lng: lng };

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80%", height: "100%", margin: "auto" }}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;