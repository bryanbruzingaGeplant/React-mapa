import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function App() {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[51.505, -0.09]}
          icon={
            new Icon({
              iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
              iconUrl: require("leaflet/dist/images/marker-icon.png"),
              shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
            })
          }
        >
          <Popup>Olá, sou um popup.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
