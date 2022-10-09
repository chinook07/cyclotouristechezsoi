import { createContext, useState, useEffect } from "react";

export const CycloContext = createContext();

const CycloContextProvider = ({ children }) => {

    const [ecran, setEcran] = useState(window.innerWidth);
    const [modeNuit, setModeNuit] = useState(false);
    const [lang, setLang] = useState("FR");
    const [coordAjout, setCoordAjout] = useState({})
    const [trajetRedig, setTrajetRedig] = useState({});

    useEffect(() => {
        const handleResizeWindow = () => setEcran(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {window.removeEventListener("resize", handleResizeWindow)}
    }, [])
    
    return (
        <CycloContext.Provider
            value={{
                modeNuit,
                setModeNuit,
                lang,
                setLang,
                ecran,
                coordAjout,
                setCoordAjout,
                trajetRedig,
                setTrajetRedig
            }}
        >{children}</CycloContext.Provider>
    )
}

export default CycloContextProvider;