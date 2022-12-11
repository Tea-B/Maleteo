import React, { createContext, useState } from 'react'
export const contextReserve = createContext();

const ReserveProvider = ({children}) => {
    const [reserve, setReserve] = useState("0")
  return (
    <contextReserve.Provider value={{reserve, setReserve}}>
        {children}
    </contextReserve.Provider>
  )
}

export default ReserveProvider