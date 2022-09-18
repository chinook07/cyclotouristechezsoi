import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compComm/Intro";
import Preparation from "./compComm/Preparation";
import FoireAuxQuestions from "./compComm/FoireAuxQuestions";
import DormirGratuitement from "./compComm/DormirGratuitement";

const Commencement = () => {
    
    const choix = [
        { "titre": "Préparation", "lien": "preparation" },
        { "titre": "Foire aux questions", "lien": "faq" },
        { "titre": "Dormir gratuitement", "lien": "bivouac" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"commencement"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/faq" element={<FoireAuxQuestions />} />
                <Route path="/bivouac" element={<DormirGratuitement />} />
            </Routes>
            <FilDArianne racine={"commencement"} choix={choix} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Commencement;