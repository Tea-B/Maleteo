import axios from 'axios'
import React from 'react'

const GetData = () => {

const data = async () => {
    await axios.get(process.env.REACT_APP_BACKEND + 'users/getall')
    .then((res)=>{
        console.log(res)
    })
}

  return (
    <div>GetData</div>
  )
}

export default GetData