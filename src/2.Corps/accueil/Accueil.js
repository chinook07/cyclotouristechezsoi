import styled from "styled-components";

import Carrousel from "./comp/Caroussel";
import NavAccueil from "./comp/NavAccueil";

const Accueil = () => {
    return (
        <Wrapper>
            <Carrousel />
            <h1>Explorez le Québec à vélo</h1>
            <p>L'hiver s'installe prochainement au Québec. Pour vous aider à planifier vos sorties de l'an prochain en cyclotourisme, découvrez les renseignements pertinents colligés sur ce site web. Que vous soyez débutant, chevronné, ou simplement curieux, vous trouverez des conseils de matériel, de trajets et bien davantage.</p>
            <p>Bonne visite!</p>
            <NavAccueil />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Accueil;