import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Accueil from "./accueil/Accueil";
import APropos from "./pagesImp/APropos";
import Contact from "./pagesImp/Contact";
import Commencement from "./sections/Commencement";
import Destinations from "./sections/Destinations";
import Equipement from "./sections/Equipement";
import Transport from "./sections/Transport";

const Corps = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/apropos" element={<APropos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/commencement" element={<Commencement />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/equipement" element={<Equipement />} />
                <Route path="/transport" element={<Transport />} />
                <Route exact path="/" element={<Accueil />} />
                <Route path="*" element={<div>***</div>} />
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    min-height: calc(100vh - 452.6px);
`

export default Corps;