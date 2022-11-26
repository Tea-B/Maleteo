import React from 'react'
import { Link } from 'react-router-dom';
import {contextBaggage} from '../../Context/BaggageProvider';
import {contextDateIn} from '../../Context/DateInProvider';
import { contextDateOut } from '../../Context/DateOutProvider';
import {contextTimeIn} from '../../Context/TimeInProvider';
import { contextTimeOut } from '../../Context/TimeOutProvider';
import './HomePage.scss'

const HomePage = () => {

  const {baggage} = React.useContext(contextBaggage);
  const {dateIn} = React.useContext(contextDateIn);
  const {dateOut} = React.useContext(contextDateOut);
  const {timeIn} = React.useContext(contextTimeIn);
  const {timeOut} = React.useContext(contextTimeOut);

  const { $D, $M } = dateIn
  const { $D:$D_out, $M:$M_out } = dateOut
  const { $H, $m } = timeIn
  const { $H:$H_out, $m:$m_out } = timeOut
  
  const dateTimeIn = $H + ":" + $m + ", " + $D + "/" + $M
  const dateTimeOut = $H_out + ":" + $m_out + ", " + $D_out + "/" + $M_out
  
  return (
    <div className='mt-5 d-flex flex-column align-items-center'>

    <div className='d-flex flex-wrap gap-3 mt-2 container'>
    <h2>Encuentra tu guardián</h2>
      <div className='w-100'>
        <input className='w-100 home-input-search' type="text"></input>
      </div>
      <div className='d-flex flex-wrap gap-3 justify-content-center'>
      <Link className='noStyle' to={'/home/datein'}><div className='home-input d-flex justify-content-start align-items-center'><img className='icon ms-3 me-4' src='/calendar.png' alt=''></img><span>{timeIn==="12"?"Depósito":dateTimeIn}</span></div></Link>
      <Link className='noStyle' to={'/home/dateout'}><div className='home-input d-flex justify-content-start align-items-center'><img className='icon ms-3 me-4' src='/calendar.png' alt=""></img><span>{timeOut==="12"?"Retirada":dateTimeOut}</span></div></Link>
      <Link className='noStyle' to={'/home/details'}><div className='home-input d-flex justify-content-start align-items-center'><img className='icon ms-3 me-4' src='/baggage.png' alt=""></img><span>{baggage!=="0"?baggage + " piezas":"Nº de piezas"}</span></div></Link>
      <button className='home-input home-btn-search'>Buscar</button>
    </div>
    </div>

    <div className='news mt-5 ms-2'>
    <h2>Novedades</h2>
      <div className='news-slider '>
          <div className='img-container'>
            <img src='/blog.png' alt='img'></img>
          </div>

          <div className='img-container'>
            <img src='/blog.png' alt='img'></img>
          </div>

          <div className='img-container'>
            <img src='/blog.png' alt='img'></img>
          </div>
      </div>
    </div>


    <div className='experiences container mt-5 d-flex flex-wrap gap-3'>
      <h2>Experiencias</h2>

      <div className='box-experience'>
        <img src="/gijon.png" alt="img"></img>
        <div className='ps-2 pe-2'>
        <h4>Un pedacito de Italia en Gijón</h4>
        <p>Sin lugar a duda es uno de los destinos gastronómicos  por execélncia de esta gran ciudad situada en el norte de España.</p>
          <span>4,96</span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span>(120)</span>
          </div>
      </div>

      <div className='box-experience'>
        <img src="/gijon.png" alt="img"></img>
        <div className='ps-2 pe-2'>
        <h4>Un pedacito de Italia en Gijón</h4>
        <p>Sin lugar a duda es uno de los destinos gastronómicos  por execélncia de esta gran ciudad situada en el norte de España.</p>
          <span>4,50</span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span>(105)</span>
      </div>
      </div>
    </div>


    <button className='btn-showMore'>Mostrar más</button>
    </div>
  )
}

export default HomePage
