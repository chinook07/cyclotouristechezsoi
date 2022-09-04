import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Initiation from "./compComm/Initiation";
import FoireAuxQuestions from "./compComm/FoireAuxQuestions";
import DormirGratuitement from "./compComm/DormirGratuitement";

const Commencement = () => {
    
    const choix = [
        { "titre": "Initiation", "lien": "initiation" },
        { "titre": "Foire aux questions", "lien": "faq" },
        { "titre": "Dormir gratuitement", "lien": "bivouac" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"commencement"} choix={choix} />
            <Routes>
                <Route path="/initiation" element={<Initiation />} />
                <Route path="/faq" element={<FoireAuxQuestions />} />
                <Route path="/bivouac" element={<DormirGratuitement />} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Commencement;