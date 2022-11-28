import React, { useEffect, useState } from 'react'
import Maps from './Maps/Maps';

import axios from 'axios';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SearchBar from '../../Components/SearchBar/SearchBar';

export const MapContext = React.createContext();

const SearchPage = () => {

  const [guardians, setGuardians] = useState([]);
  const [ubications, setUbications] = useState([]);
  const [search, setSearch] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect (() => {

      const getData = async () => {
          const { data } = await axios.get("http://localhost:3030/guardians/getall");

          console.log(data);
          setGuardians(data);

          let mappedUbications = guardiansMap(data);
          console.log(mappedUbications);
          setUbications(mappedUbications);
          setSearch(mappedUbications);
          setSelected(mappedUbications[0]);
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
              // let dataRoad = getRoad(latitude, longitude);
              mappedUbications.push({guardianID, _id, name, images, description, disponibility, latitude, longitude});
          });
      })
  
      return mappedUbications;
  };

  // let getRoad = async (latitude, longitude) => {
  //   const { data } = await axios.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+latitude+'&lon='+longitude)
  //   console.log(data);
  //   return data.address;
  // }

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

  return (
    <>
    <MapContext.Provider value={{guardians, setGuardians, ubications, setUbications, search, setSearch, selected, setSelected}}>

      <Header></Header>

      <SearchBar setSearch={searchUbications}></SearchBar>

      {search.length === 0 && <Maps></Maps>}
      {search.length > 0 && <Maps></Maps>}
      
      
      <Footer></Footer>
    </MapContext.Provider>
    </>
  )
}

export default SearchPage
