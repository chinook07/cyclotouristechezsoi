import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { format } from "date-fns";

import Carrousel from "./comp/Caroussel";
import NavAccueil from "./comp/NavAccueil";
import NavBlogue from "./comp/NavBlogue";
import TestWebP from "./comp/TestWebP";
import texteAcc from "./donnees/texteAcc.json";

const Accueil = () => {

    const mois = parseInt(format(new Date(), "M"));

    return (
        <>
            <Carrousel />
            <Intro>
                <h1>Explorez le Québec à vélo</h1>
                <p>
                    <span>{texteAcc[mois - 1]} </span>
                    <span>Pour vous aider dans la planification, découvrez les renseignements pertinents colligés sur ce site web. Que vous soyez débutant, chevronné, ou simplement curieux, vous trouverez des conseils de matériel, de trajets et bien davantage.</span></p>
                <p>Bonne visite!</p>
            </Intro>
            {/* <TestWebP /> */}
            <NavAccueil />
            <Billets>Récents billets de blogue sur <ExternalLink href="https://touristechezsoi.ca/">Touriste chez soi</ExternalLink></Billets>
            <NavBlogue />
        </>
    )
}

const Intro = styled.div`
    text-align: center;
`

// const Temp = styled.div`
//     background-color: orange;
//     padding: 15px;
//     p:first-child {
//         font-size: large;
//     }
// `

const Billets = styled.h2`
    color: var(--c4);
    a {
        color: var(--c4);
    }
`

export default Accueil;