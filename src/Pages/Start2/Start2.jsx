import React from 'react'
import { Link } from 'react-router-dom';
import './Start2.scss';

const Start2 = () => {

  return (
    <main className='b-main__starts'>
      <div className='b-card__container'>
          <img className='b-hero__image' src='./Assets/Images/world-icon-start2.png' alt=''></img>
          <h3 className='b-starts__paragraph'>El mismo precio en cualquier parte</h3>
          <p >Dispondrás de un precio fijo estés donde estés sin umportar el tamaño o el peso</p>
          <button className='b-continue__button'>Continuar    👉🏽</button>
          <Link to={'/rates'} className="b-link-paragraph mt-2"><p>Consulta los precios</p></Link>
      </div>
    </main>
  )
}

export default Start2;
