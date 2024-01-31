import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compComm/Intro";
import Preparation from "./compComm/Preparation";
import FoireAuxQuestions from "./compComm/FoireAuxQuestions";
import DormirGratuitement from "./compComm/DormirGratuitement";
import Erreur from "../pagesAutres/Erreur";
import TestCarte from "./compComm/TestCarte";

const Commencement = () => {
    
    const choix = [
        { "titre": "Préparation", "lien": "preparation" },
        { "titre": "Foire aux questions", "lien": "faq" },
        { "titre": "Dormir gratuitement", "lien": "bivouac" }
    ]

    return (
        <>
            <FilDArianne racine={"commencement"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/faq" element={<FoireAuxQuestions />} />
                <Route path="/bivouac" element={<DormirGratuitement />} />
                <Route path="/testcarte" element={<TestCarte />} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
            <FilDArianne racine={"commencement"} choix={choix} />
        </>
    )
}

export default Commencement;