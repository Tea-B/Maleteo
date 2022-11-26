import React, { useEffect, useState } from 'react'
import "./Maps.scss"

import axios from 'axios';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

import SearchBar from '../../../Components/SearchBar/SearchBar';

const Maps = () => {

    const [guardians, setGuardians] = useState([]);
    const [ubications, setUbications] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect (() => {

        const getData = async ()=> {
            const { data } = await axios.get("http://localhost:3030/guardians/getall");

            console.log(data);
            setGuardians(data);

            let mappedUbications = guardiansMap(guardians);
            console.log(mappedUbications);
            setUbications(mappedUbications);
            setSearch(ubications);
        };
    
        getData();

    }, []);

    let guardiansMap = (guardians) => {

        let mappedUbications = [];
    
        guardians.forEach((guardian) => {
            let { "_id": guardianID, "ubicationsID": ubications } = guardian;
            console.log(guardianID);
            console.log(ubications);
            ubications.forEach((ubication) => {
                let { _id, name, images, description, disponibility, latitude, longitude } = ubication;
                mappedUbications.push({guardianID, _id, name, images, description, disponibility, latitude, longitude});
            });
        })
    
        return mappedUbications;
    };

    const searchUbications = (value) => {
        if (value.length < 1) {
          return setSearch(ubications);
        }

        console.log(value);
        const filtered = search.filter((ubication) =>
          ubication.name.toLowerCase().includes(value.toLowerCase())
        );

        console.log(filtered);
        setSearch(filtered);
    };

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
            <SearchBar setSearch={searchUbications}></SearchBar>
            <div className='map-container'>
                <MapContainer className='map' center={[40.416761, -3.703691]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        search.map((ubication) => {
                            return (
                                <Marker position={[ubication.latitude, ubication.longitude]} icon={redIcon}>
                                    <Popup>
                                        {ubication.name}
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                </MapContainer>
            </div>
        </>
    )
}

export default Maps
