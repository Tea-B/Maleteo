import './App.css';
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import EditGuardian from './Pages/ProfilePage/EditGuardian/EditGuardian';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { useState } from 'react';
import { MyContext } from './Context/MyContext';
import { getCookie } from './utils/getCookie';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StartPage  from './Pages/StartPage/StartPage';
import Start2 from './Pages/Start2/Start2';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import DateInPage from './Pages/HomePage/DateInPage';
import DateOutPage from './Pages/HomePage/DateOutPage';
import DetailsPage from './Pages/HomePage/DetailsPage';
import ReservePage from './Pages/HomePage/ReservePage';
import RatesPage from './Pages/RatesPage/RatesPage';
import {ThanksPage} from './Pages/Thanks/ThanksPage';
import ChatListPage from './Pages/ChatListPage/ChatListPage';
import Confirmation from './Pages/HomePage/Resume/Confirmation';
import EditUser from './Pages/ProfilePage/EditUser/EditUser';
// import StartModal from './Pages/StartModal/StartModal';


export const App = () => {

  const[login, setLogin] = useState(!!getCookie('token'));
  

  return (
    <MyContext.Provider value={{login, setLogin}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
            <Route exact path="/" element={<StartPage></StartPage>} />
            <Route path="/secondstart" element={<Start2></Start2>} />
            {/* <Route path="/start" element={<StartModal></StartModal>} /> */}
            <Route path="/login" element={<LoginRegisterPage></LoginRegisterPage>} />
            {login && <Route path="/home" element={<HomePage></HomePage>} />}
            {login && <Route path="/map" element={<SearchPage></SearchPage>} />}
            {login && <Route path="/home/datein" element={<DateInPage></DateInPage>} />}
            {login && <Route path="/home/dateout" element={<DateOutPage></DateOutPage>} />}
            {login && <Route path="/home/details" element={<DetailsPage></DetailsPage>} />}
            {login && <Route path="/home/reserve" element={<ReservePage></ReservePage>} />}
            {login && <Route path="/home/reserve/confirmation" element={<Confirmation></Confirmation>} />}
            {login && <Route path="/home/reserve/thanks" element={<ThanksPage></ThanksPage>} />}
            {login && <Route path="/profile" element={<ProfilePage></ProfilePage>} />}
            {login && <Route path="/editguardian" element={<EditGuardian></EditGuardian>} />}
            {login && <Route path="/edituser" element={<EditUser></EditUser>} />}
            {login && <Route path="/chat/:id" element={<ChatPage></ChatPage>} />}
            {login && <Route path="/chat/" element={<ChatListPage />} />}
            <Route path="/rates" element={<RatesPage></RatesPage>} />
        
        </Routes>
      </Router>
      </LocalizationProvider>
    </MyContext.Provider>
  );
}

export default App