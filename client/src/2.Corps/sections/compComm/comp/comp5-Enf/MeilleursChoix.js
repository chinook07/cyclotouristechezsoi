import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Age1 from "./Age1";
import Age2 from "./Age2";
import Age3 from "./Age3";

const MeilleursChoix = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

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
            <Boite>
                <h3 onClick={() => ouvrirFermer(0)}>
                    <button
                        aria-controls="acc-corps-0"
                        aria-expanded="false"
                        className="acc-tetes-A"
                        id="acc-tete-0"
                        type="button"
                    >De 1 an à 15 kg (environ 3 ans)</button>
                    {
                        boiteOuverte === 0
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 0 &&
                    <Age1
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
                    >De 15 kg jusqu'à la fin de la sieste</button>
                    {
                        boiteOuverte === 1
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 1 &&
                    <Age2
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
                    >De la fin de la sieste jusqu'à l'autonomie complète</button>
                    {
                        boiteOuverte === 2
                            ? <FontAwesomeIcon icon={faAngleDoubleUp} />
                            : <FontAwesomeIcon icon={faAngleDoubleDown} />
                    }
                </h3>
                {
                    boiteOuverte === 2 &&
                    <Age3
                        id="acc-corps-2"
                        aria-labelledby="acc-tete-2"
                        role="panel"
                    />
                }
            </Boite>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    list-style-type: none;
    padding: 0;
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

export default MeilleursChoix;