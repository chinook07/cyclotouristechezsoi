import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import voyagesListeDonnees from "../donnees/VoyagesListe.json";
import Voyage from "./Voyage";
import { faArrowsRotate, faArrowRight, faCalendarDays, faUmbrellaBeach, faUpDown } from "@fortawesome/free-solid-svg-icons";

const VoyagesListe = () => {

    const [catAMontrer, setCatAMontrer] = useState("tout");

    const changerCategories = (cat) => {
        setCatAMontrer(cat)
    }

    return (
        <Wrapper>
            <Panneau>
                <div>Filtrer par :</div>
                <Boutons>
                    <button
                        className={catAMontrer === "tout" ? "active" : "false"}
                        onClick={() => changerCategories("tout")}
                    >Tout</button>
                    <button
                        className={catAMontrer === "flipBoucle" ? "active" : "false"}
                        onClick={() => changerCategories("flipBoucle")}
                    ><FontAwesomeIcon icon={faArrowsRotate}
                        />Boucles<span>ou presque</span></button>
                    <button
                        className={catAMontrer === "flipLineaire" ? "active" : "false"}
                        onClick={() => changerCategories("flipLineaire")}
                    ><FontAwesomeIcon icon={faArrowRight}
                        />Trajets linéaires</button>
                    <button
                        className={catAMontrer === "flipLongs" ? "active" : "false"}
                        onClick={() => changerCategories("flipLongs")}
                    ><FontAwesomeIcon icon={faCalendarDays}
                        />Longs périples</button>
                    <button
                        className={catAMontrer === "flipEau" ? "active" : "false"}
                        onClick={() => changerCategories("flipEau")}
                    ><FontAwesomeIcon icon={faUmbrellaBeach}
                        />Bord de l'eau</button>
                    <button
                        className={catAMontrer === "tout" ? "active" : "false"}
                        onClick={() => changerCategories("tout")}
                    ><FontAwesomeIcon icon={faUpDown}
                        />Inverser l'ordre</button>
                </Boutons>
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
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 15px 0;
`

const Boutons = styled.div`
    button {
        background-color: inherit;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 5px;
        padding: 10px;
        &:hover {
            background-color: var(--c3);
        }
        &.active {
            background-color: var(--c5);
            color: var(--c11);
        }
        &:last-child {
            border: 1px solid black;
        }
    }
    
`

const Voyages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default VoyagesListe;