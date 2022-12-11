import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { contextMap } from '../../../../Context/MapProvider';
import { MapContext } from '../../SearchPage';

import "./GuardianDetails.scss"

const GuardianDetails = () => {

  const { guardians, setGuardians, ubications, setUbications, search, setSearch, selected, setSelected } = useContext(MapContext);
  // console.log(guardians)
  const [ selectedUser, setSelectedUser ] = useState([]);
  const [ toggle, setToggle ] = useState(false);

  const {map, setMap} = useContext(contextMap);
  

  useEffect (() => {

      const getData = async () => {
        const filterUser = await guardians.filter(guardian => 
        guardian._id === selected.guardianID);

        setSelectedUser(filterUser);
        // console.log(selectedUser);
      };
      getData();
      setMap(selected)

  }, [selected]);
  console.log(selected);

  const toggleDetails = () => {
    setToggle(!toggle);
  }

  let placeholderImage = "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg";

  return (
    <div className={`ubication-details ${toggle ? 'ubication-details-active': 'ubication-details'}`}>
      <button className='btn-toggle' onClick={toggleDetails}>
        &#8645;
      </button>
      <div className='ubication-details-panel'>
        {
          selectedUser.map((data) => {
            {/* console.log(data) */}

            let { "0": ubicationDetails } = data.ubicationsID
            {/* console.log(ubicationDetails) */}

            return (
              <div className='details'>
                <div>
                  <img className="details-img" src={ubicationDetails.image ? ubicationDetails.image[0] : placeholderImage} alt=""/>
                </div>
                <div>
                  <ul className='details-user'>
                    <li className='details-user-house-name'>{ubicationDetails.name}</li>
                    <li className='details-user-guardian-name'>{data.userID.name + " " + data.userID.surname}</li>
                    <li className='details-user-guardian-description'>{ubicationDetails.description}</li>
                    <li className='details-user-guardian-email'>{data.userID.email}</li>
                  </ul>
                <Link to={'/home/reserve'}><button className='btn-reserve-now'>Reservar Ahora</button></Link>

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
