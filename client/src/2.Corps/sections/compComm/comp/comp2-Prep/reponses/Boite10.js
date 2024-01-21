import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const Boite10 = () => {
    return (
        <Wrapper>
            <p>Il est possible de se familiariser avec différentes options de trajets au sein de <Link to="/destinations">la sous-section</Link> sur ce site. Il y a autrement beaucoup de ressources pour tracer un itinéraire de vélo.</p>
            <p>Vélo Québec chapeaute <ExternalLink href="https://www.routeverte.com/">la Route verte</ExternalLink>, un réseau de sept véloroutes sillonnant le Québec par des voies cyclables sur routes et hors route.</p>
            <p>Les différentes <ExternalLink href="https://www.quebec.ca/tourisme-et-loisirs/services-industrie-touristique/organismes-partenaires#c20108">associations touristiques régionales</ExternalLink> sont chargées de promouvoir leurs réseaux cyclables. Plusieurs publient même des cartes vélo, disponibles en téléchargement ou en version papier.</p>
            <p>Quoiqu'il est possible de tracer un itinéraire détaillé en mode vélo par l'entremise de Google Maps, d'autres planificateurs existent qui sont davantage adaptés aux besoins des cyclistes. Parmi le lot, il y a <ExternalLink href="https://brouter.de/brouter-web">BRouter-Web</ExternalLink>, <ExternalLink href="https://cycle.travel/">Cycle Travel</ExternalLink>, <ExternalLink href="https://ridewithgps.com/">Ride with GPS</ExternalLink>, <ExternalLink href="https://www.bikemap.net/">Bikemap</ExternalLink> et <ExternalLink href="https://www.komoot.fr/">Komoot</ExternalLink>. Plusieurs de ceux-ci permettent de modifier la source des données cartographiques, de tracer des lignes en dehors des routes, par exemple lorsqu'une piste n'apparait pas sur la carte, et même de voir la proportion d'un trajet empruntant des pistes cyclables.</p>
            <p>Les services mentionnés ci-dessus pigent les données cartographiques à partir d'OpenStreetMap, mais on peut visualiser les voies cyclables directement sur <ExternalLink href="https://www.openstreetmap.org/">leur site</ExternalLink>, en choisissant CyclOSM ou OpenCycleMap parmi les couches disponibles dans le panneau à droite. Vous pouvez aussi consulter <ExternalLink href="https://touristechezsoi.weebly.com/blogue/la-cartographie-libre">ce billet de blogue détaillé</ExternalLink> sur l'utilisation de la cartographie libre.</p>
            <p>Puisque les routes numérotées ne sont pas toujours agréables à vélo, il y a un outil formidable pour vérifier la convivialité d'un tronçon. Les données du ministère des Transports peuvent être visualisées en activant la couche convivialité vélo sur <ExternalLink href="https://www.quebec511.info/fr/Carte/Default.aspx">la carte 511 Québec</ExternalLink> ou sur celle de <ExternalLink href="https://www.routeverte.com/">la Route verte</ExternalLink>.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite10;