import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import interditParDefault from "./donnees/interditParDefault.json"
import { faAngleRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const DormirGratuitement = () => {
    return (
        <Wrapper>
            <p>Il est possible de voyager à vélo sans toujours devoir débourser un montant parfois dérisoire chaque nuit. Les campings privés offrent souvent des activités, une piscine, des attraits touristiques et la possibilité d'y passer ses vacances sans sortir de son véhicule motorisé. Par contre, le cyclotouriste arrive normalement à l'heure du souper pour repartir tôt le lendemain, en profitant d'un bloc sanitaire et d'une table à piquenique. Or, une personne voulant manger un sandwich et une salade n'irait pas à un buffet cinq étoiles. Sous cette même optique, il existe des solutions de rechange aux campings payants.</p>
            <p>Cette carte est le fruit du travail de plusieurs cyclotouristes ayant ajouté des sites recommandés pour le bivouac. Il incombe à l'usager d'être responsable de ses actions, de respecter les règlements en vigueur, et bien sûr de laisser l'endroit propre pour les autres utilisateurs. <span>Le cyclotourisme a un nombre très limité d'adeptes, encore moins si on ne compte que ceux et celles dormant dans leurs tentes. Pour éviter que ces endroits de repos deviennent surutilisés, veuillez ne pas partager le lien de cette page ou cette carte librement sur les réseaux sociaux. Aidons-nous à conserver ces sites pour les générations futures!</span></p>
            <div>Carte</div>
            <h2>Est-ce que c'est légal?</h2>
            <p>Il n'y a aucune loi provinciale encadrant le camping sauvage mur-à-mur. <ExternalLink href="https://educaloi.qc.ca/actualites-juridiques/camping-peut-on-installer-sa-tente-nimporte-ou/">Sur les terres du domaine public</ExternalLink>, il est possible de s'installer, par contre il s'avère difficile de trouver des cartes pour ainsi connaitre leurs emplacements. Sur les abords des pistes cyclables, il y a souvent des panneaux interdisant le camping, et couramment la même situation aux haltes routières. Même si le camping n'est pas proscrit dans le cas d'un parc public, il peut être illégal de se trouver dans celui-ci après une certaine heure. Finalement, certaines municipalités comme Gaspé ont choisi d'interdire le camping sur tout le territoire, sauf aux endroits désignés.</p>
            <p>Le camping sauvage est par défaut interdit sur les emprises des pistes cyclables suivantes. Une signalisation claire l'indique sur place. <span>Cette liste n'est pas exhaustive.</span></p>
            <IllegalParDefault>
                <div>Carte</div>
                <ol type="A">
                    {
                        interditParDefault.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>
            </IllegalParDefault>
            <h2>Comment alors trouver un site si c'est interdit presque partout?</h2>
            <p>Plusieurs experts du camping sauvage ont l'habitude de monter leur campement en fin de journée, pour éviter le regard des curieux. De plus, un endroit près d'une route sera plus probablement visité par d'autres personnes. Cela rend les anciennes voies ferrées converties en pistes cyclables propices à l'hébergement improvisé.</p>
            <h2>C'est quoi le principe du <ExternalLink href="https://www.sanstrace.ca/principes">Sans trace?</ExternalLink></h2>
            <p>Il s'agit de laisser le site de camping dans le même état qu'avant son séjour. En résumé, on protège la végétation, on évite les feux et on rapporte ses déchets. Ça veut aussi dire qu'on ne harcèle pas les écureuils... même si c'est trop tentant!</p>
            <h2>Comment ajouter un emplacement de camping?</h2>
            <p>
                <FontAwesomeIcon icon={faAngleRight} />
                <span>Si vous n'avez qu'un ou deux sites à ajouter, veuillez remplir ce court formulaire.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faAnglesRight} />
                <span>À venir...</span>
            </p>
            <h2>J'aimerais proposer aux cyclotouristes de monter leurs tentes dans ma cour arrière.</h2>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const IllegalParDefault = styled.div`
    display: flex;
    justify-content: space-between;
    > * {
        width: 50%;
    }
`

export default DormirGratuitement;