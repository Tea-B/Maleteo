<<<<<<< HEAD
import { Footer } from './Components/Footer/Footer'
import { HomeForm } from './Components/HomeForm/HomeForm'
=======
>>>>>>> d679f6a84ffe866557c013fb3a64776cb609825f

import { Footer } from './Components/Footer/Footer'
import './App.css';
import LoginRegisterpage from './Pages/LoginRegisterPage/LoginRegisterPage';

export const App = () => {
  return (
    <div>
      <HomeForm/>
      <Footer/>
        <LoginRegisterpage></LoginRegisterpage>
    </div>
  )
}


export default App
