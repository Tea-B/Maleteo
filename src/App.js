import { HomeForm } from './Components/HomeForm/HomeForm'
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
