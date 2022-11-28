import React from 'react'

import { useNavigate} from 'react-router-dom'
import './ArrowButton.scss';
export const ArrowButton = () => {
    const navigate = useNavigate()
    
  return (
    <div className='b-arrow__container'>
        <button onClick={()=>navigate('/')}><img className='arrow-continue__button' src='/Assets/Images/continue-button.png' alt=''></img></button>
    </div>
  )
}
