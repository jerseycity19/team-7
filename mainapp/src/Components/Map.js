import React, { Component } from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
  } from "react-simple-maps"
import {geoAlbersUsa} from "d3-geo";

const Map = () => {
     
    return (
        <div className="map-container">
            <ComposableMap
                projection={geoAlbersUsa}
                projectionConfig={{ scale: 1000 }}
                width={980}
                height={551}
                style={{
                    width: "100%",
                    height: "auto",
                }}
                >
                    <ZoomableGroup center={[ -97, 40 ]} disablePanning>
                    <Geographies  geography='/gadm36_USA.json'>  
                        {(geographies, projection) =>                 
                            geographies.map((geography, i) =>
                            <Geography
                            key={i}
                            geography={geography}
                            projection={projection}
                            style={{
                                default: {
                                    fill: "#ECEFF1",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.75,
                                    outline: "none",
                                },
                                hover: {
                                    fill: "#CFD8DC",
                                    stroke: "#607D8B",
                                    strokeWidth: 1,
                                    outline: "none",
                                },
                                pressed: {
                                    fill: "#FF5722",
                                    stroke: "#607D8B",
                                    strokeWidth: 1,
                                    outline: "none",
                                }
                            }}
                            />
                        )
                        }
                        </ Geographies>
                        <Markers>
                        <Marker
                            marker={{coordinates: [-153.2917758, 67.75961636]}}
                            style={{
                                default: { fill: "#FF5722" },
                                hover: { fill: "#FFFFFF" },
                                pressed: { fill: "#FF5722" },
                            }}
                            >
                            <circle
                                cx={0}
                                cy={0}
                                r={5}
                                style={{
                                    stroke: "#FF5722",
                                    strokeWidth: 3,
                                    opacity: 0.9,
                                }}
                            />
                            </Marker>
                    </Markers>
                    </ ZoomableGroup>
            </ ComposableMap>
        </div>
    )
}

export default Map;