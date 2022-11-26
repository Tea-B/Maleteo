import React, { createContext, useState } from 'react'
export const contextTimeOut = createContext();

const TimeOutProvider = ({children}) => {
    const [timeOut, setTimeOut] = useState("12")
  return (
    <contextTimeOut.Provider value={{timeOut, setTimeOut}}>
        {children}
    </contextTimeOut.Provider>
  )
}

export default TimeOutProvider