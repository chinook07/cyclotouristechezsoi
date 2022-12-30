import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CycloContext } from "../../../../CycloContext";

const Rep = ({ typeDeTrajet, pistesOuNon, suggestions, recommencer }) => {
    
    const { setTrajetRedig } = useContext(CycloContext);

    const ouvrirTrajet = (trajet) => setTrajetRedig(trajet);

    return (
        <div>
            <p>Vous aimeriez rouler dans un décor {typeDeTrajet} tout en choisissant les pistes cyclables {pistesOuNon}? Voici quelques suggestions!</p>
            <Sugg>
                {
                    suggestions.map((item, index) => {
                        return (
                            <Link key={index} to="/destinations/trajets" onClick={() => ouvrirTrajet(item)}>
                                <li key={index}>{item.trajet}</li>
                            </Link>
                        )
                    })
                }
            </Sugg>
            <Recom onClick={recommencer} type="reset">Recommencez</Recom>
        </div>
    )
}

const Sugg = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    a {
        text-decoration: none;
        li {
            background-color: var(--c1);
            border: 1px solid var(--c6);
            border-radius: 5px;
            color: var(--c10);
            cursor: pointer;
            padding: 10px;
            text-align: center;
            
            width: 200px;
            &:hover {
                border-width: 2px;
                padding: 9px;
            }
        }
    }
`

const Recom = styled.button`
    background-color: var(--c6);
    border-radius: 5px;
    color: var(--c0);
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 10px;
    &:hover {
        border-width: 3px;
        padding: 9px;
    }
`

export default Rep;