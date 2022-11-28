import React, { createContext, useState } from 'react'
export const contextDateIn = createContext();

const DateInProvider = ({children}) => {
    const [dateIn, setDateIn] = useState('0')
  return (
    <contextDateIn.Provider value={{dateIn, setDateIn}}>
        {children}
    </contextDateIn.Provider>
  )
}

export default DateInProvider