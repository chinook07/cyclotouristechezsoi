import styled from "styled-components";
import { useState } from "react";

import trajets from "../donnees/trajets.json";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Rep from "./Rep";

const Trouvez = () => {

    const [question, setQuestion] = useState(0);
    const [typeDeTrajet, setTypeDeTrajet] = useState("");
    const [pistesOuNon, setPistesOuNon] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const selecteurType = (e) => {
        setTypeDeTrajet(e.target.value);
        setQuestion(1);
    }

    const choisirPistes = (e) => {
        setPistesOuNon(e.target.value);
        setQuestion(2);
        let reponses = [];
        trajets.forEach(item => {
            if (e.target.value === "le plus possible" && item.type.includes(typeDeTrajet) && item.proportion >= 65) reponses.push(item);
            if (e.target.value === "le moins possible" && item.type.includes(typeDeTrajet) && item.proportion <= 25) reponses.push(item);
            if (e.target.value === "... ou pas" && item.type.includes(typeDeTrajet)) reponses.push(item);
        })
        setSuggestions(reponses);
    }

    const recommencer = () => {
        setQuestion(0);
        setTypeDeTrajet("");
        setPistesOuNon("");
        setSuggestions([]);
    }

    return (
        <Wrapper>
            {
                question === 0 &&
                <Q1 selecteurType={selecteurType} />
            }
            {
                question === 1 &&
                <Q2
                    choisirPistes={choisirPistes}
                    recommencer={recommencer}
                    typeDeTrajet={typeDeTrajet}
                />
            }
            {
                question === 2 &&
                <Rep
                    pistesOuNon={pistesOuNon}
                    recommencer={recommencer}
                    suggestions={suggestions}
                    typeDeTrajet={typeDeTrajet}
                />
            }
            
        </Wrapper>
    )
}

const Wrapper = styled.form`
    background-color: var(--c2);
    border-radius: 5px;
    padding: 15px;
`

export default Trouvez;