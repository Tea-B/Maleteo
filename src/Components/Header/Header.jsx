import React from 'react'
import './Header.scss';
import { BrowserRouter } from 'react-router-dom';


export const Header = () => {
  return (
    <div className='back-header__contain'>
        <img className='b-back__icon' src='Assets/Images/back-icon.png' alt=''></img>
    </div>
  )
}
