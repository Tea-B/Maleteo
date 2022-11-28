import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/MyContext';
import { deleteCookie } from '../../utils/deleteCookie';
import { getCookie } from '../../utils/getCookie';
import "./ProfilePage.scss";

const ProfilePage = () => {
  const {login, setLogin} = useContext(MyContext);
  const stringUser = getCookie('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');

  const descLog = () => {
    deleteCookie("token");
    deleteCookie("user");
    setLogin(false);


  }

  return (
    <div>
      <div>
        <div className='prof'>
          <h1>{user.name}</h1>
          <p className='subtitle'>Puedes ver y editar tu perfil</p>
        </div>
        <div className='photo'>
          <img className='profimg' src={user.image} alt=''></img>
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
        <button className='nextbtn' onClick={() => descLog()}>Cerrar Sesión</button>
      </div>
    </div>
  )
}

export default ProfilePage
