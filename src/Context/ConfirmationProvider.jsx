import React, { createContext, useState } from 'react'
export const contextConfirmation = createContext();

const ConfirmationProvider = ({children}) => {
    const [confirmation, setConfirmation] = useState("0")
  return (
    <contextConfirmation.Provider value={{confirmation, setConfirmation}}>
        {children}
    </contextConfirmation.Provider>
  )
}

export default ConfirmationProvider;