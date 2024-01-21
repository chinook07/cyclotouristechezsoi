import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import Boite7 from "./reponses/Boite7";
import Boite8 from "./reponses/Boite8";
import Boite9 from "./reponses/Boite9";
import Boite10 from "./reponses/Boite10";
import Boite11 from "./reponses/Boite11";
import Boite12 from "./reponses/Boite12";
import Boite13 from "./reponses/Boite13";

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
                        <Boite7
                            id="acc-corps-7"
                            aria-labelledby="acc-tete-7"
                            role="panel"
                        />
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
                        <Boite8
                            id="acc-corps-8"
                            aria-labelledby="acc-tete-8"
                            role="panel"
                        />
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
                        <Boite9
                            id="acc-corps-9"
                            aria-labelledby="acc-tete-9"
                            role="panel"
                        />
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
                        <Boite10
                            id="acc-corps-10"
                            aria-labelledby="acc-tete-10"
                            role="panel"
                        />
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
                        <Boite11
                            id="acc-corps-11"
                            aria-labelledby="acc-tete-11"
                            role="panel"
                        />
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
                        <Boite12
                            id="acc-corps-12"
                            aria-labelledby="acc-tete-12"
                            role="panel"
                        />
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
                        <Boite13
                            id="acc-corps-13"
                            aria-labelledby="acc-tete-13"
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
`

export default Comm2;