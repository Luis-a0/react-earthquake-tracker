import React, { useState, useEffect } from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function Mapa({ selectedTimeSpan, selectedMagnitude }) {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_${selectedTimeSpan}.geojson`);
        const data = await response.json();
        setEarthquakes(data.features);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching earthquake data:', error);
      }
    };

    fetchData();
  }, [selectedTimeSpan]);

  const filteredEarthquakes = earthquakes.filter(earthquake => {
    return selectedMagnitude ? earthquake.properties.mag >= parseFloat(selectedMagnitude) : true;
  });

  const personalIcon = new Icon({
    iconUrl: require('../img/point.png'),
    iconSize: [38, 38]
  });

  return (
    <div>
      {loading ? (
        <p>Cargando terremotos...</p>
      ) : (
        <MapContainer center={[48.66, 2.29]} zoom={3}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MarkerClusterGroup>
            {filteredEarthquakes.map(earthquake => (
              <Marker
                key={earthquake.id}
                position={[
                  earthquake.geometry.coordinates[1],
                  earthquake.geometry.coordinates[0]
                ]}
                icon={personalIcon}
              >
                <Popup>
                  Fecha: {new Date(earthquake.properties.time).toLocaleString()} <br />
                  Lugar: {earthquake.properties.place} <br />
                  Magnitud: {earthquake.properties.mag}
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </div>
  );
}

export default Mapa;
