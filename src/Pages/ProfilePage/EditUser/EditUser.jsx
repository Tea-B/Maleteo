import './EditUser.scss'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../../Components/Header/Header'
import { getCookie } from '../../../utils/getCookie'
import { useNavigate } from 'react-router-dom'

const EditUser = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const stringUser = getCookie('user');
  const user = JSON.parse(stringUser ? stringUser : '{}');
  const [dataUser, setDataUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      await axios.get(process.env.REACT_APP_BACKEND + `users/get/${user._id}`)
      .then((res) =>{
         console.log(res.data)
         setDataUser(res.data)
        })
    }
    getData()
  },[])

  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      name: data.name!==''?data.name:dataUser.name,
      surname: data.surname!==''?data.surname:dataUser.surname,
      email: data.email!==''?data.email:dataUser.email,
      image: data.image!==''?data.image:dataUser.image,
      reservations: dataUser.reservations,
      birthdate: data.birthdate!==''?data.birthdate:dataUser.birthdate
    }
    const putDataUser = await axios.put(process.env.REACT_APP_BACKEND + 'users/put/' + user._id, newData)
    .then((ddbb) => {
      console.log(ddbb.data);
    })
    navigate('/profile')
    
  }


  return (
    <>
      <Header navigateTo={'/profile'}/>

      <div className='container d-flex flex-column gap-4 jusitify-content-center align-items-center'>
        <h1>Edita tu perfil</h1>
          <img className='profimg' src={dataUser.image?dataUser.image:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt='imageUser' />
        <form className='d-flex flex-column gap-5' onSubmit={handleSubmit(onSubmit)}>
          <input className='profile-input' type='text' placeholder='URL foto perfil' {...register('image')}/>
          <input className='profile-input' type='text' placeholder={dataUser.name} {...register('name')}/>
          <input className='profile-input' type='text' placeholder={dataUser.surname} {...register('surname')}/>
          <input className='profile-input' type='email' placeholder={dataUser.email} {...register('email')}/>
          <input className='profile-input' type='date' placeholder={dataUser.bithdate} {...register('birthdate')}/>
          <button className='btn btn-outline-primary'>Guardar cambios</button>
        </form>
      </div>
    </>
  )
}

export default EditUser
