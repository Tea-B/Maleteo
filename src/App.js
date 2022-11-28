import './App.css';
import { Route, Routes, BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import EditGuardian from './Pages/ProfilePage/EditGuardian/EditGuardian';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { useState } from 'react';
import { MyContext } from './Context/MyContext';
import { getCookie } from './utils/getCookie';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import StartPage from './Pages/StartPage/StartPage';
import Start2 from './Pages/Start2/Start2'
import DateInPage from './Pages/HomePage/DateInPage';
import DateOutPage from './Pages/HomePage/DateOutPage';
import DetailsPage from './Pages/HomePage/DetailsPage';
import ReservePage from './Pages/HomePage/ReservePage';
import RatesPage  from './Pages/RatesPage/RatesPage';
// import Geokeo from './Pages/positionstack/OpenGetData';
// import OpenGetData from './Pages/positionstack/OpenGetData';
// import { PositionstackPage } from './Pages/positionstack/PositionstackPage';

export const App = () => {

  const[login, setLogin] = useState(!!getCookie('token'));
  

  return (
    <MyContext.Provider value={{login, setLogin}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        {login && <Link className="b-btn" to="/profile">Profile</Link>}
              {login && <Link className="b-btn" to="/home">Home</Link>}
              <Link className="b-btn" to="/connect">Register</Link>
        <Routes>
            <Route exact path="/" element={<StartPage></StartPage>} />
            <Route exact path="/secondstart" element={<Start2></Start2>} />
            <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/map" element={<SearchPage></SearchPage>} />
            <Route path="/home/datein" element={<DateInPage></DateInPage>} />
            <Route path="/home/dateout" element={<DateOutPage></DateOutPage>} />
            <Route path="/home/details" element={<DetailsPage></DetailsPage>} />
            <Route path="/home/reserve" element={<ReservePage></ReservePage>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
            <Route path="/editguardian" element={<EditGuardian></EditGuardian>} />
            <Route path="/chat" element={<ChatPage></ChatPage>} />
            <Route path="/secondstart/rates" element={<RatesPage></RatesPage>} />
            {/* <Route path="/calle" element={<PositionstackPage></PositionstackPage>} /> */}
            {/* <Route path="/calle" element={<Geokeo></Geokeo>} /> */}
            {/* <Route path="/calle" element={<OpenGetData></OpenGetData>} /> */}
        </Routes>
      </Router>
      </LocalizationProvider>
    </MyContext.Provider>
  );
}

export default App