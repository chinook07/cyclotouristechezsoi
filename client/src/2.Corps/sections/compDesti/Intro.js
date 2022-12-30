import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { CycloContext } from "../../../CycloContext";

import donnees from "./donnees/trajets.json";
import Hasard from "./comp/Hasard";
import Trouvez from "./comp/Trouvez";
import * as HasardImg from "./images/0-hasard/index"

const Intro = () => {

    const { setTrajetRedig } = useContext(CycloContext);
    let [trajetsHasard, setTrajetsHasard] = useState([]);
    
    useEffect(() => {
        let hasard = [];
        while (hasard.length < 5) {
            let nombre = Math.floor(Math.random() * 26);
            if (hasard.includes(nombre) === false) hasard.push(nombre);
        }
        setTrajetsHasard(hasard);
    }, [])

    const ouvrirTrajet = (trajet) => {
        let details = donnees.find(item => item.id === trajet);
        setTrajetRedig(details);
    };

    return (
        <Wrapper>
            <p>Le Québec est un vaste territoire avec une possibilité de parcours infinie. Utilisez cet outil pour choisir un trajet qui vous satisfera.</p>
            <h2>Trouvez votre parcours idéal</h2>
            <Trouvez />
            <h2>Tous les parcours</h2>
            <Schema>
                {
                    donnees.map((item, index) => {
                        return (
                            <Hexagon key={index}>
                                <ImgFond has={"Has" + item.id} />
                                <Link to="/destinations/trajets" onClick={() => ouvrirTrajet(item.id)}>
                                    <h3>{item.trajet}</h3>
                                    <p>{item.distance} km</p>
                                    <p>de {item.deA[0]} à {item.deA[1]}</p>
                                </Link>
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
    gap: 20px;
    justify-content: center;
`

const Hexagon = styled.div`
    border: 2px solid var(--c6);
    border-radius: 9px;
    height: 200px;
    position: relative;
    width: 200px;
    a {
        color: var(--c10);
        height: 100%;
        padding: 10px;
        position: absolute;
        text-decoration: none;
        text-shadow: 1px 1px 4px var(--c11), 0 0 7px var(--c1), 0 0 7px var(--c1);
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        height: 140px;
        width: 140px;
        a {
            padding: 5px;
            h3 {
                font-size: 1em;
            }
            p:last-of-type {
                display: none;
            }
        }
    }
`

const ImgFond = styled.div`
    background-image: url(${props => HasardImg[props.has]});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    z-index: 0;
`

export default Intro;