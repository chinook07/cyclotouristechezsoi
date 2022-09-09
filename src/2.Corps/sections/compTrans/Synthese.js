import styled from "styled-components";
import { useState } from "react";

import indexVilles from "./donnees/indexVilles.json";
import trajets from "./donnees/trajets.json";
import Recherche from "./comp/Recherche";
import Resultats from "./comp/Resultats";

const Synthese = () => {

    const [recherchee, setRecherchee] = useState("")

    console.log(Object.keys(indexVilles));

    return (
        <Wrapper>
            <Recherche setRecherchee={setRecherchee} />
            <Resultats recherchee={recherchee} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Synthese;