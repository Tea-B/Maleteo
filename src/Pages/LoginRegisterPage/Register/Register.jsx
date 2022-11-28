import axios from "axios";
import {useForm} from "react-hook-form";
import "./Register.scss";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import { Navigate } from "react-router-dom";


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    
    const responseFacebook = (response) => {
        console.log(response);
      }
    
      const componentClicked = () => {
        console.log("CLICK");
      }

    const responseGoogle = (response) => {
          console.log(response);
      }

    const onSubmit = (data) =>{
        console.log(data);
        const born = new Date(data.birthdate);
        //console.log(born.getFullYear());
        const now = new Date();
        //console.log(now.getFullYear());
        let age = now.getFullYear() - born.getFullYear();
        if(age >= 18){
            axios.post(process.env.REACT_APP_BACKEND + "users/register", data).then(res => {
                console.log("Usuario creado");
                Navigate("/home");
            })
        } else {
            console.log("Edad incorrecta, debes ser mayor de edad");
        }
    
    }

    return(
        <div>
            <div className="textdiv">
                <div className="divtitle2">
                    <h2>Únete a Maleteo y disfruta de sus ventajas</h2>
                </div>
                <div className="linkbtn">
                    <div>
                        <FacebookLogin 
                            appId="1088597931155576"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                            textButton = "Facebook"
                            icon="fa-facebook"
                        />
                    </div>
                    <div className='googlebtn'>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            //buttonText="Google"
                            render={renderProps => (
                            <button className='googlebtn' onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
                <p className="sectext">o utiliza tu correo electrónico</p>
                </div>
                <div className="center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <label className='label' htmlFor="email">Dirección de correo electrónico</label>
                            <input className='logininput' id="email" type="email" {...register("email", {required:true})}/>
                        <label className='label' htmlFor="name">Nombre</label>
                            <input className='logininput' id="name" type="text" {...register("name",{required:true})}/>
                        <label className='label' htmlFor="surname">Apellido</label>
                            <input className='logininput' id="surname" type="text" {...register("surname",{required:true})}/>
                        <label className='label' htmlFor="password">Contraseña</label>
                            <input className='logininput' id="password" type="password" {...register("password",{required:true})}/>
                        <label className='label' htmlFor="birthdate">Fecha de nacimiento</label>
                            <input className='logininput' id="birthdate" type="date" placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños" {...register("birthdate",{required:true})}/>
                        <div className="check">
                            <input className="checkbox" type="checkbox"></input>
                            <span className="textspan">Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y otros correos electrónicos de Maleteo</span>
                        </div>
                            <button className='loginbtn '>Registrarse</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default RegisterPage;

