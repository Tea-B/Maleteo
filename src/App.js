import './App.css';
import { Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import StartPage from './Pages/StartPage/StartPage';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';

import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
// import { HomeForm } from './Components/HomeForm/HomeForm';
// import { Start1 } from './Components/Start1/Start1';


export const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<StartPage></StartPage>} />
          <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/map" element={<><Header></Header><SearchPage></SearchPage><Footer></Footer></>} />
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
          <Route path="/chat" element={<ChatPage></ChatPage>} />
      </Routes>
    </Router>
  );
}

export default App