import { useState } from "react";
import Header from "../../Components/Header/Header";
import Login from "./Login/Login";
import RegisterPage from "./Register/Register";
import "./LoginRegisterPage.scss";

const LoginRegisterpage = () => {

    const [showLogin, setShowLogin] = useState(true);

    return(<>
            <Header navigateTo={'/secondstart'}></Header>
    
        <div className="b-main__starts flex-column gap-2">
        <div className="btndiv2 gap-4">
                    <button id="login-btn" className="btn-login" onClick={() => setShowLogin(true)}>Iniciar sesión</button>
                    <button className="btn-login" onClick={() => setShowLogin(false)}>Regístrate</button>
                </div>

            {showLogin ?
                    (<Login></Login>) :
                    (<RegisterPage></RegisterPage>)
                    }
        </div>
    </>)
}

export default LoginRegisterpage;
