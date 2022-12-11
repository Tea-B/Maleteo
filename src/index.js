import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BaggageProvider from './Context/BaggageProvider';
import DateInProvider from './Context/DateInProvider';
import TimeInProvider from './Context/TimeInProvider';
import TimeOutProvider from './Context/TimeOutProvider';
import DateOutProvider from './Context/DateOutProvider';
import ReserveProvider from './Context/ReserveProvider';
import MapProvider from './Context/MapProvider';
import ConfirmationProvider from './Context/ConfirmationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfirmationProvider>
  <MapProvider>
  <ReserveProvider>
  <TimeOutProvider>
  <TimeInProvider>
  <BaggageProvider>
  <DateOutProvider>
  <DateInProvider>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </DateInProvider>
  </DateOutProvider>
  </BaggageProvider>
  </TimeInProvider>
  </TimeOutProvider>
  </ReserveProvider>
  </MapProvider>
  </ConfirmationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
