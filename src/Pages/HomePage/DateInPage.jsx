import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { Link } from 'react-router-dom';
import {contextDateIn} from '../../Context/DateInProvider';
import { useEffect } from 'react';



export default function SubComponentsPickers() {
  const [myDateIn, setMyDateIn] = React.useState(dayjs());
  const {setDateIn} = React.useContext(contextDateIn);
   
  const dateCorrect = () => {
    if(myDateIn < new Date()){
      return (<span className='atention'>Selecciona una fecha correcta</span>)
    }else{
      return (<Link to={'/home/dateout'}><button className='btn'>Continuar</button></Link>)
    }
  }

    useEffect(() =>{
        setDateIn(myDateIn)
    })
  return (
    <div className='container d-flex flex-wrap justify-content-center pt-4'>
    <h1>Elige la fecha de depósito</h1>
    <div className=''>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker date={myDateIn} onChange={(newDate) => setMyDateIn(newDate)} />
        </Grid>
        </Grid>
    </LocalizationProvider>
    </div>
    {dateCorrect()}
    <Link to={'/home'}><button className='btn'>home(provisional)</button></Link>
    
    </div>
  );
}