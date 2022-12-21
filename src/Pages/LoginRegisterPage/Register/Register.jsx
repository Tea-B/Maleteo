import axios from "axios";
import {useForm} from "react-hook-form";
import "./Register.scss";
// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate()

    const goToLogin = () => {
        document.getElementById("login-btn").click();
    }

    const onSubmit = (data) =>{
        console.log(data);
        const born = new Date(data.date);
        //console.log(born.getFullYear());
        const now = new Date();
        //console.log(now.getFullYear());
        let age = now.getFullYear() - born.getFullYear();
        if(age >= 18)
        {
            axios.post(process.env.REACT_APP_BACKEND + "users/register", data).then(res => {
                console.log("Usuario creado");
                goToLogin()
            })
        } else {
            
        }       
    }
    console.log(errors)

    const messages = {
        req: "Este campo es obligatorio",
        name: "El formato introducido no es el correcto",
        email: "Debes introducir una dirección correcta",
        password: "Tu contraseña debe tener al menos 8 carácteres: Mayus, un número, y un caracter especial",
        date: "Debes ser mayor de edad"
       };

    const patterns = { 
        name: /^[A-Za-z]+$/i ,
        email:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        password:/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    };


    return(
            <div className="register-container">
                    <h2 className="text-center">Únete a Maleteo y disfruta de sus ventajas</h2>
                
                    <form className="d-flex flex-column justify-content-center align-items-center form-class gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <label className='label' htmlFor="email">Dirección de correo electrónico</label>
                        <input className='logininput' id="email" type="email" {...register("email", {
                            required: messages.req,
                            pattern:{
                                value: patterns.email,
                                message: messages.email
                            }
                            })}/>
                        {errors.mail && <p>{errors.mail.message}</p>}

                        <label className='label' htmlFor="name">Nombre</label>
                            <input className='logininput' id="name" type="text" {...register("name",{
                                required:messages.req,
                                pattern:{
                                    value:patterns.name,
                                    message: messages.name
                                }
                                })}/>
                        {errors.name && <p>{errors.name.message}</p>}

                        <label className='label' htmlFor="surname">Apellido</label>
                            <input className='logininput' id="surname" type="text" {...register("surname",{
                                required:messages.req,
                                pattern:{
                                    value: patterns.name,
                                    message: messages.name
                                }
                                })}/>
                        {errors.surname && <p>{errors.surname.message}</p>}
                        

                        <label className='label' htmlFor="password">Contraseña</label>
                            <input className='logininput' id="password" type="password" {...register("password",{
                                required:messages.req,
                                pattern:{
                                    value: patterns.password,
                                    message: messages.password
                                }
                                })}/>
                        {errors.password && <p>{errors.password.message}</p>}

                        <label className='label' htmlFor="birthdate">Fecha de nacimiento (debes ser +18)</label>
                            <input className='logininput' id="birthdate" type="date" {...register("date",{
                                required:messages.req,
                                })}/>
                        {errors.date && <p>{errors.date.message}</p>}
                        
                        

                        <button className='loginbtn'>Registrarse</button>
                    </form>
            </div>
     
    )
}

export default RegisterPage;

