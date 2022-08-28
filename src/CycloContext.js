import { createContext, useState, useEffect } from "react";

export const CycloContext = createContext();

const CycloContextProvider = ({ children }) => {

    const [modeNuit, setModeNuit] = useState(false);
    const [lang, setLang] = useState("FR");
    
    return (
        <CycloContext.Provider
            value={{
                modeNuit,
                setModeNuit,
                lang,
                setLang
            }}
        >{children}</CycloContext.Provider>
    )
}

export default CycloContextProvider;