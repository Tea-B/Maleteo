import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import StartPage  from './Pages/StartModal/StartModal';
import Start2 from './Pages/Start2/Start2';

import LoginRegisterPage from './Pages/LoginRegisterPage/LoginRegisterPage';

import HomePage from './Pages/HomePage/HomePage';
import DateInPage from './Pages/HomePage/DateInPage';
import DateOutPage from './Pages/HomePage/DateOutPage';
import DetailsPage from './Pages/HomePage/DetailsPage';
import ReservePage from './Pages/HomePage/ReservePage';
import RatesPage  from './Pages/RatesPage/RatesPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChatPage from './Pages/ChatPage/ChatPage';
// import Geokeo from './Pages/positionstack/OpenGetData';
// import OpenGetData from './Pages/positionstack/OpenGetData';
// import { PositionstackPage } from './Pages/positionstack/PositionstackPage';


export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
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
          <Route path="/chat" element={<ChatPage></ChatPage>} />
          <Route path="/rates" element={<RatesPage></RatesPage>} />
      </Routes>
    </Router>
    </LocalizationProvider>
  );
}

export default App