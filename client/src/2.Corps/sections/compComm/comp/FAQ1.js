import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CalculJours from "./CalculJours";
import CalculCarburant from "./CalculCarburant";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ1 = ({ boiteOuverte, setBoiteOuverte }) => {
    
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
            <h2>FAQ avant de partir</h2>
            <ul>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(0)}>
                        <button
                            aria-controls="acc-corps-0"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-0"
                            type="button"
                        >Quel vélo me faut-il?</button>
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
                                <p>Inutile de dire que ça prend un vélo en bon état de fonctionnement pour voyager plusieurs jours. Contrairement à ce que l'on pourrait croire, il n'est pas nécessaire d'avoir le dernier modèle haut de gamme. Un simple vélo qui repose dans votre garage suffira probablement. Par contre, pour éviter l'inconfort et l'inefficacité, on opte pour <Gras>un vélo de cyclotourisme</Gras> ou même <Gras>un simple hybride</Gras>.</p>
                                <p><Gras>Un vélo de route</Gras> est plus léger, donc rencontre moins de résistance au roulement. Ceux-ci sont généralement moins bien adaptés pour transporter beaucoup de sacoches, par contre, c'est l'idéal pour un voyage en léger, c'est-à-dire avec le coucher à l'hôtel ou à l'auberge. Mais oubliez le gravier!</p>
                                <p>Enfin, <Gras>un vélo de gravelle</Gras>, nouvelle tendance des dernières années, permet de sortir des sentiers battus et d'aller se ressourcer sur les chemins forestiers des <abbr title="zones d'exploitation contrôlée">zecs</abbr> et des réserves fauniques.</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(1)}>
                        <button
                            aria-controls="acc-corps-1"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-1"
                            type="button"
                        >Combien de jours prévoir pour mon voyage?</button>
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
                                <p>Pour ne pas trop se trouver serré dans le temps et devoir pédaler une distance immesurable, vaut mieux bien prévoir le nombre de jours nécessaires pour le périple. Utilisez cet outil pour estimer la durée d'un trajet selon votre profil. Des jours de repos vous seront suggérés si votre voyage dure 12 jours ou plus.</p>
                                <CalculJours />
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(2)}>
                        <button
                            aria-controls="acc-corps-2"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-2"
                            type="button"
                        >Comment savoir si ma bonbonne de carburant est pleine?</button>
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
                                <p>Pour calculer le pourcentage de carburant qu'il vous reste, il suffit de peser votre cartouche, et de connaitre le poids de celle-là lorsqu'elle est vide.</p>
                                <p>Si vous avez un réchaud à l'isobutane, vous pouvez utiliser les calculateurs ci-dessous selon la bonbonne que vous avez.</p>
                                <ol>
                                    <li>Quelle était la quantité de carburant (g) à l'achat? Regardez l'étiquette et sélectionnez le bon montant.</li>
                                    <li>Pesez maintenant votre cartouche telle quelle et entrez le poids (g) dans la boite correspondante.</li>
                                </ol>
                                <CalculCarburant />
                                <Details>*À noter que le poids des cartouches peut varier légèrement selon la marque.</Details>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(3)}>
                        <button
                            aria-controls="acc-corps-3"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-3"
                            type="button"
                        >Combien de kilomètres par jour?</button>
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
                                <p>Cher cyclotouriste potentiel, le verbe « devoir » dans votre question est à proscrire, puisque vous roulez la distance que vous voulez. Beaucoup de débutants roulent de 50 à 70 km par jour, d'autres frôlent ou dépassent le 100. Certains iront même rallier Montréal et Québec en deux jours, ce qui équivaut à environ 150 km à la fois. Il faut respecter ses limites et surtout, s'amuser.</p>
                                <p>Si l'on voyage avec ses enfants et qu'on veut savourer son séjour, il est conseillé de revoir ces chiffres à la baisse. Surtout, il ne faut oublier que lorsqu'on s'initie, plus on pédale, plus on doit s'arrêter pour se reposer!</p>
                        </Infos>
                    }
                </Boite>
                <Boite>
                    <h3 onClick={() => ouvrirFermer(4)}>
                        <button
                            aria-controls="acc-corps-4"
                            aria-expanded="false"
                            className="acc-tetes-B"
                            id="acc-tete-4"
                            type="button"
                        >Est-ce que j'ai besoin d'une journée de repos?</button>
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
                                <p>Plusieurs cyclotouristes programment des journées de repos lors d'un voyage de longue durée. Une journée par semaine s'agit d'un consensus parmi les grands voyageurs. L'endroit choisi pour s'arrêter dépend de plusieurs facteurs, mais une ville où il y a beaucoup à visiter, ou bien un parc national peut s'avérer intéressant. L'idéal, c'est d'avoir de quoi explorer, par exemple des sentiers de randonnée ou la possibilité de louer un canot pour la matinée. Même une courte balade en boucle à vélo n'est pas à exclure.</p>
                                <p>Le corps a besoin de repos. Si ce n'est pas une journée complète, assurez-vous d'alterner entre les journées faciles et difficiles. De plus, les premières journées peuvent s'avérer ardues, étant donné que le corps n'est pas encore habitué à la nouvelle routine.</p>
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
`

const Gras = styled.span`
    font-weight: bold;
`

const Details = styled.p`
    font-style: italic;
    font-size: small;
`

export default FAQ1;