import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Conference = () => {
    return (
        <Wrapper>
            <h2>Conférence prochaine</h2>
            <ul>
                <li>Célébrer les 30 ans de la Route verte, en dyade père-fils et en solo</li>
                <li>Date : <time dateTime="2026-03-02 19:00">2 mars 2026 à 19 h sur le web</time></li>
                <li>Inscription avec <ExternalLink href="https://www.velo.qc.ca/evenement/conference-et-salon/conference-velo-maison-des-cyclistes/conferences-velo-mag/celebrer-la-30e-annee-de-la-route-verte-en-dyade-pere-fils-et-en-solo/">Vélo Québec</ExternalLink></li>
                <li>Prix : 8,70 $ + taxes (gratuit pour les membres)</li>
            </ul>
            <p>En 2025, j'ai trouvé l’occasion parfaite pour initier mon fils de deux ans au cyclotourisme. Après quelques hésitations, j'ai tracé un itinéraire adapté, de Montréal jusqu’à Sherbrooke, avec comme point d’arrivée symbolique l’Université Bishop’s. Sur cinq jours, mon fils et moi avons pédalé à notre rythme, empruntant tantôt la Route verte, tantôt des pistes cyclables ou des routes plus directes.</p>
            <p>Le mois suivant, je me suis offert un voyage en solo. J'ai enfourché mon vélo pour parcourir le plus emblématique parc linéaire du Québec : le P’tit train du Nord. De là, j'ai poursuivi ma route sur la Véloroute des Draveurs et la nouvelle Voie verte Chelsea. Les gares patrimoniales, les rivières, les paysages variés et les rencontres marquantes jalonnent ce périple, qui s’inscrit comme un hommage aux 30 ans de la Route verte, l’un des plus beaux réseaux cyclables des Amériques.</p>
            <h3>Suivez-moi pendant la soirée :</h3>
            <ol>
                <li>Papa et fils vers Bishop's : <ExternalLink href="https://cycle.travel/map/journey/909918">Carte</ExternalLink> <ExternalLink href="https://www.crazyguyonabike.com/doc/papaetfils">Récit</ExternalLink></li>
                <li>Finir le triangle de l'ouest : <ExternalLink href="https://cycle.travel/map/journey/909920">Carte</ExternalLink> <ExternalLink href="https://www.crazyguyonabike.com/doc/boucleouest">Récit</ExternalLink></li>
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