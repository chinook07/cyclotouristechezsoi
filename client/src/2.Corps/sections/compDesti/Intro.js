import styled from "styled-components";
import { useState, useEffect } from "react";

import donnees from "./donnees/trajets.json";
import Hasard from "./comp/Hasard";

const Intro = () => {

    let [trajetsHasard, setTrajetsHasard] = useState([]);
    
    useEffect(() => {
        let hasard = [];
        while (hasard.length < 5) {
            let nombre = Math.floor(Math.random() * 26);
            if (hasard.includes(nombre) === false) hasard.push(nombre);
        }
        setTrajetsHasard(hasard);
    }, [])

    return (
        <Wrapper>
            <p>Le Québec est un vaste territoire avec une possibilité de parcours infinie. Utilisez cet outil pour choisir un trajet qui vous satisfera.</p>
            <h2>Trouvez votre parcours idéal</h2>
            <Schema>
                {
                    donnees.map((item, index) => {
                        return (
                            <Hexagon key={index}>
                                {item.id}
                            </Hexagon>
                        )
                    })
                }
            </Schema>
            <h2>Laissez le hasard vous guider</h2>
            {
                trajetsHasard.length === 5 &&
                <Hasard trajetsHasard={trajetsHasard} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    iframe {
        height: 450px;
        width: 100%;
    }
`

const Schema = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Hexagon = styled.div`
    border: 2px solid black;
    height: 100px;
    margin: 20px;
    /* transform: rotate(45deg); */
    width: 100px;
`

export default Intro;