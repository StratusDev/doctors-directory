import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = ({ doctors }) => {
  const center = doctors.length ? [doctors[0].lat, doctors[0].lng] : [40.7128, -74.0060];

  return (
    <MapContainer center={center} zoom={4} style={{ height: "400px", width: "100%", marginTop: "1rem" }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {doctors.map((doctor) => (
        <Marker key={doctor.id} position={[doctor.lat, doctor.lng]}>
          <Popup>
            <strong>{doctor.name}</strong><br />
            {doctor.specialty}<br />
            {doctor.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
