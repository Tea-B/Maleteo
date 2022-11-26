
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import { StartPage } from './Pages/StartPage/StartPage';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { Start2 } from './Pages/Start2/Start2';
import { Start1 } from './Pages/Start1/Start1';
import { Header } from './Components/Header/Header';


export const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<StartPage></StartPage>} />
          <Route exact path="/firststart" element={<Start1></Start1>} />
          <Route exact path="/secondstart" element={<Start2></Start2>} />
          <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route path="/map" element={<SearchPage></SearchPage>} />
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
          <Route path="/chat" element={<ChatPage></ChatPage>} />
      </Routes>
    <div>
      <Header></Header>
      <StartPage/>
    </div>
    </Router>
    
    </>
  )};

  export default App;