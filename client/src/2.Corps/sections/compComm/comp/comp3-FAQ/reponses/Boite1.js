import styled from "styled-components";

import CalculJours from "../CalculJours";

const Boite1 = () => {
    return (
        <Wrapper>
            <p>Pour ne pas trop se trouver serré dans le temps et devoir pédaler une distance immesurable, vaut mieux bien prévoir le nombre de jours nécessaires pour le périple. Utilisez cet outil pour estimer la durée d'un trajet selon votre profil. Des jours de repos vous seront suggérés si votre voyage dure 12 jours ou plus.</p>
            <CalculJours />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite1;