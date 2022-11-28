import React from 'react'
import './ChatPage.scss'

const ChatPage = () => {
  return (
    <div className='container mt-5'>
      <h1>Petición de reserva</h1>

      <ul className='p-0 mt-3'>
        <li className='d-flex flex-row justify-content-between align-items-center li-chat'>
        <div className='info-chat d-flex flex-row justify-content-center align-items-center'>
              <img className='img-chat me-3' src='/fenix@3x.png' alt='' />
              <div className='d-flex flex-column'>
              <h3>Nombre</h3>
              <p>depósito</p>
              <p>recogida</p>
          </div>
          </div>
          <div className='d-flex flex-column'>
            <button className='btn btn-primary'>Aceptar</button>
            <button className='btn'>Declinar</button>
          </div>
        </li>


      </ul>
    </div>
  )
}

export default ChatPage
