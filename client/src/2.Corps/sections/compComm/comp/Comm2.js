import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp, faTrain, faPlane, faCampground, faHotel } from "@fortawesome/free-solid-svg-icons";
import demontepneus from "../images/demontepneus.jpg";

const Comm2 = ({ boiteOuverte, setBoiteOuverte }) => {
    
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
    
    return (
        <Wrapper>
            <h2>Mettre le plan en action</h2>
            <ul>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(7)}>
                        <button
                            aria-controls="acc-corps-7"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-7"
                            type="button"
                        >Apprendre la base en mécanique</button>
                        {
                            boiteOuverte === 7
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 7 &&
                            <Infos
                                id="acc-corps-7"
                                aria-labelledby="acc-tete-7"
                                role="panel"
                            >
                                <p>Nul besoin d'être mécanicien chevronné pour partir à l'aventure. Cependant, il est recommandé d'avoir une connaissance des bases pour éviter d'être mal pris. Certains pourraient suivre un cours d'initiation pour mieux se sentier en confiance, mais ce n'est pas absolument nécessaire, à moins de vouloir faire du cyclotourisme de brousse, voire du bikepacking. Par contre, voici ce qu'il faut savoir par rapport aux crevaisons.</p>
                                <p>On peut éviter la plupart si l'on utilise de bons pneus anticrevaison, ainsi qu'en faisant bien attention de mettre une pression optimale située à l'intérieur de la limite recommandée.</p>
                                <p>Un pneu est théoriquement facile à démonter et remonter, si l'on se fie aux centaines de vidéos explicatives trouvées sur le web. À la maison, ça peut devenir décourageant sans un bon démonte-pneu (voir image ci-dessous). Sur le terrain, l'adrénaline vient parfois aider le cyclotouriste mal pris. Le meilleur tutoriel web recensé à ce jour par l'auteur de ce site s'agit du <ExternalLink href="https://www.sheldonbrown.com/flats.html" hrefLang="en">guide de Sheldon Brown</ExternalLink>, rédigé en anglais avec une traduction web disponible en français.</p>
                                <p>La plupart des crevaisons se réparent avec des rustines, par contre, il est recommandé de changer la chambre à air pour éviter d'avoir des pépins dans un avenir rapproché.</p>
                                <DemontePneu>
                                    <img src={demontepneus} alt="un démonte-pneu, un kit de réparation et une chambre à air." />
                                    <figcaption>Quelques outils indispensables pour la route!</figcaption>
                                </DemontePneu>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(8)}>
                        <button
                            aria-controls="acc-corps-8"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-8"
                            type="button"
                        >Se mettre en forme</button>
                        {
                            boiteOuverte === 8
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 8 &&
                            <Infos
                                id="acc-corps-8"
                                aria-labelledby="acc-tete-8"
                                role="panel"
                            >
                                <p>Quelqu'un qui n'a jamais fait du vélo éprouverait beaucoup de difficultés lors de son premier voyage. Quand on roule 70 km, plusieurs jours de suite, le corps finit par s'adapter. Par contre, être en forme et connaitre ses limites sont deux préalables pour pouvoir pleinement profiter de ses vacances.</p>
                                <p>Voici un exemple de préparation physique pour quelqu'un habitué à rouler en ville et de faire des balades de 20 ou 30 km à l'occasion.</p>
                                <ol>
                                    <li>Effectuer quelques sorties de plus en plus longues pour s'habituer aux distances de 50 à 60 km.</li>
                                    <li>Rouler un bon 60 km, deux jours de suite. La deuxième journée, on peut ajouter des objets lourds dans ses sacoches pour émuler le poids d'un vélo chargé.</li>
                                    <li>Répéter l'expérience au besoin, tout en augmentant la distance et le poids transporté.</li>
                                </ol>
                                <p>Il faut respecter son corps, sa capacité physique et mentale, et surtout, il faut s'amuser!</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(9)}>
                        <button
                            aria-controls="acc-corps-9"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-9"
                            type="button"
                        >Trouver de l'équipement nécessaire</button>
                        {
                            boiteOuverte === 9
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 9 &&
                            <Infos
                                id="acc-corps-9"
                                aria-labelledby="acc-tete-9"
                                role="panel"
                            >
                                <p>Vous aurez <Link to="/equipement">une section de ce site web</Link> dédiée à l'équipement requis. Lentement mais surement, il faut commencer par trouver le matériel nécessaire. On peut :</p>
                                <ul>
                                    <li>Emprunter si l'on a la chance de connaitre quelqu'un qui possède déjà le matériel.</li>
                                    <li>Louer si l'on n'est vraiment pas certain d'aimer le cyclotourisme.</li>
                                    <li>Acheter de l'occasion ou du neuf (bas de gamme), si l'on n'est pas certain de vouloir pratiquer le cyclotourisme souvent, et qu'on ne veut pas trop investir.</li>
                                    <li>Acheter des articles neufs de moyenne ou de haute qualité, si l'on n'est pas à son premier voyage et on veut du matériel qui durera longtemps.</li>
                                </ul>
                                <p>Une attention particulière est recommandée en choissisant la tente, le réchaud et certains autres équipements. Par exemple, une tente trop usée qui laisse passer l'eau est une garantie d'un temps misérable en cas de pluie.</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(10)}>
                        <button
                            aria-controls="acc-corps-10"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-10"
                            type="button"
                        >Préparer son itinéraire</button>
                        {
                            boiteOuverte === 10
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 10 &&
                            <Infos
                                id="acc-corps-10"
                                aria-labelledby="acc-tete-10"
                                role="panel"
                            >
                                <p>Il est possible de se familiariser avec différentes options de trajets au sein de <Link to="/destinations">la sous-section</Link> sur ce site. Il y a autrement beaucoup de ressources pour tracer un itinéraire de vélo.</p>
                                <p>Vélo Québec chapeaute <ExternalLink href="https://www.routeverte.com/">la Route verte</ExternalLink>, un réseau de sept véloroutes sillonnant le Québec par des voies cyclables sur routes et hors route.</p>
                                <p>Les différentes <ExternalLink href="https://www.quebec.ca/tourisme-et-loisirs/services-industrie-touristique/organismes-partenaires#c20108">associations touristiques régionales</ExternalLink> sont chargées de promouvoir leurs réseaux cyclables. Plusieurs publient même des cartes vélo, disponibles en téléchargement ou en version papier.</p>
                                <p>Quoiqu'il est possible de tracer un itinéraire détaillé en mode vélo par l'entremise de Google Maps, d'autres planificateurs existent qui sont davantage adaptés aux besoins des cyclistes. Parmi le lot, il y a <ExternalLink href="https://brouter.de/brouter-web">BRouter-Web</ExternalLink>, <ExternalLink href="https://cycle.travel/">Cycle Travel</ExternalLink>, <ExternalLink href="https://ridewithgps.com/">Ride with GPS</ExternalLink>, <ExternalLink href="https://www.bikemap.net/">Bikemap</ExternalLink> et <ExternalLink href="https://www.komoot.fr/">Komoot</ExternalLink>. Plusieurs de ceux-ci permettent de modifier la source des données cartographiques, de tracer des lignes en dehors des routes, par exemple lorsqu'une piste n'apparait pas sur la carte, et même de voir la proportion d'un trajet empruntant des pistes cyclables.</p>
                                <p>Les services mentionnés ci-dessus pigent les données cartographiques à partir d'OpenStreetMap, mais on peut visualiser les voies cyclables directement sur <ExternalLink href="https://www.openstreetmap.org/">leur site</ExternalLink>, en choissisant CyclOSM ou OpenCycleMap parmi les couches disponibles dans le panneau à droite. Vous pouvez aussi consulter <ExternalLink href="https://touristechezsoi.weebly.com/blogue/la-cartographie-libre">ce billet de blogue détaillé</ExternalLink> sur l'utilisation de la cartographie libre.</p>
                                <p>Puisque les routes numérotées ne sont pas toujours agréables à vélo, il y a un outil formidable pour vérifier la convivialité d'un tronçon. Les données du ministère des Transports peuvent être visualisés en activant la couche convivialité vélo sur <ExternalLink href="https://www.quebec511.info/fr/Carte/Default.aspx">la carte 511 Québec</ExternalLink> ou sur celle de <ExternalLink href="https://www.routeverte.com/">la Route verte</ExternalLink>.</p>
                            </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(11)}>
                        <button
                            aria-controls="acc-corps-11"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-11"
                            type="button"
                        >Effectuer certaines réservations</button>
                        {
                            boiteOuverte === 11
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 11 &&
                            <Infos
                                id="acc-corps-11"
                                aria-labelledby="acc-tete-11"
                                role="panel"
                            >
                                <p>Il incombe d'effectuer certaines réservations à l'avance, telles que :</p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faPlane} />
                                        <span>Les billets d'avion</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTrain} />
                                        <span>Les billets de train interurbains</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCampground} />
                                        <span>Certains campings lorsque ceux-ci ne sont pas certifiés Bienvenue cyclistes, et qu'ils ne disposent que de quelques places pour tentes.</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHotel} />
                                        <span>Les hébergements intérieurs</span>
                                    </li>
                                </ul>
                                <p>Et même à ca, certains ne réservent leurs hôtels que quelques jours à l'avance, selon le moment de l'année et la région visitée!</p>
                            </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(12)}>
                        <button
                            aria-controls="acc-corps-12"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-12"
                            type="button"
                        >Tester le matériel</button>
                        {
                            boiteOuverte === 12
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 12 &&
                            <Infos
                                id="acc-corps-12"
                                aria-labelledby="acc-tete-12"
                                role="panel"
                            >
                                <p>Si le vélo est en hibernation dans le garage depuis un mois, il est sage de le sortir pour faire un test de la mécanique au moins une ou deux semaines avant le départ. Un vélo apte à prendre la route est un dont la transmission et les freins fonctionnent, entre autres.</p>
                                <p>C'est aussi l'équipement de camping qui mérite une attention particulière. Il faut tester le réchaud sur le balcon, monter la tente dans son salon si l'on ne se souvient pas comment faire, ainsi qu'essayer le filtre d'eau sous le robinet.</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(13)}>
                        <button
                            aria-controls="acc-corps-13"
                            aria-expanded="false"
                            className="acc-tetes-A"
                            id="acc-tete-13"
                            type="button"
                        >Emballer son vélo</button>
                        {
                            boiteOuverte === 13
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 13 &&
                            <Infos
                                id="acc-corps-13"
                                aria-labelledby="acc-tete-13"
                                role="panel"
                            >
                                <p>Cette étape est nécessaire, seulement lorsque vous devez prendre l'avion, et que l'emballage n'est pas fourni à l'aéroport. Dans ce cas, il faut aussi prévoir son transport. Autrement, s'il faudra démonter le vélo pour prendre l'autocar vers le point de départ, ou à la fin de son voyage, vaut mieux avoir vérifié que les pédales s'enlèvent, que le guidon puisse se tourner (si l'on a des garde-boues), et que l'on sait comment démonter et remonter la roue avant. Une simple précaution!</p>
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
        }
        &:hover {
            background-color: var(--c1);
            transition: all 0.2s;
        }
    }
`

const Infos = styled.div`
    padding: 0 20px 20px;
    svg {
        margin-right: 5px;
    }
`

const DemontePneu = styled.figure`
    img {
        display: block;
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
    }
`

export default Comm2;