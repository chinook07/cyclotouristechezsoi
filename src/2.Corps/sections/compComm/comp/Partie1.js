import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp, faCar, faBusAlt, faTrain } from "@fortawesome/free-solid-svg-icons";

const Partie1 = ({boiteOuverte, setBoiteOuverte}) => {

    const ouvrirFermer = (index) => {
        boiteOuverte === index ? setBoiteOuverte() : setBoiteOuverte(index)
    }

    return (
        <Wrapper>
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
                    <span>Les vents dominants...</span>
                    {
                        boiteOuverte === 3
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 3 &&
                    <Infos>
                            <p>Texte</p>
                    </Infos>
                }
            </Boite>
            <Boite>
                <h3 onClick={() => ouvrirFermer(4)}>
                    <span>Le meilleur moment de l'année...</span>
                    {
                        boiteOuverte === 4
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 4 &&
                    <Infos>
                            <p>Texte</p>
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
                            <p>Texte</p>
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
                            <p>Texte</p>
                    </Infos>
                }
            </Boite>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Boite = styled.div`
    h3 {
        cursor: pointer;
    }
`

const Infos = styled.div``

export default Partie1;