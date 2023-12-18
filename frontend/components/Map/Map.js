import {
  GoogleMap,
  MarkerF,
  useLoadScript
} from "@react-google-maps/api";

const Map = (props) => {
  const {lat, lng} = props
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyCcPXGrWpPD7pzsiSkT_-1JZpMoGLohzEc",
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: lat, lng: lng };
  console.log(props)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >

      {/* map component  */}
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
      >
        <MarkerF position={center}/>
      </GoogleMap>
    </div>
  );
};

export default Map;