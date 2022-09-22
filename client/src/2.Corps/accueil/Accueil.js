import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import Carrousel from "./comp/Caroussel";
import NavAccueil from "./comp/NavAccueil";
import NavBlogue from "./comp/NavBlogue";

const Accueil = () => {
    return (
        <Wrapper>
            <Carrousel />
            <Intro>
                <h1>Explorez le Québec à vélo</h1>
                <p>L'hiver s'installe prochainement au Québec. Pour vous aider à planifier vos sorties de l'an prochain en cyclotourisme, découvrez les renseignements pertinents colligés sur ce site web. Que vous soyez débutant, chevronné, ou simplement curieux, vous trouverez des conseils de matériel, de trajets et bien davantage.</p>
                <p>Bonne visite!</p>
            </Intro>
            <NavAccueil />
            <Billets>Récents billets de blogue sur <ExternalLink href="https://touristechezsoi.ca/">Touriste chez soi</ExternalLink></Billets>
            <NavBlogue />
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

const Intro = styled.div`
    text-align: center;
`

const Billets = styled.h2`
    color: var(--c4);
    a {
        color: var(--c4);
    }
`

export default Accueil;