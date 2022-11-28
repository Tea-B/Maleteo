import React, { useContext, useEffect, useState } from 'react'
import "./Maps.scss"

import { MapContext } from '../SearchPage';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

import GuardianDetails from './GuardianDetails/GuardianDetails';

const Maps = () => {

    const { guardians, setGuardians, ubications, setUbications, search, setSearch, selected, setSelected } = useContext(MapContext);

    const blueIcon = L.icon({
        iconUrl: '../../../../assets/images/blue-icon.png',
        iconSize: [32,32],
        popupAnchor: [0, -15],
    });

    const redIcon = L.icon({
        iconUrl: '../../../../assets/images/red-icon.png',
        iconSize: [32,32],
        popupAnchor: [0, -15],
    });

    const yellowIcon = L.icon({
        iconUrl: '../../../../assets/images/yellow-icon.png',
        iconSize: [32,32],
        popupAnchor: [0, -15],
    });

    const greenIcon = L.icon({
        iconUrl: '../../../../assets/images/green-icon.png',
        iconSize: [32,32],
        popupAnchor: [0, -15],
    });

    const purpleIcon = L.icon({
        iconUrl: '../../../../assets/images/purple-icon.png',
        iconSize: [32,32],
        popupAnchor: [0, -15],
    });

    const icons = [blueIcon, redIcon, yellowIcon, greenIcon, purpleIcon];

    return (
        <>
            <div className='map-container'>
                <MapContainer className='map' center={[40.416761, -3.703691]} zoom={13} zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        search.map((ubication) => {
                            return (
                                <Marker position={[ubication.latitude, ubication.longitude]} icon={redIcon}
                                eventHandlers={{
                                    click: (e) => {
                                        console.log('marker clicked', e)
                                        setSelected(ubication)
                                        console.log(ubication)
                                    },
                                }}>
                                    <Popup>
                                        {ubication.name}
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                </MapContainer>
            </div>
            <GuardianDetails></GuardianDetails>
        </>
    )
}

export default Maps
