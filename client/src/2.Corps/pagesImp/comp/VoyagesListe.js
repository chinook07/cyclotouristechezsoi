import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import voyagesListeDonnees from "../donnees/VoyagesListe.json";
import Voyage from "./Voyage";
import { faArrowsRotate, faArrowRight, faCalendarDays, faUmbrellaBeach, faCircle } from "@fortawesome/free-solid-svg-icons";

const VoyagesListe = () => {

    const [catAMontrer, setCatAMontrer] = useState("tout");

    const changerCategories = (cat) => {
        setCatAMontrer(cat)
    }

    return (
        <Wrapper>
            <Panneau>
                <button
                    className={catAMontrer === "tout" ? "active" : "false"}
                    onClick={() => changerCategories("tout")}
                >
                    <span>Montrer tout</span>
                </button>
                <button
                    className={catAMontrer === "flipBoucle" ? "active" : "false"}
                    onClick={() => changerCategories("flipBoucle")}
                >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <span>Boucles </span>
                    <Petit>(ou presque)</Petit>
                </button>
                <button
                    className={catAMontrer === "flipLineaire" ? "active" : "false"}
                    onClick={() => changerCategories("flipLineaire")}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span>Trajets linéaires</span>
                </button>
                <button
                    className={catAMontrer === "flipLongs" ? "active" : "false"}
                    onClick={() => changerCategories("flipLongs")}
                >
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>Longs périples</span>
                </button>
                <button
                    className={catAMontrer === "flipEau" ? "active" : "false"}
                    onClick={() => changerCategories("flipEau")}
                >
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                    <span>Bord de l'eau</span>
                </button>
                <button
                    className={catAMontrer === "flipFacile" ? "active" : "false"}
                    onClick={() => changerCategories("flipFacile")}
                >
                    <FontAwesomeIcon icon={faCircle} />
                    <span>Trajets faciles</span>
                </button>
            </Panneau>
            <Voyages>
                {
                    voyagesListeDonnees.map((item, index) => {
                        if (item.categories.includes(catAMontrer)) {
                            return (
                                <Voyage key={index} index={index} item={item} />
                            )
                        }
                    })
                }
            </Voyages>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Panneau = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    button {
        background-color: var(--c11);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 5px 5px;
        padding: 10px;
        width: calc(100% / 4);
        svg {
            margin-right: 4px;
        }
        &:hover {
            background-color: var(--c3);
        }
        &.active {
            background-color: var(--c5);
            color: var(--c11);
        }
    }
    @media screen and (min-width: 950px) {
        button {
            width: calc(100% / 7);
        }
    }
    @media screen and (min-width: 450px) and (max-width: 680px) {
        button {
            width: 40%;
        }
    }
    @media screen and (max-width: 450px) {
        button {
            width: 250px;
        }
    }
`

const Petit = styled.span`
    font-size: smaller;
`

const Voyages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default VoyagesListe;