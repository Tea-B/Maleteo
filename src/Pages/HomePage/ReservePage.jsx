import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { contextBaggage } from '../../Context/BaggageProvider';
import { contextConfirmation } from '../../Context/ConfirmationProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import { contextMap } from '../../Context/MapProvider';
import { contextTimeIn } from '../../Context/TimeInProvider';
import { contextTimeOut } from '../../Context/TimeOutProvider';
import { getCookie } from '../../utils/getCookie';



import './ReservePage.scss';


const ReservePage = () => {

    const {confirmation, setConfirmation} = useContext(contextConfirmation)
    const {map, setMap} = useContext(contextMap)
    // console.log(map)

     const navigate = useNavigate()

    // const {selected, setSelected} = useContext(MapContext)
    // console.log(selected)

    const {dateIn} = useContext(contextDateIn)
    const {dateOut} = useContext(contextDateOut)
    const {baggage} = useContext(contextBaggage)
    const {timeIn} = useContext(contextTimeIn)
    const {timeOut} = useContext(contextTimeOut)

    const stringUser = getCookie('user');
    const user = JSON.parse(stringUser ? stringUser : '{}');
    // console.log(user);
    
    
    const opciones = { month: 'short', day: 'numeric' }


    const difference = Math.abs(new Date(dateOut) - new Date(dateIn))

    const days = Math.floor(difference/(1000 * 3600 * 24));
    const price = days<=1?baggage*6+2:(baggage*6)+(baggage*4)*days+2;

       
    // const [reserveID, setReserveID] = useState("reserveID")

    const data = {
        userID:user._id,
        guardianID:map.guardianID,
        ubicationID:map._id,
        inDate:dateIn,
        outDate:dateOut,
        baggageNumber:baggage,
        price: price,
        isConfirmed: true,

    }

   

    // console.log(data)


    const correctPrice = () => {
        if (days <= 1){
            return (
                <span className='reserve-details'>{(baggage * 6)}€</span>
            )
        } else {
            return (
                <span className='reserve-details'>{(baggage * 6) + ((baggage * 4) * days )}€</span>
            )
        }
    }
    
    const [dataUser, setDataUser] = useState()

    


    const postReservation = async () => {
        await axios.post(process.env.REACT_APP_BACKEND + "reservations/post", data)
        .then(res =>{
            console.log("Reserva añadida, con id: " + res.data._id)
            console.log(res.data)
            setConfirmation({
                reserveID: res.data._id,
                guardianID: res.data.guardianID,
                userID: user._id
            })
        })
            // navigate('/home/reserve/confirmation')
       }

       const getUser = async () => {
        // await axios.get(process.env.REACT_APP_BACKEND + `users/get/${user._id}`)
        // .then(res =>{
           
        //     const allReservations = [...res.data.reservations, confirmation.reserveID];
        //     // setConfirmation({})
        //     // console.log(allReservations)
        //     setConfirmation({
        //         ...confirmation, reservations: allReservations,
                
        //     });
        // })
        await axios.get(process.env.REACT_APP_BACKEND + `guardians/get/${confirmation.guardianID}`)
        .then(res =>{
            const userIDguardian = res.data.userID._id;
            console.log(userIDguardian); 
            setConfirmation({
                ...confirmation, guardianIDreal: userIDguardian
            })
            // console.log(res.data);
        })
    
      navigate('/home/reserve/confirmation')
    }  

    useEffect(() => {
        postReservation()
    },[])
   
   
    

    
    
    const dateCorrect = () => {
        if (dateIn !=='0');
        if (dateOut !=='0');
        if (baggage !=='0'){
            return (<>
                <button onClick={() => getUser()} className='btn-reserve'>Reservar</button>
                </>)
        } else 
            return(
            <Link to={'/home/datein'}><span className='atention'>¡Click aquí para completa todos los datos!</span></Link>
            )
        
    };
    
       

  return (
    <>
    <Header navigateTo={'/map'}></Header>
    <div className='reserve-page container d-flex flex-column mt-4'>
        <h1>Detalles de tu reserva</h1>

        <div className='details-reserve d-flex flex-row justify-content-start gap-5 mt-3'>
            <div className='reserve-box d-flex flex-column justify-content-start '>
                <h5>Llegada</h5>
                <p>{new Date(dateIn).toLocaleDateString('es-SP', opciones)}</p>
            </div>

            <div className='reserve-box'>
                <h5>Recogida</h5>
                <p>{new Date(dateOut).toLocaleDateString('es-SP', opciones)}</p>
            </div>

            <div className='reserve-box'>
                <h5>Equipajes</h5>
                <p>{baggage} Equipajes</p>
            </div>
        </div>

        <div className='price-reserve mt-5'>

            <ul className='p-0 d-flex flex-column gap-3 '>
                <li className='d-flex justify-content-between'><p className='price-text'>Primeras 24 horas 6€ x {baggage} equipajes</p>{correctPrice()}</li>
                <li className='d-flex justify-content-between'><p className='price-text'>Gastos de gestión</p><span className='reserve-details'>2€</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Servicio asegurado hasta 1000€</p><span className='reserve-details'>Gratis</span></li>
                <li className='d-flex justify-content-between mt-4'><p className='price-text'>Total</p>
                <span className='reserve-details'>{price}€</span></li>
            </ul>

        </div>
        {dateCorrect()}
        
    </div>
    <Footer></Footer>
    </>
  )
}

export default ReservePage