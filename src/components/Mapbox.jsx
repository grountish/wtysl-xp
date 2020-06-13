import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';







export default function Mapbox() {
    const [viewport, setViewport] = useState({
        latitude:  41.3922500,
        longitude: 2.1648800,
        zoom: 12
    });
    return (
        <div>
                 <MapGL
                    style={{ width: '100%', height: '400px' }}
                    mapStyle='mapbox://styles/mapbox/dark-v9'
                    accessToken={"pk.eyJ1IjoibWlsZXRlYXMiLCJhIjoiY2tiOXprdXp4MDBuOTJ0cW0wMWV1NTF2dCJ9.8hdzsP8USeAxuaEWKSydqw"}
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    zoom={viewport.zoom}
                    onViewportChange={setViewport}
                />
                <button className="button"> Click to beggin !</button>
        </div>
    )
}
