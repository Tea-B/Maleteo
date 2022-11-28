import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Start2.scss';



export const Start2 = () => {
  const navigate = useNavigate()
  
  return (
    <main className='b-main__starts'>
        <div className='b-card__container'>
            <img className='b-hero__image' src='./Assets/Images/world-icon-start2.png' alt=''></img>
            <h3 className='b-starts__title'>El mismo precio en cualquier parte</h3>
            <p className='b-starts__paragraph' >Dispondrás de un precio fijo estés donde estés sin umportar el tamaño o el peso</p>
            <button  className='b-continue__button'>Empezar Ya  👉🏽</button>
            <p onClick={() =>navigate('./Rates')} className='b-link-paragraph'>Consulta los precios</p>
        </div>
    </main>
  )
}


export default Start2;