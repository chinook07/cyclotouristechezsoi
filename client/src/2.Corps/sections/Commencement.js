import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compComm/Intro";
import Preparation from "./compComm/Preparation";
import FoireAuxQuestions from "./compComm/FoireAuxQuestions";
import DormirGratuitement from "./compComm/DormirGratuitement";
import Enfants from "./compComm/Enfants"
import Erreur from "../pagesAutres/Erreur";
import TestCarte from "./compComm/TestCarte";

const Commencement = () => {
    
    const choix = [
        { "titre": "Préparer", "lien": "preparation" },
        { "titre": "FAQ", "lien": "faq" },
        { "titre": "Dormir gratuitement", "lien": "bivouac" },
        { "titre": "Avec des enfants", "lien": "enfants"}
    ]

    return (
        <>
            <FilDArianne racine={"commencement"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/faq" element={<FoireAuxQuestions />} />
                <Route path="/bivouac" element={<DormirGratuitement />} />
                <Route path="/enfants" element={<Enfants />} />
                <Route path="/testcarte" element={<TestCarte />} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
            <FilDArianne racine={"commencement"} choix={choix} />
        </>
    )
}

export default Commencement;