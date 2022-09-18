import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Limitations = () => {
    return (
        <Wrapper>
            <div>
                <h2>Cyclotouriste chez soi</h2>
                <p>Cyclotouristechezsoi.ca est une idée originale lancée en 2020 pour promouvoir le cyclotourisme, rendant accessible l'information utile ou nécessaire pour les voyageurs à vélo au Québec et ailleurs.</p>
            </div>
            <div>
                <h2>Le site web</h2>
                <p>Le site est gratuit d'utilisation et ne contient aucune annonce. Si vous aimez ce que vous voyez et que vous voulez soutenir l'auteur, <ExternalLink href="https://cyclotouristechezsoi.causevox.com/">vous pouvez faire un don</ExternalLink>. Pas de fenêtre surgissant (pop-up) pour vous culpabiliser si vous ne payez pas! Les liens dirigeant l'utilisateur vers d'autres sites (sites de cartographie, transporteurs, etc.) ne sont là qu'à titre indicatif, et non en tant que publicité. Le site web a été codé en React.js et devrait être adapté pour les écrans de largeurs variées. Le site web est hébergé par Hébergement Web Canada, basé à Montréal, sur des serveurs québécois. <ExternalLink href="http://www.visezjuste.uottawa.ca/pages/orthographe/nouvelle_orthographe.html">L'orthographe nouvelle</ExternalLink> a été utilisée dans le but de contribuer à la normalisation de cette réforme visant à améliorer notre belle langue française!</p>
            </div>
            <div>
                <h2>Responsabilité de l'auteur</h2>
                <p>L'auteur décline toute responsabilité en cas d'erreur sur ce site web, out tout autre problème se déroulant lors de la planification ou la réalisation d'un voyage à vélo. Le cyclotourisme contient des risques (et beaucoup de bonheur) et cela importe au voyageur de connaitre ses limites.</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Limitations;