import React, { useContext, useEffect, useState } from 'react'
import { MapContext } from '../../SearchPage';

import "./GuardianDetails.scss"

const GuardianDetails = () => {

  const { guardians, setGuardians, ubications, setUbications, search, setSearch, selected, setSelected } = useContext(MapContext);

  const [ selectedUser, setSelectedUser ] = useState([]);
  const [ toggle, setToggle ] = useState(false);

  useEffect (() => {

      const getData = async () => {
        const filterUser = await guardians.filter(guardian => 
        guardian._id === selected.guardianID);

        setSelectedUser(filterUser);
        console.log(selectedUser);
      };
  
      getData();

  }, []);

  const toggleDetails = () => {
    setToggle(!toggle);
  }

  return (
    <div className={`ubication-details ${toggle ? 'ubication-details-active': null}`}>
      <button className={toggle ? 'button-active': null} onClick={toggleDetails}>
        &#8645;
      </button>
      <div className={toggle ? 'ubication-details-active': null}>

      </div>
    </div>
  )
}

export default GuardianDetails
