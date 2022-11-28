import React, { createContext, useState } from 'react'
export const contextBaggage = createContext();

const BaggageProvider = ({children}) => {
    const [baggage, setBaggage] = useState("0")
  return (
    <contextBaggage.Provider value={{baggage, setBaggage}}>
        {children}
    </contextBaggage.Provider>
  )
}

export default BaggageProvider