import styled from "styled-components";
import { useState, useEffect } from "react";

import trajets from "../donnees/trajets.json";
const Trouvez = () => {

    const [question, setQuestion] = useState(0);
    const [typeDeTrajet, setTypeDeTrajet] = useState("");
    const [pistesOuNon, setPistesOuNon] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const selecteurType = (e) => {
        if (e.target.value === "maritime ou fluvial") setTypeDeTrajet("maritime")
        else setTypeDeTrajet(e.target.value);
        setQuestion(1);
    }

    const choisirPistes = (e) => {
        setPistesOuNon(e.target.value);
        let proportion;
        switch (e.target.value) {
            case "le plus possible":
                proportion = 70;
                break;
            case "le moins possible":
                proportion = 30;
                break;
            case "... ou pas":
                proportion = undefined;
                break;
            default:
                break;
        }
        console.log(proportion);
        setQuestion(2);
        let reponses = [];
        trajets.forEach(item => {
            if (e.target.value === "le plus possible" && item.type.includes(typeDeTrajet) && item.proportion >= 75) reponses.push(item);
            if (e.target.value === "le moins possible" && item.type.includes(typeDeTrajet) && item.proportion <= 25) reponses.push(item);
            if (e.target.value === "... ou pas" && item.type.includes(typeDeTrajet)) reponses.push(item);
        })
        console.log(reponses);
        setSuggestions(reponses);
    }

    const recommencer = () => {
        setQuestion(0);
        setTypeDeTrajet("");
        setPistesOuNon("");
        setSuggestions([]);
    }

    // diviser composante
    // champêtre ne fonctionne pas
    // bouton recommencez CSS

    return (
        <Wrapper>
            {
                question === 0 &&
                <Q1>
                        <legend>Question 1</legend>
                        <div>
                            <label>
                                Je recherche un parcours
                            </label>
                            <select onChange={selecteurType}>
                                <option disabled>choisir ci-dessous</option>
                                <option>champêtre</option>
                                <option>maritime ou fluvial</option>
                                <option>forestier</option>
                                <option>montagnard</option>
                            </select>
                        </div>
                        
                </Q1>
            }
            {
                question === 1 &&
                <Q2>
                        <legend>Question 2</legend>
                        <p>Je souhaite prioriser un trajet par des pistes cyclables.</p>
                        <div>
                            {
                                (typeDeTrajet !== "maritime") &&
                                <label>
                                        <input name="pistes" onChange={choisirPistes} type="radio" value="le plus possible"></input>
                                        <span>Oui, si possible.</span>
                                </label>
                            }
                            <label>
                                <input name="pistes" onChange={choisirPistes} type="radio" value="le moins possible"></input>
                                <span>Non, je souhaite les éviter.</span>
                            </label>
                            <label>
                                <input name="pistes" onChange={choisirPistes} type="radio" value="... ou pas"></input>
                                <span>Je suis indifférent.</span>
                                </label>
                                {
                                    (typeDeTrajet === "maritime") &&
                                    <p>Vous voulez surtout rouler sur des pistes cyclables? Vous devez <CommeUnLien onClick={recommencer}>choisir une autre catégorie</CommeUnLien>!</p>
                                }
                        </div>
                </Q2>
            }
            {
                question === 2 &&
                <>
                    <p>Vous aimeriez rouler dans un décor {typeDeTrajet} tout en choisissant les pistes cyclables {pistesOuNon}? Voici quelques suggestions!</p>
                    <ul>
                        {
                            suggestions.map((item, index) => {
                                return <li key={index}>{item.trajet}</li>
                            })
                        }
                    </ul>
                    <button onClick={recommencer} type="reset">Recommencez</button>
                </>
                
            }
            
        </Wrapper>
    )
}

const Wrapper = styled.form`
    background-color: var(--c2);
    border-radius: 5px;
    padding: 15px;
`

const Q1 = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
    div {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }
    select {
        background-color: var(--c1);
        border-bottom: 3px solid var(--c6);
        border-left: none;
        border-right: none;
        border-top: none;
        font-size: medium;
        padding: 5px;
    }
`

const Q2 = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
    > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default Trouvez;