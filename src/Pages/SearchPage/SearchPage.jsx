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

      const getData = async ()=> {
          const { data } = await axios.get("http://localhost:3030/guardians/getall");

          console.log(data);
          setGuardians(data);

          let mappedUbications = guardiansMap(guardians);
          console.log(mappedUbications);
          setUbications(mappedUbications);
          setSearch(ubications);
          
          if (selected == null || undefined) {
            setSelected(ubications[0]);
          }

          console.log(selected);
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

  return (
    <>
    <MapContext.Provider value={{guardians, setGuardians, ubications, setUbications, search, setSearch, selected, setSelected}}>

      <Header></Header>

      <SearchBar setSearch={searchUbications}></SearchBar>

      <Maps></Maps>
      
      <Footer></Footer>
    </MapContext.Provider>
    </>
  )
}

export default SearchPage
