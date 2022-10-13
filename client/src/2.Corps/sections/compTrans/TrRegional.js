import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import TableauRegions from "./comp/TableauRegions";

const ABCDEF = () => {
    return (
        <TrRegional>
            <h2>Sortir de la région métropolitaine</h2>
            <p>Pour sortir de la région métropolitaine, la situation s'est grandement améliorée au fil des années. Parmi les onze secteurs d'exo, le transporteur qui opère les trains de banlieue et les autobus des banlieues de Montréal, <ExternalLink href="https://exo.quebec/fr/planifier-trajet/velo/velo-a-bord">sept en offrent la possibilité</ExternalLink> de transporter son vélo à bord des bus, avec des heures et des dates d'utilisation harmonisées depuis quelques années.</p>
            <p>Normalement, jusqu'à deux vélos se mettent <ExternalLink href="https://exo.quebec/Media/Default/pdf/section4/velo-bus/Instructions_velobus.pdf">sur le support situé à l'avant (PDF)</ExternalLink>. Il faut s'assurer de bien placer le bras d'appui le plus près de la fourche possible. Pour aller à Sorel-Tracy ou à Vaudreuil avec les lignes express, il fallait jadis mettre son vélo non démonté en soute, mais ce n'est malheureusement plus possible depuis 2020.</p>
            <p>Pour ce qui est du train de banlieue, il n'y a plus de restrictions à l'heure de pointe, ni de limites sur le nombre de vélos acceptés par train. Notez par contre que l'accès aux voitures de train est ardu en raison des marches à pic et de l'étroitesse des portes.</p>
            <h2>Se déplacer dans les régions du Québec</h2>
            <p>Quelques transporteurs en dehors de Montréal offrent la combinaison vélo-bus ou vélo-train sur une échelle régionale, c'est-à-dire pour des distances de quelques dizaines de kilomètres. Cette catégorie s'avère utile en voyage pour sauter par-dessus une étape particulièrement difficile, par exemple entre Ste-Anne-de-Beaupré et Baie-St-Paul (Charlevoix), ou dans le nord-est de la Gaspésie.</p>
            <TableauRegions />
        </TrRegional>
    )
}

const TrRegional = styled.div``

export default ABCDEF;