import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Boite0 from "./reponses/Boite0";
import Boite1 from "./reponses/Boite1";
import Boite2 from "./reponses/Boite2";
import Boite3 from "./reponses/Boite3";
import Boite4 from "./reponses/Boite4";
import Boite5 from "./reponses/Boite5";
import Boite6 from "./reponses/Boite6";

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
                        <Boite0
                            id="acc-corps-0"
                            aria-labelledby="acc-tete-0"
                            role="panel"
                        />
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
                        <Boite1
                            id="acc-corps-1"
                            aria-labelledby="acc-tete-1"
                            role="panel"
                        />
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
                        >Une boucle vs un trajet linéaire</button>
                        {
                            boiteOuverte === 2
                                ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                                : <FontAwesomeIcon icon={faAngleDoubleDown} />
                        }
                    </h3>
                    {
                        boiteOuverte === 2 &&
                        <Boite2
                            id="acc-corps-2"
                            aria-labelledby="acc-tete-2"
                            ouvrirFermer={ouvrirFermer}
                            role="panel"
                        />
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
                        <Boite3
                            id="acc-corps-3"
                            aria-labelledby="acc-tete-3"
                            role="panel"
                        />
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
                        <Boite4
                            id="acc-corps-4"
                            aria-labelledby="acc-tete-4"
                            role="panel"
                        />
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
                        <Boite5
                            id="acc-corps-5"
                            aria-labelledby="acc-tete-5"
                            role="panel"
                        />
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
                        <Boite6
                            id="acc-corps-6"
                            aria-labelledby="acc-tete-6"
                            role="panel"
                        />
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
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Comm1;