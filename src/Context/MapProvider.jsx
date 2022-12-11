import React, { createContext, useState } from 'react'
export const contextMap = createContext();

const MapProvider = ({children}) => {
    const [map, setMap] = useState("0")
  return (
    <contextMap.Provider value={{map, setMap}}>
        {children}
    </contextMap.Provider>
  )
}

export default MapProvider