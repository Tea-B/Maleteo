import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { contextBaggage } from '../../Context/BaggageProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import './ReservePage.scss';

const ReservePage = () => {

    const {dateIn} = useContext(contextDateIn)
    const {dateOut} = useContext(contextDateOut)
    const {baggage} = useContext(contextBaggage)
    
    
    
    const opciones = { month: 'short', day: 'numeric' }
    // const price24 = 6 * baggage

    const difference = Math.abs(new Date(dateOut) - new Date(dateIn))

    const days = difference/(1000 * 3600 * 24);
    const price = (6 * baggage * days)    

    
       

  return (
    <>
    <div className='reserve-page container d-flex flex-column'>
        <h1>Detalles de tu reserva</h1>

        <div className='details-reserve d-flex flex-row justify-content-start gap-5 mt-5'>
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

            <ul className='p-0 d-flex flex-column gap-4 '>
                <li className='d-flex justify-content-between'><p className='price-text'>24 horas 6€ x {baggage} equipajes</p><span>{price}€</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Gastos de gestión</p><span>2€</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Servicio asegurado hasta 1000€</p><span>Gratis</span></li>
                <li className='d-flex justify-content-between'><p className='price-text'>Total</p><span>{price + 2 }€</span></li>
            </ul>

        </div>

        <button className='btn-reserve'>Reservar</button>
        <Link to={'/home'}><button className='btn btn-secondary'>back home (provisional)</button></Link>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ReservePage