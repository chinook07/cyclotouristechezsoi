import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CycloContext } from "../../../../../CycloContext";
import { faGlobe, faFlagUsa } from "@fortawesome/free-solid-svg-icons";

const Metrique = () => {

    const { mesuresMetriques, setMesuresMetriques } = useContext(CycloContext)

    const choisirMesures = (unites) => { unites ? setMesuresMetriques(true) : setMesuresMetriques(false) }

    const changerMesures = () => { mesuresMetriques ? setMesuresMetriques(false) : setMesuresMetriques(true) }

    return (
        <Wrapper>
            <button onClick={() => choisirMesures(false)}>
                <FontAwesomeIcon icon={faFlagUsa} />
                <TexteMetA mesuresMetriques={mesuresMetriques}>US units</TexteMetA>
            </button>
            <Selecteur onClick={changerMesures}>
                <div />
                <Cercle mesuresMetriques={mesuresMetriques} />
            </Selecteur>
            <button onClick={() => choisirMesures(true)}>
                <FontAwesomeIcon icon={faGlobe} />
                <TexteMetB mesuresMetriques={mesuresMetriques}>Int'l units</TexteMetB>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c5);
    border-radius: 15px;
    color: var(--c11);
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 100%;
    width: 300px;
    button {
        align-self: center;
        background: none;
        border: none;
        color: var(--c11);
        cursor: pointer;
        display: flex;
        margin: 20px 10px;
        p {
            margin: 0 0 0 10px;
            text-shadow: 1px 1px var(--c3);
        }
    }
`

const TexteMetA = styled.p`
    font-weight: ${props => props.mesuresMetriques === false && "bold"};
`

const TexteMetB = styled.p`
    font-weight: ${props => props.mesuresMetriques && "bold"};
`

const Selecteur = styled.div`
    display: block;
    height: 34px;
    margin: 10px auto;
    position: relative;
    width: 60px;
`

const Cercle = styled.span`
    background-color: ${props => props.mesuresMetriques ? "var(--c3)" : "#ccc"};
    border-radius: 34px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    &::before {
        background-color: white;
        border-radius: 50%;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
        transform: ${props => props.mesuresMetriques ? "translateX(24px)" : "translateX(0)"};
    }
`

export default Metrique;