import * as React from 'react';
import './DetailsPage.scss'
import ArrowRight from '../../svg/icon-arrow-right.svg';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {contextBaggage} from '../../Context/BaggageProvider';
import { contextTimeIn } from '../../Context/TimeInProvider';
import { useEffect } from 'react';
import { contextTimeOut } from '../../Context/TimeOutProvider';
import { contextDateIn } from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import Header from '../../Components/Header/Header';


export default function BasicTimePicker() {
    const {baggage, setBaggage} = React.useContext(contextBaggage);
    const {timeIn, setTimeIn} = React.useContext(contextTimeIn);
    const {timeOut, setTimeOut} = React.useContext(contextTimeOut);
    const {dateIn} = React.useContext(contextDateIn);
    const {dateOut} = React.useContext(contextDateOut);


  const [myTimeIn, setMyTimeIn] = React.useState('12');
  const [myTimeOut, setMyTimeOut] = React.useState('12');

  console.log(dateOut)

const correctDate = () => {
  if(dateOut.$D === dateIn.$D && dateOut.$M === dateIn.$M  && myTimeIn >= myTimeOut || myTimeIn === "12" && myTimeOut ==="12"){
    return (<span className='atention'>Seleciona una hora correcta</span>)
  } else{
    return (<Link to={'/home'}><button className='btn-arrow'><img className='icon-arrow-right' src={ArrowRight} alt="arrow"/></button></Link>)
  }
}


useEffect(() =>{
    setTimeIn(myTimeIn)
},[myTimeIn])
useEffect(() =>{
  setTimeOut(myTimeOut)
},[myTimeOut])

  const handleChange = (event) => {
    setBaggage(event.target.value);
  };

  return (
    <>
  <Header navigateTo={'/home/dateout'}></Header>
    
    <div className='container d-flex flex-wrap justify-content-start'>
    
        <div className='d-flex mt-5'>

            <div className='container w-50 d-flex flex-column gap-2'>
            <h3>Depósito</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                ampm={false}
                label="Depósito"
                value={myTimeIn}
                onChange={(newValue) => {
                setMyTimeIn(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            </div>

                <div className='container w-50 d-flex flex-column gap-2'>
                <h3>Retirada</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                ampm={false}
                label="Retirada"
                value={myTimeOut}
                onChange={(newValue) => {
                setMyTimeOut(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            </div>
        </div>

        <div className='d-flex flex-column gap-2 mt-5'>
        <h3>Número de equipajes</h3>
        <div className='container  d-flex flex-column'>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Número de equipaje</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={baggage}
          label="Número de equipaje"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    </div>

  </div>

  {correctDate()}
       
    
    </>
  );
}