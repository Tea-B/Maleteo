import React, { createContext, useState } from 'react'
export const contextDateOut = createContext();

const DateOutProvider = ({children}) => {
    const [dateOut, setDateOut] = useState('0')
  return (
    <contextDateOut.Provider value={{dateOut, setDateOut}}>
        {children}
    </contextDateOut.Provider>
  )
}

export default DateOutProvider