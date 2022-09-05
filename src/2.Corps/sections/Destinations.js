import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Trajets from "./compDesti/Trajets";
import Nouveautes from "./compDesti/Nouveautes";
import Synthese from "./compDesti/Synthese";

const Destinations = () => {

    const choix = [
        { "titre": "Trajets", "lien": "trajets" },
        { "titre": "Nouveautés", "lien": "nouveautes" },
        { "titre": "Synthèse", "lien": "synthese" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"destinations"} choix={choix} />
            <Routes>
                <Route path="/trajets" element={<Trajets />} />
                <Route path="/nouveautes" element={<Nouveautes />} />
                <Route path="/synthese" element={<Synthese />} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Destinations;