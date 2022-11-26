import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import AvionImages from "./comp/AvionImages";

const ABCDEF = () => {
    return (
        <TrInterurbain>
            <section>
                <h2>Prendre l'autocar pour aller plus loin</h2>
                <p>L'autocar dessert toutes les régions du Québec, et l'offre des départs est généralement plus généreuse qu'avec le train, les billets étant souvent moins chers. Les transporteurs régissent les conditions d'utilisation, mais il faut faire affaire avec <ExternalLink href="https://www.expedibus.com/fr">Expédibus</ExternalLink> à la largeur du Québec (sauf pour en sortir) pour transporter son vélo. Avant de partir en voyage, il est fortement recommandé de suivre les étapes suivantes :</p>
                <p>Renseignez-vous avec le transporteur sur l'emballage requis pour un vélo.</p>
                <p>Appelez le point de service de départ pour vérifier la disponibilité de boites, ou le cas échéant, de sacs. Si les réserves se font basses, il est sage de demander si une boite peut être mise de côté pour son voyage, ou s'ils peuvent en faire venir avant sa date de départ. Attention : selon le transporteur, l'embarquement avec un vélo pourrait ne pas être possible ailleurs qu'aux <ExternalLink href="https://expedibus.com/fr/points-de-services">points de service d'Expédibus</ExternalLink>.</p>
                <p>Arrivez de 45 à 60 minutes à l'avance pour avoir le temps de démonter le vélo s'il le faut.</p>
            </section>
            <section>
                <h2>Train et vélo : le meilleur des deux mondes</h2>
                <p>À ce jour, il est possible de transporter une bicyclette sur tous les trains ayant un fourgon à bagages. Selon la ligne de train, il faudra peut-être démonter le vélo et le placer dans une boite. <strong>À noter que le service d'enregistrement des vélos a été aboli sur les trains du Corridor Québec – Windsor, et ne sera rétabli que par le remplacement de la flotte de trains, <ExternalLink href="https://corpo.viarail.ca/fr/projets-infrastructure/parc-ferroviaire/remplacement-flotte">progressivement au cours des prochaines années</ExternalLink>.</strong></p>
                <p>Gare aux gares intermédiaires! L'enregistrement des vélos n'est pas possible partout. Utilisez la page <ExternalLink href="https://www.viarail.ca/fr/planifiez-votre-voyage/trouvez-une-gare">Trouvez une gare</ExternalLink> et référez-vous à ce que l'on trouve sous la rubrique Bagages.</p>
                <p>Avant de réserver votre billet, lisez <ExternalLink href="https://www.viarail.ca/fr/planifier/baggages/articles-hors-norme">toute l'information de VIA Rail</ExternalLink>! Cela vous évitera de mauvaises surprises. À noter que le transport de vélos n'est pas possible sur la ligne d'Amtrak de Montréal à New York, mais l'est sur la <ExternalLink href="https://francais.amtrak.com/onboard/bring-your-bicycle-onboard/bikes-on-the-vermonter-train.html">Vermonter</ExternalLink>. La première gare de cette ligne se situe à St-Albans au Vermont, soit à 115 km au sud-est de la métropole québécoise.</p>
            </section>
            <section>
                <h2>Au-delà des horizons : prendre l'avion</h2>
                <AvionImages />
                <p>S'envoler dans les airs sera toujours plus compliqué que prendre un train, surtout avec un vélo. En plus des files d'attentes, des contrôles de sécurité et autres trépidations, il faut s'assurer de bien emballer son vélo. Certaines lignes aériennes imposent la boite, d'autres ont des exigences plus souples. Peu importe l'emballage fourni, il n'est que rarement fourni par la ligne aérienne ou disponible pour l'achat à l'aéroport. Il serait parfois plus simple de se trouver un moyen de transport pour rejoindre l'aéroport avec son vélo déjà démonté.</p>
                <p>Contrairement à ce qui est du transport par autocar, votre vélo sera manipulé par plusieurs personnes (et machines) avant d'arriver à bon port. <strong>Assurez-vous de bien protéger les pièces sensibles de votre monture pour éviter les mauvaises surprises à destination.</strong></p>
            </section>
        </TrInterurbain>
    )
}

const TrInterurbain = styled.div``

export default ABCDEF;