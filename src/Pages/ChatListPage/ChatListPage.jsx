import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import './ChatListPage.scss'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../utils/getCookie';
import { contextReserve } from '../../Context/ReserveProvider'


const ChatListPage = () => {
    const navigate = useNavigate()
    const [reserves, setReserves] = useState([])
    const stringUser = getCookie('user');
    const user = JSON.parse(stringUser ? stringUser : '{}');

    const {setReserve} = useContext(contextReserve)
    

    // console.log(user)
    // const {reserveID} = useParams()

    useEffect(() => {
        const getData = async () => {
        const {data} = await axios.get(`http://localhost:3030/users/get/${user._id}`)
            setReserves(data)
           console.log(data) 
        }
        getData()
        
    },[user._id])

    const handleClick = (e) => {
        
        setReserve(e)
        navigate(`/chat/${e._id}`);
        // console.log(e)
    }
    
    
  return (
    <>

        <div className="container">
        <h1 >Lista de Guardianes</h1>
        <ul className='p-0 chatList'>
        {reserves.reservations && reserves.reservations.map(reserve => <li onClick={()=>handleClick(reserve)} className='reserve d-flex align-items-center gap-3' key={reserve._id}>
        <img className='reserve-img' src={reserve.guardianID.userID.image?reserve.guardianID.userID.image:"https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/default.jpg?crop=1299,731,x0,y0&width=1900&height=1069&optimize=low"} alt=""/>
        <div>
        <h3>{reserve.guardianID.userID.name}</h3>
        <p>{reserve.isConfirmed?"Confirmado":"Pendiente"}</p>
        <p>{reserve.inDate}</p></div></li>)}

        </ul>
        </div>

        <Footer></Footer>
    </>
    
  )
}

export default ChatListPage