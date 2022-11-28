import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './RatesPage.scss'

const RatesPage = () => {
    
  return (
    <>
    <div className='rates-gallery container d-flex flex-column gap-4 mt-5'>
        <div>
        <h2>Selecciona</h2>
        <select className='select-continents'>
            <option value='Europa'>Europa</option>
            <option value='America'>América</option>
            <option value='Africa'>África</option>
            <option value='Asia'>Asia</option>
            <option value='Oceania'>Oceanía</option>
        </select>
        </div>

        <h1>Nuestras tarifas fijas</h1>
        <div className='d-flex flex-column align-items-start gap-5'>

            <div className='box d-flex flex-column align-items-center justify-content-center'>
                <span className='text'>24 Horas</span>
                <h2 className='price'>6€</h2>
                <span className='text'>Por equipaje</span>
            </div>
            <div className='box blue d-flex flex-column align-items-center justify-content-center'>
                <span className='text'>Día adicional</span>
                <h2 className='price'>4€</h2>
                <span className='text'>Por equipaje</span>
            </div>
        </div>

        
    </div>
    <Footer></Footer>   
    </>
  )
}

export default RatesPage