import React from 'react'
import { ArrowButton } from '../../Components/ArrowButton/ArrowButton';
import './StartModal.scss';

export const StartModal = () => {
  return (
    <main>
      <div className='logo__container'>
        <img className='draw-logo' src='./Assets/Images/maleteo-logo.png' alt=''></img>
        <img className='b-paragraph__logo' src='./Assets/Images/Maleteo-paragraph-logo.png' alt=''></img>
      </div>
        <ArrowButton></ArrowButton>
    </main>
    
  )
}


export default StartModal;
