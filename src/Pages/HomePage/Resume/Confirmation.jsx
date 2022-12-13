import './Confirmation.scss'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import Header from '../../../Components/Header/Header';
import { contextConfirmation } from '../../../Context/ConfirmationProvider'
import { getCookie } from '../../../utils/getCookie';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  
  const navigate = useNavigate()
  const stringUser = getCookie('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');

  const {confirmation, setConfirmation} = useContext(contextConfirmation)
  // console.log(confirmation)

  // const getUserGuardian = async () =>{
  //   await axios.get(process.env.REACT_APP_BACKEND + `users/get/${confirmation.userID}`)
  //   .then((res) =>{
  //     setConfirmation({
  //      ...confirmation, userReservations: res.data.reservations
  //     })
  //   })
  //   await axios.get(process.env.REACT_APP_BACKEND + `users/get/${confirmation.guardianIDreal}`)
  //   .then((res) =>{
  //     setConfirmation({
  //       ...confirmation, guardianReservations: res.data.reservations
  //     })
  //   })

  // }
  const [dataUsers, setDataUsers] = useState([])

  const getDataUsers = async () => {
    await axios.get(process.env.REACT_APP_BACKEND + 'users/getall')
    .then(res =>{
      setDataUsers(res.data)
    })
  }

  const myUser = dataUsers.filter((user) => user._id === confirmation.userID);
  console.log(myUser)

  const guardianUser = dataUsers.filter((user) => user._id === confirmation.guardianIDreal)
  console.log(guardianUser)
  

  const putUser = async () => {
    const reserves = [...myUser[0].reservations, confirmation.reserveID]
    const newUser = {
      reservations: reserves
    } 
    await axios.put(process.env.REACT_APP_BACKEND + `users/put/${user._id}`, newUser)
    .then((response) => {
        console.log(response.data)
    })

    const reservesG = [...guardianUser[0].reservations, confirmation.reserveID]
    const newUserG = {
      reservations: reservesG
    } 
    await axios.put(process.env.REACT_APP_BACKEND + `users/put/${confirmation.guardianIDreal}`,newUserG)
    .then((response) => {
        console.log(response.data)
    })
    
    
    navigate('/home/reserve/thanks')
}

useEffect(() => {

  getDataUsers();

  console.log(confirmation)
},[])

  return (<>
  <Header navigateTo={'/home/reserve'}></Header>
    <div className='container d-flex flex-column jusitfy-content-center align-items-center'>
    <h1>Confirmacion de reserva</h1>
  
      <h3 className='text-center mt-5'>¿Estás seguro que quieres hacer esta reserva?</h3>
  
      <button className='btn-reserve btn-later' onClick={()=>navigate('/home')}>Quizá más tarde</button>
    
      
    </div>
    <button className='btn-reserve' onClick={()=>putUser()}>Confirmar reserva</button>
    {/* <button className='btn' onClick={()=>console.log(confirmation)}>console log</button> */}
    </>)
}

export default Confirmation
