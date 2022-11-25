import React from 'react'
import './Start1.scss';
import { link as BrowserRouter, Link } from 'react-router-dom';

export const Start1 = () => {
  return (
    <main className='b-main__starts'>
        <div className='b-card__container'>
            <img className='b-hero__image' src='./Assets/Images/start1-image.png' alt=''></img>
            <h3 className='b-starts__paragraph'>Preparáte para liberarte de tu equipaje</h3>
            <p >Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas</p>
            <Link > <button className='b-continue__button'>Continuar  👉🏽</button></Link>
        </div>
    </main>
  )
}
