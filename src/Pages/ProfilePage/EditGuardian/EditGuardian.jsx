import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./EditGuardian.scss";

const EditGuardian = () => {

  const navigate = useNavigate();
  
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
        <h3 className='paraphtext paraphtext--weight'>Describe tu espacio</h3>
        <div className='btnnextdiv'>
          <button className='nextbtn'>Continuar</button>
        </div>
        <h3 className='paraphtext'>Ubicación</h3>
        <h3 className='paraphtext'>Fotos</h3>
        <h3 className='paraphtext'>Título</h3>
        <h3 className='paraphtext'>Disponibilidad y horarios</h3>
        <h3 className='paraphtext'>Servivios</h3>
      </div>
    </div>
  )
}

export default EditGuardian
