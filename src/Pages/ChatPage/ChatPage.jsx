import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './ChatPage.scss'

const ChatPage = () => {

  
  return (
    <>
   
    <div className='container'>

    <h1 className='mt-5'>Mensajes</h1>
       <h1 className='thanks'>¡Estamos trabajando para que puedas chatear con tus Guardianes! :)</h1>
       {/* <h2></h2> */}
      {/* <ul className='p-0 mt-4'>

        <li className='d-flex flex-row align-items-center li-chat'>
          <div> <img className='img-chat me-3' src='/fenix@3x.png' alt='' /></div>
             
            <div className='d-flex flex-column'>

              <div className='d-flex align-items-center gap-2'>
                <h3>Nombre</h3>
                <span>Confirmada</span>
              </div>
              
              <p className='m-0'>fecha de entrada</p>
              <p className='m-0' >mensaje..</p>
          </div>
        </li>


      </ul> */}
      </div>
    <Footer></Footer>
    </>
  )
}

export default ChatPage
