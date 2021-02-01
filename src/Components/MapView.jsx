import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { useState } from 'react';

const zoom = 12;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapView = ({ currentItem }) => {
  const coordinates = currentItem?.geometry?.coordinates;

  const [position, setPosition] = useState([59.938732, 30.316229]);

  useEffect(() => {
    if (coordinates) {
      setPosition(coordinates.reverse());
    }
  }, [coordinates, setPosition]);

  return (
    <MapContainer center={position} zoom={zoom}>
      <ChangeView center={position} zoom={zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapView;
