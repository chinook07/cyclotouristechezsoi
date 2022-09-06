import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Accueil from "./accueil/Accueil";
import APropos from "./pagesImp/APropos";
import VoyEffectues from "./pagesImp/VoyEffectues";
import Contact from "./pagesImp/Contact";
import Commencement from "./sections/Commencement";
import Destinations from "./sections/Destinations";
import Equipement from "./sections/Equipement";
import Transport from "./sections/Transport";
import Limitations from "./pagesAutres/Limitations";
import Confidentialite from "./pagesAutres/Confidentialite";

const Corps = () => {
    return (
        <Wrapper>
            <Routes>
                <Route exact path="/" element={<Accueil />} />
                <Route path="/apropos" element={<APropos />} />
                <Route path="/voyages-effectues" element={<VoyEffectues />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/commencement/*" element={<Commencement />} />
                <Route path="/destinations/*" element={<Destinations />} />
                <Route path="/equipement/*" element={<Equipement />} />
                <Route path="/transport/*" element={<Transport />} />
                <Route path="/limitations" element={<Limitations />} />
                <Route path="/confidentialite" element={<Confidentialite />} />
                <Route path="*" element={<div>***</div>} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    background-color: #e8def3;
    min-height: calc(100vh - 452.6px);
`

export default Corps;