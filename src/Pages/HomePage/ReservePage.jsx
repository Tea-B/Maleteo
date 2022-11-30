import React, { useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { contextBaggage } from '../../Context/BaggageProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import './ReservePage.scss';


const ReservePage = () => {

     const navigate = useNavigate()


    const {dateIn} = useContext(contextDateIn)
    const {dateOut} = useContext(contextDateOut)
    const {baggage} = useContext(contextBaggage)
    
    
    
    const opciones = { month: 'short', day: 'numeric' }


    const difference = Math.abs(new Date(dateOut) - new Date(dateIn))

    const days = Math.floor(difference/(1000 * 3600 * 24));
    console.log(days)
    const price = Math.floor(6 * baggage * days)    
    console.log(price)


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

    const correctPriceTotal = () => {
        if (days <= 1){
            return (
                <span className='reserve-details'>{(baggage * 6) + 2}€</span>
            )
        } else {
            return (
                <span className='reserve-details'>{(baggage * 6) + ((baggage * 4) * days ) + 2}€</span>
            )
        }
    }
    
    const dateCorrect = () => {
        if (dateIn !=='0');
        if (dateOut !=='0');
        if (baggage !=='0'){
            return (
                <button onClick={() => navigate('/home/reserve/thanks')} className='btn-reserve'>Reservar</button>
            )
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
                <li className='d-flex justify-content-between mt-4'><p className='price-text'>Total</p>{correctPriceTotal()}</li>
            </ul>

        </div>
        {dateCorrect()}
    </div>
    <Footer></Footer>
    </>
  )
}

export default ReservePage