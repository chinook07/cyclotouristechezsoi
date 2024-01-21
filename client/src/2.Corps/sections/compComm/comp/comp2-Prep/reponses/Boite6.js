import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Boite6 = () => {
    return (
        <Wrapper>
            <p>Il y a plusieurs facteurs à considérer ici. Solo, il est possible d'être le maitre de son destin. Duo, on a quelqu'un avec qui partager l'aventure. En famille, on s'assure que la prochaine génération reprenne le flambeau. Avec quelques amis ou collègues, ça peut plaire à certains, tandis que <ExternalLink href="https://www.adnduvelo.com/calendrier/">des évènements cyclotouristiques</ExternalLink> existent pour les gens qui veulent rouler en groupe.</p>
            <p>L'important, c'est de voyager avec des gens qui ont la même cadence et les mêmes objectifs. Sinon, vous pouvez toujours abandonner votre compagnon de voyage au prochain village!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite6;