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

  }, [selected]);

  const toggleDetails = () => {
    setToggle(!toggle);
  }

  let placeholderImage = "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg";

  return (
    <div className={`ubication-details ${toggle ? 'ubication-details-active': 'ubication-details'}`}>
      <button onClick={toggleDetails}>
        &#8645;
      </button>
      <div className='ubication-details-panel'>
        {
          selectedUser.map((data) => {
            console.log(data)

            let { "0": ubicationDetails } = data.ubicationsID
            console.log(ubicationDetails)

            return (
              <div className='details'>
                <div>
                  <img className="details-img" src={ubicationDetails.image ? ubicationDetails.image[0] : placeholderImage} alt=""/>
                </div>
                <div>
                  <ul className='details-user'>
                    <li>Nombre casa: {ubicationDetails.name}</li>
                    <li>Descripcion: {ubicationDetails.description}</li>
                    <li>Nombre y Apellidos del guardian: {data.userID.name + " " + data.userID.surname}</li>
                    <li>Email de contacto: {data.userID.email}</li>
                  </ul>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GuardianDetails
