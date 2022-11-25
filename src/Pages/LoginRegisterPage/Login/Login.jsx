import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import "./Login.scss";
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  
  const {register, handleSubmit} = useForm();
  const {login, setLogin} = useContext(MyContext);
  const navigate = useNavigate();

    const onSubmit = (data) => {
      console.log(data)
      axios.post(process.env.REACT_APP_BACKEND + "users/login", data).then(
        res => {localStorage.setItem("token", res.data.token)
        console.log(res.data)
        setLogin(true);
        navigate("/home");
        }
      )
    }


  return (
    <div>
        <div className='textdiv'>
          <div className='divtitle'>
            <h2>Iniciar sesión ahora</h2>
            </div>
            <div className='linkbtn'>
              <a href="https://es-es.facebook.com/"> <button className='btnfg btnfg--fg'></button></a>
              <a href="https://www.google.es/"><button className='btnfg btnfg--go'></button></a>
            </div>
          <p className='sectext'>o utiliza tu correo electrónico</p>
        </div>
        <div className='centerlogin'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='formlogin'>
              <label className='label' htmlFor='email2'>Dirección de correo electrónico</label>
                <input className='logininput' type="email" id='email2' {...register("email", {required:true})}/>
              <label className='label' htmlFor='password2'>Contraseña</label>
                <input className='logininput' type="password" id='password2' {...register("password", {required:true})}/>
              <button className='loginbtn'>Inicia sesión</button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default LoginPage;
