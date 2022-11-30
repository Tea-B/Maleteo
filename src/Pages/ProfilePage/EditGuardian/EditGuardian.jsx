import axios from 'axios';
import React from 'react'
import { get, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../utils/getCookie';
import "./EditGuardian.scss";

const EditGuardian = () => {
  
  const {register, handleSubmit} =useForm();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
      console.log(data);
      console.log(await getRoad(data.road))
      const road = await getRoad(data.road)
      const {"lat": latitude, "lng": longitude} = road.geometry;
      data = {...data, latitude: latitude, longitude: longitude }
      console.log(data);
      axios.post(process.env.REACT_APP_BACKEND + "ubications/post", data).then(res => {
        console.log("Ubicación añadida");
      })
      let stringUser = getCookie('user');
      const user = JSON.parse(stringUser ? stringUser : '{}');
      let {"data":ubication} = await axios.get(process.env.REACT_APP_BACKEND + "ubications/getall")
      console.log(ubication);
      console.log(user);
      let lastUbication = ubication[ubication.length - 1];
      let guardianUser = {ubicationsID: [lastUbication._id], userID: user._id};
      console.log(guardianUser);
      axios.post(process.env.REACT_APP_BACKEND + "guardians/post", guardianUser );

      navigate('/profile')
  }

  let getRoad = async (busca) => {
    //let busca = "Puerta del sol 28013 madrid"
    const {data} = await axios.get('https://api.opencagedata.com/geocode/v1/json?key=ef1014d0798c41dea733f7bca5ab6538&q=' + busca + '&pretty=1')
      console.log(data.results[0].geometry);
      return data.results[0];

  }


  
  return (
    <div >
      <div className='firstdiv'>
        <div className='firsttitle' >
          <h2 className='secondtitle'>Configura tu espacio en muy pocos pasos</h2>
        </div>
        <div className='btndiv'>
          <button className='xbtn' onClick={() => navigate("/profile")}>X</button>
        </div>
      </div>
      <div className='seconddiv'>
      <form className='formguard' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='paraphtext paraphtext--weight' placeholder='Describe tu espacio' {...register("description")}/>
        <div className='btnnextdiv'>
          <button className='nextbtn'>Continuar</button>
        </div>
            <input type="text" className='paraphtext' placeholder='Ubicación' {...register("road")}/>
            <input type="text" className='paraphtext' placeholder='Fotos' {...register("images")}/>
            <input type="text" className='paraphtext' placeholder='Título' {...register("name")}/>
            <input type="text" className='paraphtext' placeholder='Disponibilidad y horarios' {...register("disponibility")}/>
            <input type="text" className='paraphtext' placeholder='Servicios' {...register("services")}/>
          </form>
      </div>
    </div>
  )
}

export default EditGuardian
