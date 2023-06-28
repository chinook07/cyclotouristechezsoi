import { createContext, useState, useEffect } from "react";

export const CycloContext = createContext();

const CycloContextProvider = ({ children }) => {

    const [ecran, setEcran] = useState(window.innerWidth);
    const [modeNuit, setModeNuit] = useState(false);
    const [coordAjout, setCoordAjout] = useState({})
    const [trajetRedig, setTrajetRedig] = useState({});
    const [langSec, setLangSec] = useState(0);
    const [mesuresMetriques, setMesuresMetriques] = useState(true);

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
                ecran,
                coordAjout,
                setCoordAjout,
                trajetRedig,
                setTrajetRedig,
                langSec,
                setLangSec,
                mesuresMetriques,
                setMesuresMetriques
            }}
        >{children}</CycloContext.Provider>
    )
}

export default CycloContextProvider;