import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import "./Login.scss";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from 'react-google-login';

const LoginPage = () => {
  
  const {register, handleSubmit} = useForm();
  const {login, setLogin} = useContext(MyContext);
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = () => {
    console.log("CLICK");
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

    const onSubmit = (data) => {
      console.log(data)
      axios.post(process.env.REACT_APP_BACKEND + "users/login", data).then(
        res => {document.cookie = 'token=' + res.data.token;
        document.cookie = 'user=' +  JSON.stringify(res.data.user);
        console.log(res.data.token);
        setLogin(true);
        navigate("/home");
        }
      )
    }


  return (<>
        <div className='login-container'>
         <h2 className='text-center fs-3'>Iniciar sesión</h2>
          
            {/* <div className='linkbtn'> */}
              {/* <div> */}
                {/* <FacebookLogin 
                    appId="1088597931155576"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    textButton = "Facebook"
                    icon="fa-facebook"
                  /> */}
                {/* </div> */}
                {/* <div className='googlebtn'> */}
                  {/* <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    //buttonText="Google"
                    render={renderProps => (
                    <button className='googlebtn' onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  /> */}
                {/* </div> */}
            {/* </div> */}
          {/* <p className='sectext'>o utiliza tu correo electrónico</p> */}
          <form className='d-flex flex-column justify-content-center align-items-center gap-3 form-login' onSubmit={handleSubmit(onSubmit)}>
          {/* <div className='formlogin'> */}
              <label className='label' htmlFor='email2'>Dirección de correo electrónico
                <input className='logininput' type="email" id='email2' {...register("email", {required:true})}/>
                </label>
              <label className='label' htmlFor='password2'>Contraseña
                <input className='logininput' type="password" id='password2' {...register("password", {required:true})}/>
                </label>
              {/* </div> */}
              <button className='loginbtn'>Inicia sesión</button>
          </form>
        </div>
        </> )
}

export default LoginPage;
