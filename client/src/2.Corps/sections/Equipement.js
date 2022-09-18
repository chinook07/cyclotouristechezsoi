import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FilDArianne from "./comp/FilDArianne";
import Intro from "./compEquip/Intro";
import Materiel from "./compEquip/Materiel";
import ListeInteractive from "./compEquip/ListeInteractive";

const Equipement = () => {

    const choix = [
        { "titre": "Matériel", "lien": "materiel" },
        { "titre": "Liste interactive", "lien": "listeinteractive" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"equipement"} choix={choix} />
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/materiel" element={<Materiel />} />
                <Route path="/listeinteractive" element={<ListeInteractive />} />
            </Routes>
            <FilDArianne racine={"equipement"} choix={choix} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Equipement;