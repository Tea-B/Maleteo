import { useState } from "react";
import Header from "../../Components/Header/Header";
import Login from "./Login/Login";
import RegisterPage from "./Register/Register";
import "./LoginRegisterPage.scss";

const LoginRegisterpage = () => {

    const [showLogin, setShowLogin] = useState(true);

    return(
        <div>
            <Header navigateTo={'/secondstart'}></Header>
            <div className="bigdiv">
                <div className="btndiv2">
                    <button className="btn-login" onClick={() => setShowLogin(true)}>Iniciar sesión</button>
                    <button className="btn-login" onClick={() => setShowLogin(false)}>Regístrate</button>
                </div>
                    {showLogin ?
                    (<Login></Login>) :
                    (<RegisterPage></RegisterPage>)
                    }
            </div>
        </div>
    )
}

export default LoginRegisterpage;
