import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { contextBaggage } from '../../Context/BaggageProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import './ReservePage.scss';

const ReservePage = () => {

    const {dateIn} = useContext(contextDateIn)
    const {dateOut} = useContext(contextDateOut)
    const {baggage} = useContext(contextBaggage)
    console.log(dateIn)

  return (
    <div className='container d-flex flex-column'>
        <h1>Detalles de tu reserva</h1>

        <div className='details-reserve d-flex flex-row justify-content-around mt-5'>
            <div className='reserve-box'>
                <h5>Llegada</h5>
                <p>{dateIn.$D} / {dateIn.$M}</p>
            </div>

            <div className='reserve-box'>
                <h5>Recogida</h5>
                <p>{dateOut.$D} / {dateOut.$M}</p>
            </div>

            <div className='reserve-box'>
                <h5>Equipajes</h5>
                <p>{baggage} Equipajes</p>
            </div>
        </div>

        <div className='price-reserve mt-5'>

            <ul className='p-0 d-flex flex-column gap-4 '>
                <li className='d-flex justify-content-between'><p className='price-text'>Primeras 24 horas 6,00 x 2 equipajes</p><span>10€</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Gastos de gestión</p><span>2€</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Servicio asegurado hasta 1000€</p><span>Gratis</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Total</p><span>12€</span></li>
            </ul>

        </div>

        <button className='btn-reserve'>Reservar</button>
        <Link to={'/home'}><button className='btn btn-secondary'>back home (provisional)</button></Link>
    </div>
  )
}

export default ReservePage