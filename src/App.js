import './App.css';
import { Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import StartPage from './Pages/StartPage/StartPage';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { useState } from 'react';
import { MyContext } from './Context/MyContext';


export const App = () => {

  const[login, setLogin] = useState();
  

  return (
    <MyContext.Provider value={{login, setLogin}}>
      <Router>
        <Routes>
            <Route exact path="/" element={<StartPage></StartPage>} />
            <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/map" element={<SearchPage></SearchPage>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
            <Route path="/chat" element={<ChatPage></ChatPage>} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}


export default App
