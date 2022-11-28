import React from 'react'
import './StartPage.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StartModal from '../StartModal/StartModal';


export const StartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>setTimeout(()=>{
    setIsLoading(false);
  console.log("SetTimeout is active")}, 3000))  
  
  const navigate = useNavigate() 
  return (
    
   
    {isLoading} ? <StartModal/> : (<main className='b-main__starts'>
        <div className='b-card__container'>
            <img className='b-hero__image' src='./Assets/Images/start1-image.png' alt=''></img>
            <h3 className='b-starts__paragraph'>Preparáte para liberarte de tu equipaje</h3>
            <p >Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas</p>
              <button onClick={() => navigate('/secondstart')} className='b-continue__button'>Continuar  👉🏽</button>
        </div>
    </main>)
  )
}

