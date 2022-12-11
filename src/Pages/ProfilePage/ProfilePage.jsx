import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { MyContext } from '../../Context/MyContext';
import { deleteCookie } from '../../utils/deleteCookie';
import { getCookie } from '../../utils/getCookie';
import "./ProfilePage.scss";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const {login, setLogin} = useContext(MyContext);
  const stringUser = getCookie('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');
  const navigate = useNavigate()
  console.log(user);

  const descLog = () => {
    deleteCookie("token");
    deleteCookie("user");
    setLogin(false);
    navigate('/connect')

  }


  return (<>
    <div className='container'>
      <div className='d-flex justify-content-between mt-5'>

        <div className='prof'>
          <h1>{user.name}</h1>
          <p className='subtitle'>Puedes ver y editar tu perfil</p>
        </div>

        <div className='photo'>
          <img className='profimg' src={user.image} alt=''></img>
        </div>

      </div>

      <div className='div-text mt-3'>
        <Link to="/editguardian" className='links'><h5 className='title'>Conviértete en guardián</h5></Link> 
        <p className='paraph'>Puedes ganar 400€ de media al mes</p>
        <h5 className='title'>Invita a tus amigos</h5>
        <p className='paraph'>Y podras ganar descuentos para ti</p>
        <h5 className='title title-2'>Créditos y descuentos</h5>
        <h5 className='title title-2'>Publica tu anuncio o experiencia</h5>
        <h5 className='title title-2'>Configuración</h5>
        <h5 className='title title-2'>Ayuda</h5>
        <button className='btn btn-outline-danger' onClick={() => descLog()}>Cerrar Sesión</button>
      </div>
    </div>
    
    <Footer></Footer>
    </>)
}

export default ProfilePage
