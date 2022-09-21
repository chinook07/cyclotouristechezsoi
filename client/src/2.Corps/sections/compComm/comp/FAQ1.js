import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CalculJours from "./CalculJours";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const FAQ1 = ({ boiteOuverte, setBoiteOuverte }) => {
    
    const ouvrirFermer = (index) => {
        boiteOuverte === index ? setBoiteOuverte() : setBoiteOuverte(index)
    }

    return (
        <Wrapper>
            <h2>FAQ avant de partir</h2>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Quel vélo me faut-il?</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Inutile de dire que ça prend un vélo en bon état de fonctionnement pour voyager plusieurs jours. Contrairement à ce que l'on pourrait croire, il n'est pas nécessaire d'avoir le dernier modèle haut de gamme. Un simple vélo qui repose dans votre garage suffira probablement. Par contre, pour éviter l'inconfort et l'inefficacité, on opte pour <Gras>un vélo de cyclotourisme</Gras> ou même <Gras>un simple hybride</Gras>.</p>
                            <p><Gras>Un vélo de route</Gras> est plus léger, donc rencontre moins de résistance au roulement. Ceux-ci sont généralement moins bien adaptés pour transporter beaucoup de sacoches, par contre, c'est l'idéal pour un voyage en léger, c'est-à-dire avec le coucher à l'hôtel ou à l'auberge. Mais oubliez le gravier!</p>
                            <p>Enfin, <Gras>un vélo de gravelle</Gras>, nouvelle tendance des dernières années, permet de sortir des sentiers battus et d'aller se ressourcer sur les chemins forestiers des <abbr title="zones d'exploitation contrôlée">zecs</abbr> et des réserves fauniques.</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(1)}>
                    <span>Combien de jours prévoir pour mon voyage?</span>
                    {
                        boiteOuverte === 1
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 1 &&
                    <Infos>
                            <p>Pour ne pas trop se trouver serré dans le temps et devoir pédaler une distance immesurable, vaut mieux bien prévoir le nombre de jours nécessaires pour le périple. Utilisez cet outil pour estimer la durée d'un trajet selon votre profil. Des jours de repos vous seront suggérés si votre voyage dure plus que 12 jours.</p>
                            <CalculJours />
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 1
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <span>Titre</span>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Infos>
                            <p>Paragraphe</p>
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
        background-color: var(--c3);
        border-radius: 10px;
        cursor: pointer;
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
`

const Gras = styled.span`
    font-weight: bold;
`

export default FAQ1;