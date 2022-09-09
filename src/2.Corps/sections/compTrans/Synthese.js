import styled from "styled-components";
import { useState } from "react";

import indexVilles from "./donnees/indexVilles.json";
import trajets from "./donnees/trajets.json";
import Recherche from "./comp/Recherche";
import Resultats from "./comp/Resultats";
import Possibilites from "./comp/Possibilites";

const Synthese = () => {

    const [recherchee, setRecherchee] = useState("");
    const [villeSouhaitee, setVilleSouhaitee] = useState();

    return (
        <Wrapper>
            <Recherche setRecherchee={setRecherchee} setVilleSouhaitee={setVilleSouhaitee} />
            {
                recherchee &&
                <Resultats recherchee={recherchee} setVilleSouhaitee={setVilleSouhaitee} />
            }
            
            {
                villeSouhaitee &&
                <Possibilites villeSouhaitee={villeSouhaitee} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Synthese;