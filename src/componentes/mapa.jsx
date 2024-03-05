import React from 'react';

import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function Mapa() {
    
    const marcas =[
        {
            geocode: [48.06, 2.22],
            popUp: "Hello 1"
        },
        {
            geocode: [47.06, 2.3522],
            popUp: "Hello 2"
        },
        {
            geocode: [48.55, 2.52],
            popUp: "Hello 3"
        },
    ];

    const personalIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776000.png",
        iconUrl: require('../img/point.png'),
        iconSize: [38, 38]
    });

    return(
        <div>
            <MapContainer center={[48.66, 2.29]} zoom={3}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup>
                    {marcas.map(marca =>(
                        <Marker position={marca.geocode} icon={personalIcon}>
                            <Popup> {marca.popUp} </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}

export default Mapa;