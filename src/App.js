import './App.css';
import { Route, Routes, BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import StartPage from './Pages/StartPage/StartPage';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import EditGuardian from './Pages/ProfilePage/EditGuardian/EditGuardian';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { useState } from 'react';
import { MyContext } from './Context/MyContext';
import { getCookie } from './utils/getCookie';


export const App = () => {

  const[login, setLogin] = useState(!!getCookie('token'));
  

  return (
    <MyContext.Provider value={{login, setLogin}}>
      <Router>
              {login && <Link className="b-btn" to="/profile">Profile</Link>}
              {login && <Link className="b-btn" to="/home">Home</Link>}
              <Link className="b-btn" to="/connect">Register</Link>
        <Routes>
            <Route exact path="/" element={<StartPage></StartPage>} />
            <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/map" element={<SearchPage></SearchPage>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
            <Route path="/editguardian" element={<EditGuardian></EditGuardian>} />
            <Route path="/chat" element={<ChatPage></ChatPage>} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}


export default App
