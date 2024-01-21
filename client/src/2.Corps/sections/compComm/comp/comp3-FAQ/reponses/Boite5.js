import styled from "styled-components";

import CalculDepart from "../CalculDepart";

const Boite5 = () => {
    return (
        <Wrapper>
            <p>Dans la plupart des cas, cela dépend des dates de vos vacances. Par contre, si vous êtes flexible, ça devient intéressant d'y penser.</p>
            <p>En plein été, les fins de semaine sont sans doute plus populaires pour les voyages de toute sorte. Trouver un hébergement, parfois même un camping, peut devenir un parcours du combattant. Selon la longueur prévue de votre voyage, l'outil suivant vous aidera à planifier le scénario idéal pour prioriser la semaine de travail.</p>
            <p>Exemple : vous voulez faire le tour de la Gaspésie en 12 jours. En partant le dimanche ou le lundi, vous ne passerez que 2 nuitées de fin de semaine (vendredi et samedi soir) durant votre séjour, plutôt que jusqu'à 4 autrement.</p>
            <CalculDepart />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite5;