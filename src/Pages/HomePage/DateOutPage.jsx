import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { contextDateOut } from '../../Context/DateOutProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import Header from '../../Components/Header/Header';

export default function SubComponentsPickers() {
  const [myDateOut, setMyDateOut] = React.useState(dayjs());
  const {setDateOut} = React.useContext(contextDateOut);
  const {dateIn} = React.useContext(contextDateIn);

  const dateCorrect = () => {
    if(myDateOut>dateIn){
        return (<Link to={'/home/details'}><button className='btn btn-outline-primary'>Continuar</button></Link>)
    }else{
        return(<span className='atention'>Por favor, selecciona una fecha correcta</span>)
    }}
   
  useEffect(() =>{
      setDateOut(myDateOut)
  });

  return (<>
  <Header navigateTo={'/home/datein'}></Header>
    <div className='container d-flex flex-wrap justify-content-center pt-4 mt-4'>
    <h1>Elige la fecha de retirada</h1>
    <div className=''>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker date={myDateOut} onChange={(newDate) => setMyDateOut(newDate)} />
        </Grid>
        </Grid>
    </LocalizationProvider>
    </div>
    
    {dateCorrect()}
    </div>
    </>);
}