import React, { createContext, useState } from 'react'
export const contextTimeIn = createContext();

const TimeInProvider = ({children}) => {
    const [timeIn, setTimeIn] = useState("12")
  return (
    <contextTimeIn.Provider value={{timeIn, setTimeIn}}>
        {children}
    </contextTimeIn.Provider>
  )
}

export default TimeInProvider