import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import TrRegional from "./compTrans/TrRegional";
import TrInterUrbain from "./compTrans/TrInterurbain";
import Synthese from "./compTrans/Synthese";

const Transport = () => {

    const choix = [
        { "titre": "Transport régional", "lien": "regional" },
        { "titre": "Transport interurbain", "lien": "interurbain" },
        { "titre": "Synthèse", "lien": "synthese" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"transport"} choix={choix} />
            <Routes>
                <Route path="/regional" element={<TrRegional />} />
                <Route path="/interurbain" element={<TrInterUrbain />} />
                <Route path="/synthese" element={<Synthese />} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Transport;