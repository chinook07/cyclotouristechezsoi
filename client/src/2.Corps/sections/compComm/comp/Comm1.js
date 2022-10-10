import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp, faCar, faBusAlt, faTrain } from "@fortawesome/free-solid-svg-icons";
import Moment from "./Moment";
import Diff from "./Diff";
import DeuxFiguresPetit from "../../../../CompReutilisables/DeuxFiguresPetit";
import ventMontreal from "../images/vent-montreal.png";
import ventRimouski from "../images/vent-rimouski.png";
import diff1 from "../images/difficulte2.png";
import diff2 from "../images/difficulte1.png";

const Comm1 = ({boiteOuverte, setBoiteOuverte}) => {

    const ouvrirFermer = (index) => {
        boiteOuverte === index ? setBoiteOuverte() : setBoiteOuverte(index)
    }

    const photo1 = {
        "src": ventMontreal,
        "alt": "graphique montrant les vents dominants à Montréal durant l'été",
        "cap": "Les vents à Montréal.",
        "lien": "Weather Spark",
        "href": "https://fr.weatherspark.com/s/25077/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Montr%C3%A9al-Canada#Figures-WindDirection"
    }

    const photo2 = {
        "src": ventRimouski,
        "alt": "graphique montrant les vents dominants à Rimouski durant l'été",
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
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Choisir son style d'aventure</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Le premier choix à faire est celui de l'hébergement.</p>
                            <p>En mode léger, on dort à l'hôtel, au motel, au gite du passant, sinon on se fait héberger par des gens par l'entremise du <ExternalLink href="https://fr.warmshowers.org/">réseau Warmshowers</ExternalLink>. Cette option permet de maintenir un certain niveau de confort.</p>
                            <p>En mode autonomie, on monte sa tente dans un terrain de camping, ou bien l'on trouve une place à l'abri des regards, vers le crépuscule, tout en s'assurant de laisser l'espace propre. On peut aussi demander aux gens la permission de monter sa tente sur leur terrain. Bien sûr, lors d'un long voyage en autonomie, ça peut être relaxant de louer une chambre de temps à autre pour dormir dans un vrai lit.</p>
                            <p>Le coucher sous la tente est souhaitable pour les gens voulant respecter un budget restreint, tout en conservant la spontanéité du voyage.</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(1)}>
                    <span>Se rendre au point de départ</span>
                    {
                        boiteOuverte === 1
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 1 &&
                    <Infos>
                            <p>L'avantage du cyclotourisme est indéniable : on peut commencer ses vacances à partir de sa porte d'entrée. Par contre, pour explorer une région plus lointaine ou pour éviter de devoir pédaler vers le point de départ, on peut prendre un moyen de transport avec son vélo. Les options seront examinées dans <Link to="/transport">cette rubrique</Link>, mais en voici un résumé :</p>
                            <p>
                                <FontAwesomeIcon icon={faCar} />
                                <span>En voiture : pas besoin de démonter le vélo, mais il faut revenir au point A!</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBusAlt} />
                                <span>En autocar : besoin d'une boite ou d'un sac géant, et permet d'avoir accès à la plupart des villes du Québec.</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faTrain} />
                                <span>En train : pas toujours faisable, souvent possible sans démontage, autrement une boite y est requise.</span>
                            </p>
                            <p>Il existe des services de transport pour cyclotouristes dans certaines régions. Cela est normalement plus dispendieux, mais l'offre est davantage adaptée aux besoins des voyageurs à deux roues.</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(2)}>
                    <span>Une boucle vs. un trajet linéaire</span>
                    {
                        boiteOuverte === 2
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 2 &&
                    <Infos>
                            <p>Si l'on accepte de recourir à un moyen de transport motorisé autre que sa propre voiture, il sera possible d'effectuer un trajet linéaire plutôt qu'une boucle. En roulant par exemple de Montréal à Québec, on maximise la probabilité d'avoir le vent dans le dos, puisque les vents dominants soufflent de l'ouest vers l'est. Voir la prochaine rubrique pour davantage de renseignements. Autrement, rouler sur le P'tit Train du Nord entre Mont-Laurier et Montréal permet d'avoir plus de descentes que de montées. De vraies vacances, quoi!</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(3)}>
                    <span>Les vents dominants</span>
                    {
                        boiteOuverte === 3
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 3 &&
                    <Infos>
                            <p>Si le vent peut souffler de n'importe quelle direction, il suit plus ou moins une règle de base : être le plus chiant possible envers les cyclistes circulant vers l'ouest.</p>
                            <DeuxFiguresPetit photo1={photo1} photo2={photo2} />
                            <p>Tel qu'aperçu sur les tableaux ci-dessus, les vents d'ouest dans le sud du Québec dominent principalement en début juillet, tandis que dans le Bas-Saint-Laurent, les vents du sud sont presque aussi fréquents à partir de ce même moment. À noter qu'un vent de l'est durant l'été s'accompagne souvent de pluie et de températures froides.</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(4)}>
                    <span>Le meilleur moment de l'année</span>
                    {
                        boiteOuverte === 4
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 4 &&
                    <Infos>
                            <p>Il s'agit d'une question de préférence. Il y a grosso modo de quatre à cinq mois qui sont propices au cyclotourisme. Chaque période de cette courte saison amène ses bienfaits et ses importunités.</p>
                            <Moment />
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(5)}>
                    <span>Le niveau de difficulté</span>
                    {
                        boiteOuverte === 5
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 5 &&
                    <Infos>
                            <p>Ce qui empêche les gens de gouter au cyclotourisme, c'est souvent l'effort physique requis. Or, on peut choisir un parcours selon sa difficulté, et rouler une distance qu'on trouve acceptable. La vallée du fleuve Saint-Laurent, celle de l'Outaouais, ainsi que les nombreuses pistes cyclables aménagées sur d'anciennes emprises ferroviaires, présentent des espaces conviviaux pour les débutants. Le reste du Québec offre des collines pour ceux et celles qui le souhaitent. Comment choisir une destination qui respecte nos capacités physiques? Dans votre planificateur d'itinéraire préféré, une fois que vous aurez choisi un trajet, vous aurez un dénivelé positif (ascension) et négatif (descente).</p>
                            <DeuxFiguresPetit photo1={photo3} photo2={photo4} />
                            <p>À noter que le dénivelé pour un même trajet peut différer selon la calculateur utilisé, puisque la source des données topographiques n'est pas la même.</p>
                            <p>Plutôt qu'avec des RPM, une façon scientifique et ludique de connaitre la difficulté d'un trajet consiste à diviser le nombre de mètres montés par le nombre de kilomètres franchis. Cela nous donne aussi le nombre de jurons par minute qu'un cycliste risque de grommeler.</p>
                            <p>Ce calcul peut être fait pour estimer la difficulté d'une journée ou bien d'un voyage au complet. Il est déconseillé pour les courtes distances.</p>
                            <Diff />
                            <div>*La difficulté dépend aussi d'autres facteurs, tels la surface de roulement, la distribution du dénivelé sur un trajet (une énorme côte vs. des faux-plats toute la journée), le nombre de km effectué par jour, la vitesse et la direction du vent, ainsi que la motivation.</div>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(6)}>
                    <span>Partir en bonne compagnie</span>
                    {
                        boiteOuverte === 6
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 6 &&
                    <Infos>
                            <p>Il y a plusieurs facteurs à considérer ici. Solo, il est possible d'être le maitre de son destin. Duo, on a quelqu'un avec qui partager l'aventure. En famille, on s'assure que la prochaine génération reprenne le flambeau. Avec quelques amis ou collègues, ça peut plaire à certains, tandis que des évènements cyclotouristiques existent pour les gens qui veulent rouler en groupe.</p>
                            <p>L'important, c'est de voyager avec des gens qui ont la même cadence et les mêmes objectifs. Sinon, vous pouvez toujours abandonner votre compagnon de voyage au prochain village!</p>
                    </Infos>
                }
            </Boite>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Boite = styled.div`
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

export default Comm1;