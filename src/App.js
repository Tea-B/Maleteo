import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import StartPage from './Pages/StartPage/StartPage';
import Start1 from './Pages/Start1/Start1';
import Start2 from './Pages/Start2/Start2';
import HomePage from './Pages/HomePage/HomePage';
import DateInPage from './Pages/HomePage/DateInPage';
import DateOutPage from './Pages/HomePage/DateOutPage';
import DetailsPage from './Pages/HomePage/DetailsPage';
import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeForm from './Components/HomeForm/HomeForm';


export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
            <Route exact path="/" element={<StartPage></StartPage>} />
            <Route exact path="/firststart" element={<Start1></Start1>} />
            <Route exact path="/secondstart" element={<Start2></Start2>} />
            <Route path="/connect" element={<LoginRegisterPage></LoginRegisterPage>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/map" element={<SearchPage></SearchPage>} />
            <Route path="/home/datein" element={<DateInPage></DateInPage>} />
            <Route path="/home/dateout" element={<DateOutPage></DateOutPage>} />
            <Route path="/home/details" element={<DetailsPage></DetailsPage>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
            <Route path="/chat" element={<ChatPage></ChatPage>} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App