import React from 'react';
import { Link } from 'react-router-dom';
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div>
      <div>
        <div className='prof'>
          <h1>dfagad</h1>
          <p className='subtitle'>Puedes ver y editar tu perfil</p>
        </div>
        <div className='photo'>
          <img src='' alt=''></img>
        </div>
      </div>
      <div className='div-text'>
        <Link to="/editguardian" className='links'><h3 className='title'>Conviértete en guardián</h3></Link> 
        <p className='paraph'>Puedes ganar 400€ de media al mes</p>
        <h3 className='title'>Invita a tus amigos</h3>
        <p className='paraph'>Y podras ganar descuentos para ti</p>
        <h3 className='title title-2'>Créditos y descuentos</h3>
        <h3 className='title title-2'>Publica tu anuncio o experiencia</h3>
        <h3 className='title title-2'>Configuración</h3>
        <h3 className='title title-2'>Ayuda</h3>
      </div>
    </div>
  )
}

export default ProfilePage
