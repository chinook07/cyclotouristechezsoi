import { createContext, useState, useEffect } from "react";

export const CycloContext = createContext();

const CycloContextProvider = ({ children }) => {

    const [modeNuit, setModeNuit] = useState(false);
    
    return (
        <CycloContext.Provider
            value={{
                modeNuit,
                setModeNuit
            }}
        >{children}</CycloContext.Provider>
    )
}

export default CycloContextProvider;