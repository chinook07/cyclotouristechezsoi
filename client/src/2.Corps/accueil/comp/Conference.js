import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Conference = () => {
    return (
        <Wrapper>
            <h2>Conférence à venir</h2>
            <ul>
                <li>Cyclotourisme de proximité : trois régions à découvrir tout près</li>
                <li>Date : <time dateTime="2025-02-10 19:00">10 février 2025 à 19 h sur le web</time></li>
                <li>Inscription avec <ExternalLink href="https://www.velo.qc.ca/evenement/conference-et-salon/conference-velo-maison-des-cyclistes/conferences-velo-mag/nicola-zoghb-cyclotourisme-proximite/">Vélo Québec</ExternalLink></li>
                <li>Prix : 8,70 $ + taxes (gratuit pour les membres)</li>
            </ul>
            <p>L’idée née durant la pandémie était de sillonner de fond en comble une région entière à proximité de la maison. La première boucle d’une semaine m’a fait tomber amoureux de la Montérégie, ses rangs bucoliques, ses cours d’eau et ses belles pistes cyclables. Le deuxième était 2 fois plus long et 3 fois plus difficile. Elle m’amena à mieux découvrir les Cantons-de-l’Est, ses pénibles côtes, dont le mont Mégantic, ainsi que ses charmants villages et ses centaines d’attraits. En 2024, les astres s’étaient enfin alignés pour une virée au Vermont. J’ai donc prévu une boucle de 10 jours pour rouler sur la toute nouvelle Lamoille Valley Rail Trail dans le nord de l’état.</p>
            <p>Pas besoin d’aller très loin pour se dépayser en cyclotourisme. Découvrez avec moi les plus belles routes et pistes cyclables à proximité de Montréal. On abordera aussi la planification d’un itinéraire, l’hébergement, ainsi que les catastrophes naturelles!</p>
            <h3>Suivez-moi pendant la soirée :</h3>
            <ol>
                <li>La Montérégie : <ExternalLink href="https://cycle.travel/map/journey/620147">Carte</ExternalLink> <ExternalLink href="https://www.crazyguyonabike.com/doc/tourmonteregie">Récit</ExternalLink></li>
                <li>Les Cantons-de-l'Est : <ExternalLink href="https://cycle.travel/map/journey/620148">Carte</ExternalLink> <ExternalLink href="https://www.crazyguyonabike.com/doc/tourcantons">Récit</ExternalLink></li>
                <li>Le nord du Vermont : <ExternalLink href="https://cycle.travel/map/journey/671819">Carte</ExternalLink> <ExternalLink href="https://www.crazyguyonabike.com/doc/nordvermont">Récit</ExternalLink></li>
            </ol>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c3);
    border-radius: 10px;
    margin: 0 auto;
    max-width: 95%;
    padding: 10px;
    width: 500px;
    h2 {
        margin: 10px 0;
        text-align: center;
    }
    ul {
        list-style-type: square;
        padding-left: 20px;
    }
`

export default Conference;