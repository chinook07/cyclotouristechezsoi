import styled from "styled-components";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CampingInterdit from "./comp/comp4-Biv/CampingInterdit";
import interditParDefault from "./donnees/interditParDefault.json";
import { faAngleRight, faAnglesRight, faClose } from "@fortawesome/free-solid-svg-icons";
import CarteCampings from "./comp/comp4-Biv/CarteCampings";
import DemandeEdition from "./comp/comp4-Biv/DemandeEdition";
import FormAjout from "./comp/comp4-Biv/FormAjout";
import campingLaPatrie from "./images/camping-la-patrie.webp"

const DormirGratuitement = () => {
    const [montrerAjoutCarte, setMontrerAjoutCarte] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [ajoutsFaits, setAjoutsFaits] = useState(0);

    const alternerFormulaire = () => {
        if (montrerAjoutCarte) {
            setMontrerAjoutCarte(false)
            console.log("fermer", ajoutsFaits);
            let x = ajoutsFaits;
            setAjoutsFaits(x + 1); // F5 la carte quand tu fermes le formulaire
        } else {
            setMontrerAjoutCarte(true)
            console.log("ouvrir");
        }
    }

    const fermerMerci = () => {
        console.log("fermer");
        setConfirmation(false);
    }

	return (
        <Wrapper>
            <section>
                <p>Il est possible de voyager à vélo sans toujours devoir débourser un montant parfois dérisoire chaque nuit. Les campings privés offrent souvent des activités, une piscine, des attraits touristiques et la possibilité d'y passer ses vacances sans sortir de son véhicule motorisé. Par contre, le cyclotouriste partira tôt le lendemain, en profitant d'un bloc sanitaire et d'une table à piquenique. Or, une personne voulant manger un sandwich et une salade n'irait pas à un buffet cinq-étoiles. Sous cette même optique, il existe des solutions de rechange aux campings payants.</p>
                <p>Cette carte est le fruit du travail de plusieurs cyclotouristes ayant ajouté des sites recommandés pour le bivouac. Il incombe à l'usager d'être responsable de ses actions, de respecter les règlements en vigueur, et bien sûr de laisser l'endroit propre pour les autres utilisateurs. <span>Le cyclotourisme a un nombre très limité d'adeptes, encore moins si on ne compte que ceux et celles dormant dans leurs tentes. Pour éviter que ces endroits de repos deviennent surutilisés, veuillez ne pas partager le lien de cette page librement sur les réseaux sociaux. Aidons-nous à conserver ces sites pour les générations futures!</span></p>
                {/* <CarteGoogle title="carte des campings gratuits" src="https://www.google.com/maps/d/u/0/embed?mid=1obdd8oU_9xShpHUY-L29RT6OwxerfCGI&ehbc=2E312F"></CarteGoogle> */}
                <p><strong>Attention! La nouvelle carte est en mode bêta! Certaines fonctionnalités peuvent être non-fonctionnelles.</strong></p>
                <CarteCampings ajoutsFaits={ajoutsFaits} />
            </section>
            {/* <section>
                <h2>Comment ajouter un emplacement de camping?</h2>
                <p>Vous pouvez maintenant ajouter un site directement sur la carte <CommeUnLien onClick={alternerFormulaire} tabIndex="0">par ce court formulaire</CommeUnLien>, sans délai et sans devoir apprendre à utiliser Google My Maps.</p>
                {
                    montrerAjoutCarte &&
                    <FormAjout
                        confirmation={confirmation}
                        setConfirmation={setConfirmation}
                        setMontrerAjoutCarte={setMontrerAjoutCarte}
                        ajoutsFaits={ajoutsFaits}
                        setAjoutsFaits={setAjoutsFaits}
                    />
                }
                {
                    confirmation &&
                    <Confirm>
                            <p>Merci d'avoir contribué à la carte!</p>
                            <button onClick={fermerMerci}><FontAwesomeIcon icon={faClose} /></button>
                        </Confirm>
                }
            </section> */}
            <section>
                <h2>Est-ce que c'est permis?</h2>
                <p>Il n'y a aucune loi provinciale encadrant le camping sauvage mur-à-mur. <ExternalLink href="https://educaloi.qc.ca/actualites-juridiques/camping-peut-on-installer-sa-tente-nimporte-ou/">Sur les terres du domaine public</ExternalLink>, il est possible de s'installer, par contre il s'avère difficile de trouver des cartes pour ainsi connaitre leurs emplacements. Sur les abords des pistes cyclables, il y a souvent des panneaux interdisant le camping, et couramment la même situation aux haltes routières. Même si le camping n'est pas proscrit dans le cas d'un parc public, il peut être illégal de se trouver dans celui-ci après une certaine heure. Finalement, certaines municipalités comme Gaspé ont choisi d'interdire le camping sur tout le territoire, sauf aux sites aménagés.</p>
                <p>Le camping sauvage est par défaut proscrit sur les emprises des pistes cyclables suivantes. Une signalisation claire l'indique sur place. <span>Cette liste n'est pas exhaustive.</span></p>
                <IllegalParDefault>
                    <CampingInterdit aria-hidden />
                    <ol type="A">
                        {interditParDefault.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ol>
                </IllegalParDefault>
            </section>
            <section>
                <h2>Comment alors trouver un site si c'est interdit presque partout?</h2>
                <p>Plusieurs experts du camping sauvage ont l'habitude de monter leur campement en fin de journée, pour éviter le regard des curieux. De plus, un endroit près d'une route sera plus probablement visité par d'autres personnes. Cela rend les anciennes voies ferrées converties en pistes cyclables propices à l'hébergement improvisé.</p>
            </section>
            <section>
                <h2>Est-ce qu'il y a un moyen pour trouver l'emplacement des terres publiques?</h2>
                <p>Malheureusement, ce n'est pas aussi facile que ça devrait l'être. Il n'existe pas d'atlas détaillé au niveau provincial, par contre, il est souvent possible de trouver des plans montrant qui détient quel terrain, sur le site web des <abbr title="municipalités régionales de comté">MRC</abbr>. Utilisez les mots-clés <em>cartographie interactive MRC (nom de la MRC)</em> sur votre moteur de recherche préféré. Quelques exemples de cartes :</p>
                <ul>
                    <li><ExternalLink href="https://mrcargenteuil.maps.arcgis.com/apps/webappviewer/index.html?id=3bd2482392ee491d91f198a004ebab18&extent=-8360793.2707%2C5698027.9677%2C-8214034.1764%2C5770184.5224%2C102100">MRC d'Argenteuil, Laurentides</ExternalLink></li>
                    <li><ExternalLink href="http://cartographie.mrclaurentides.qc.ca/mobile/">MRC des Laurentides, Laurentides</ExternalLink></li>
                    <li><ExternalLink href="http://68.171.65.53/99%7CMatrice-Graphique">MRC de Papineau, Outaouais</ExternalLink></li>
                </ul>
                <figure>
                    <img src={campingLaPatrie} alt="tente sous les arbres près d'une rivière" />
                    <figcaption>Parfois, on trouve de vrais joyaux sur le domaine public.</figcaption>
                </figure>
            </section>
            <section>
                <h2>C'est quoi le principe du Sans trace?</h2>
                <p>Il s'agit de laisser le site de camping dans le même état qu'avant son séjour. En résumé, on protège la végétation, on évite les feux et on rapporte ses déchets. Ça veut aussi dire qu'on ne harcèle pas les écureuils... même si ces sales bêtes ont ravagé votre jardin!</p>
                <p>Lire <ExternalLink href="https://www.sanstrace.ca/principes">les sept principes du Sans trace</ExternalLink>.</p>
            </section>
            <section>
                <h2>Comment ajouter un emplacement de camping?</h2>
                <p>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Si vous n'avez qu'un ou deux sites à ajouter, veuillez remplir <CommeUnLien onClick={alternerFormulaire} tabIndex="0">ce court formulaire</CommeUnLien>.</span>
                </p>
                {
                    montrerAjoutCarte &&
                    <FormAjout
                        confirmation={confirmation}
                        setConfirmation={setConfirmation}
                        setMontrerAjoutCarte={setMontrerAjoutCarte}
                        ajoutsFaits={ajoutsFaits}
                        setAjoutsFaits={setAjoutsFaits}
                    />}
                <p>
                    <FontAwesomeIcon icon={faAnglesRight} />
                    <span>Pour ajouter plusieurs lieux, la meilleure façon serait de le faire directement dans <ExternalLink href="https://www.google.com/maps/d/edit?mid=1obdd8oU_9xShpHUY-L29RT6OwxerfCGI&usp=sharing">Mes cartes Google en mode édition</ExternalLink>. Pour être en mesure de modifier la carte, vous devez en faire la demande ci-dessous. Malheureusement, il faut normalement un compte Google, sinon ça risque de ne pas fonctionner.</span>
                </p>
                <DemandeEdition />
                <p>L'auteur travaille actuellement pour migrer les données sur une carte interactive Leaflet.js. En attendant, il faut malheureusement continuer à dépendre de Google.</p>
            </section>
            <section>
                <h2>J'aimerais proposer aux cyclotouristes de monter leurs tentes dans ma cour arrière.</h2>
                <p>Plusieurs cyclistes de passage en seront reconnaissants. Pour ajouter votre terrain, veuillez suivre les instructions ci-dessus.</p>
                <p>Si vous ne voulez pas que les gens cognent chez vous sans préavis, vous pouvez choisir un emplacement approximatif (≈500 mètres). Dans ce cas, laissez des coordonnées dans la description, par exemple une adresse courriel, un site web personnel, un profil sur Facebook, etc.</p>
            </section>
		</Wrapper>
	);
};

const Wrapper = styled.div`
    section {
        p > svg {
            margin-right: 10px;
        }
        figure {
            margin: 0 auto;
            max-width: 450px;
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
`

const CarteGoogle = styled.iframe`
    height: 500px;
    max-height: 80vh;
    width: 100%;
`

const Confirm = styled.div`
    background-color: var(--c6);
    border-radius: 10px;
    display: flex;
    gap: 10px;
    /* justify-content: space-evenly; */
    /* left: 50%; */
    margin: 0 auto;
    padding: 10px;
    /* position: absolute; */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
    width: fit-content;
    p {
        color: var(--c11);
        font-weight: bold;
        margin: 0;
        text-align: center;
    }
    button {
        cursor: pointer;
    }
`

const IllegalParDefault = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	> * {
		height: 100%;
		width: 50%;
	}
	@media screen and (min-width: 900px) {
		li {
			margin: 4% 0;
		}
	}
	@media screen and (max-width: 600px) {
		flex-direction: column;
		> * {
			width: 100%;
		}
	}
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default DormirGratuitement;
