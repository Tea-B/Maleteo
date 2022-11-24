
import {useForm} from "react-hook-form";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
        
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Dirección de correo electrónico</label>
                    <input id="email" type="email" {...register("email", {required:true})}/>
                <label htmlFor="name">Nombre</label>
                    <input id="name" type="text" {...register("name",{required:true})}/>
                <label htmlFor="surname">Apellido</label>
                    <input id="surname" type="text" {...register("surname",{required:true})}/>
                <label htmlFor="password">Contraseña</label>
                    <input id="password" type="password" {...register("password",{required:true})}/>
                <label htmlFor="birthday">Fecha de nacimiento</label>
                    <input id="birthday" type="date" placeholder="Para registrarte tendrás que ser mayor de edad. Los usuarios no veran tu fecha de cumpleaños" {...register("birthday",{required:true})}/>
                <button>Registrarse</button>
            </form>
        </div>
    )
}

export default RegisterPage;

