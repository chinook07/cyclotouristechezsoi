import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp, faCar, faBusAlt, faTrain } from "@fortawesome/free-solid-svg-icons";
import Moment from "./Moment";
import ListeLiens from "./ListeLiens";
import Diff from "./Diff";
import DeuxFiguresPetit from "../../../../CompReutilisables/DeuxFiguresPetit";
import ventMontreal from "../images/vent-montreal.png";
import ventRimouski from "../images/vent-rimouski.png";
import diff1 from "../images/difficulte2.png";
import diff2 from "../images/difficulte1.png";

const Comm1 = ({ boiteOuverte, setBoiteOuverte }) => {

    const ouvrirFermer = (index) => {
        if (boiteOuverte === index) {
            const fermer = document.getElementById(`acc-tete-${index}`);
            fermer.ariaExpanded = false;
            setBoiteOuverte();
        } else {
            let fermerTous = Array.from(document.getElementsByClassName("acc-tetes-A"));
            fermerTous.forEach(item => item.ariaExpanded = false);
            const ouvrir = document.getElementById(`acc-tete-${index}`);
            ouvrir.ariaExpanded = true;
            setBoiteOuverte(index);
        }
    }

    const photo1 = {
        "src": ventMontreal,
        "alt": "graphique montrant les vents dominants de l'ouest à Montréal durant l'été",
        "cap": "Les vents à Montréal.",
        "lien": "Weather Spark",
        "href": "https://fr.weatherspark.com/s/25077/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Montr%C3%A9al-Canada#Figures-WindDirection"
    }

    const photo2 = {
        "src": ventRimouski,
        "alt": "graphique montrant les vents dominants de l'ouest et du sud à Rimouski durant l'été",
        "cap": "Les vents à Rimouski.",
        "lien": "Weather Spark",
        "href": "https://fr.weatherspark.com/s/27467/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Rimouski-Canada#Figures-WindDirection"
    }

    const photo3 = {
        "src": diff1,
        "alt": "dénivelé d'un trajet sur Ride With GPS",
        "cap": "Un calcul d'itinéraire sur Ride with GPS."
    }

    const photo4 = {
        "src": diff2,
        "alt": "dénivelé d'un trajet sur Google Maps",
        "cap": "Un calcul d'itinéraire sur Google Maps."
    }

    return (
        <Wrapper>
            <h2>Concevoir un plan</h2>
            <ul>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(0)}>
                        <button
                            aria-controls="acc-corps-0"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-0"
                            type="button"
                        >Choisir son style d'aventure</button>
                        {
                            boiteOuverte === 0
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 0 &&
                            <Infos
                                id="acc-corps-0"
                                aria-labelledby="acc-tete-0"
                                role="panel"
                            >
                                <p>Le premier choix à faire est celui de l'hébergement.</p>
                                <h4>Hébergement sous un toit</h4>
                                <p>En mode léger, on dort à l'hôtel, au motel, au gite du passant, sinon on se sert des réseaux d'hébergement pour cyclistes, tel que <ExternalLink href="https://fr.warmshowers.org/">Warmshowers</ExternalLink>. Cette option permet de maintenir un certain niveau de confort tout en transportant une charge réduite.</p>
                                <h4>Hébergement dans la tente</h4>
                                <p>En mode autonomie, on monte sa tente dans un terrain de camping, ou bien l'on trouve une place à l'abri des regards, vers le crépuscule, tout en s'assurant de laisser l'espace propre. On peut aussi demander aux gens la permission de monter sa tente sur leur terrain. Bien sûr, lors d'un long voyage en autonomie, ça peut être relaxant de louer une chambre de temps à autre pour dormir dans un vrai lit.</p>
                                <p>Dormir dans sa tente comporte deux principaux avantages. Ce type d'aventure nous permet de respecter un budget restreint et conserver la spontanéité du voyage.</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(1)}>
                        <button
                            aria-controls="acc-corps-1"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-1"
                            type="button"
                        >Se rendre au point de départ</button>
                        {
                            boiteOuverte === 1
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 1 &&
                            <Infos
                                id="acc-corps-1"
                                aria-labelledby="acc-tete-1"
                                role="panel"
                            >
                                <p>L'avantage du cyclotourisme est indéniable : on peut commencer ses vacances à partir de sa porte d'entrée. Par contre, pour explorer une région plus lointaine ou pour éviter de devoir pédaler vers le point de départ, on peut prendre un moyen de transport avec son vélo. Les options seront examinées dans <Link to="/transport">cette rubrique</Link>, mais en voici un résumé :</p>
                                <p>
                                    <FontAwesomeIcon icon={faBusAlt} />
                                    <span>En autocar : besoin d'une boite ou d'un sac géant, et permet d'avoir accès à la plupart des villes du Québec.</span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faTrain} />
                                    <span>En train : pas toujours faisable, souvent possible sans démontage, autrement une boite y est requise.</span>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faCar} />
                                    <span>En voiture : pas besoin de démonter le vélo, mais il faut revenir au point A!</span>
                                </p>
                                <p>Il existe des services de transport pour cyclotouristes dans certaines régions. Cela est normalement plus dispendieux, mais l'offre est davantage adaptée aux besoins des voyageurs à deux roues.</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(2)}>
                        <button
                            aria-controls="acc-corps-2"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-2"
                            type="button"
                        >Une boucle vs. un trajet linéaire</button>
                        {
                            boiteOuverte === 2
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 2 &&
                            <Infos
                                id="acc-corps-2"
                                aria-labelledby="acc-tete-2"
                                role="panel"
                            >
                                <p>Si l'on accepte de recourir à un moyen de transport motorisé autre que sa propre voiture, il sera possible d'effectuer un trajet linéaire plutôt qu'une boucle. En roulant par exemple de Montréal à Québec, on maximise la probabilité d'avoir <Gras>le vent dans le dos</Gras>, puisque les vents dominants soufflent de l'ouest vers l'est. Voir <CommeUnLien onClick={() => ouvrirFermer(3)} tabIndex="0">la prochaine rubrique</CommeUnLien> pour davantage de renseignements. Autrement, rouler sur le P'tit Train du Nord entre Mont-Laurier et Montréal permet d'avoir <Gras>plus de descentes</Gras> que de montées. De vraies vacances, quoi!</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(3)}>
                        <button
                            aria-controls="acc-corps-3"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-3"
                            type="button"
                        >Les vents dominants</button>
                        {
                            boiteOuverte === 3
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 3 &&
                            <Infos
                                id="acc-corps-3"
                                aria-labelledby="acc-tete-3"
                                role="panel"
                            >
                                <p>Si le vent peut souffler de n'importe quelle direction, il suit plus ou moins une règle de base : être le plus chiant possible envers les cyclistes circulant vers l'ouest.</p>
                                <DeuxFiguresPetit photo1={photo1} photo2={photo2} />
                                <p>Tel qu'aperçu sur les tableaux ci-dessus, les vents d'ouest dans le sud du Québec dominent principalement en début juillet, tandis que dans le Bas-Saint-Laurent, les vents du sud sont presque aussi fréquents à partir de ce même moment. À noter qu'un vent de l'est durant l'été s'accompagne souvent de pluie et de températures froides.</p>
                                <p>Les vents dominants au Québec :</p>
                                <ListeLiens />
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(4)}>
                        <button
                            aria-controls="acc-corps-4"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-4"
                            type="button"
                        >Le meilleur moment de l'année</button>
                        {
                            boiteOuverte === 4
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 4 &&
                            <Infos
                                id="acc-corps-4"
                                aria-labelledby="acc-tete-4"
                                role="panel"
                            >
                                <p>Il s'agit d'une question de préférence. Il y a grosso modo de quatre à cinq mois qui sont propices au cyclotourisme. Chaque période de cette courte saison amène ses bienfaits et ses importunités.</p>
                                <Moment />
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(5)}>
                        <button
                            aria-controls="acc-corps-5"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-5"
                            type="button"
                        >Le niveau de difficulté</button>
                        {
                            boiteOuverte === 5
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 5 &&
                            <Infos
                                id="acc-corps-5"
                                aria-labelledby="acc-tete-5"
                                role="panel"
                            >
                                <p>Ce qui empêche les gens de gouter au cyclotourisme, c'est souvent l'effort physique requis. Or, on peut choisir un parcours selon sa difficulté, et rouler une distance qu'on trouve acceptable. La vallée du fleuve Saint-Laurent, celle de l'Outaouais, ainsi que les nombreuses pistes cyclables aménagées sur d'anciennes emprises ferroviaires, présentent des espaces conviviaux pour les débutants. Le reste du Québec offre des collines pour ceux et celles qui le souhaitent. Comment choisir une destination qui respecte nos capacités physiques? Dans votre planificateur d'itinéraire préféré, une fois que vous aurez choisi un trajet, vous aurez un dénivelé positif (ascension) et négatif (descente).</p>
                                <DeuxFiguresPetit photo1={photo3} photo2={photo4} />
                                <p>À noter que le dénivelé pour un même trajet (voir images ci-dessus) peut différer selon la calculateur utilisé, puisque la source des données topographiques n'est pas la même.</p>
                                <p>Plutôt qu'avec des RPM, une façon scientifique et ludique de connaitre la difficulté d'un trajet consiste à diviser le nombre de mètres montés par le nombre de kilomètres franchis. Cela nous donne aussi le nombre de <Gras>jurons par minute</Gras> qu'un cycliste risque de grommeler.</p>
                                <p>Ce calcul peut être fait pour estimer la difficulté d'une journée ou bien d'un voyage au complet. Il est déconseillé pour les courtes distances.</p>
                                <Diff />
                                <div>*La difficulté dépend aussi d'autres facteurs, tels la surface de roulement, la distribution du dénivelé sur un trajet (une énorme côte vs. des faux-plats toute la journée), le nombre de km effectué par jour, la vitesse et la direction du vent, ainsi que la motivation.</div>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(6)}>
                        <button
                            aria-controls="acc-corps-6"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-6"
                            type="button"
                        >Partir en bonne compagnie</button>
                        {
                            boiteOuverte === 6
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 6 &&
                            <Infos
                                id="acc-corps-6"
                                aria-labelledby="acc-tete-6"
                                role="panel"
                            >
                                <p>Il y a plusieurs facteurs à considérer ici. Solo, il est possible d'être le maitre de son destin. Duo, on a quelqu'un avec qui partager l'aventure. En famille, on s'assure que la prochaine génération reprenne le flambeau. Avec quelques amis ou collègues, ça peut plaire à certains, tandis que <ExternalLink href="https://www.adnduvelo.com/calendrier/">des évènements cyclotouristiques</ExternalLink> existent pour les gens qui veulent rouler en groupe.</p>
                                <p>L'important, c'est de voyager avec des gens qui ont la même cadence et les mêmes objectifs. Sinon, vous pouvez toujours abandonner votre compagnon de voyage au prochain village!</p>
                        </Infos>
                    }
                </Boite>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    > ul {
        list-style-type: none;
        padding: 0;
    }
`

const Boite = styled.li`
    background-color: var(--c2);
    border-radius: 10px;
    h3 {
        align-items: center;
        background-color: var(--c3);
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        transition: all 0.2s;
        button {
            background-color: unset;
            border: none;
            cursor: pointer;
            font: unset;
            text-align: left;
        }
        &:hover {
            background-color: var(--c1);
            transition: all 0.2s;
        }
    }
`

const Infos = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

const Gras = styled.span`
    font-weight: bold;
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default Comm1;