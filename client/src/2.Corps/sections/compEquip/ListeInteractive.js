import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBed, faCampground } from "@fortawesome/free-solid-svg-icons";
import Liste from "./comp/Liste";
import ListePers from "./comp/ListePers";

const ListeInteractive = () => {

    const [bagages, setBagages] = useState([]);
    const [camping, setCamping] = useState(true);

    useEffect(() => {
        const enMemoire = localStorage.getItem("packed");
        enMemoire !== null &&
            setBagages(enMemoire.split(",").map(item => parseInt(item)));
        const modeHebergement = localStorage.getItem("camping");
        if (modeHebergement !== null) {
            modeHebergement === "true" &&
                setCamping(true);
            modeHebergement === "false" &&
                setCamping(false);
        }
    }, [])

    const camper = () => {
        setCamping(true);
        localStorage.setItem("camping", true);
    };
    const coucherALInterieur = () => {
        setCamping(false);
        localStorage.setItem("camping", false);
    };

    const packThis = (objet) => {
        if (!bagages.includes(objet.id)) {
            setBagages((prev) => [...prev, objet.id])
            localStorage.setItem("packed", [...bagages, objet.id])
        } else {
            setBagages((current) => current.filter(item => item !== objet.id))
            localStorage.setItem("packed", bagages.filter(item => item !== objet.id))
        }
    }

    const imprimer = window.print;

    const reinit = () => {
        setBagages([]);
        localStorage.removeItem("packed");
    }

    return (
        <Wrapper>
            <Profil>Profil du voyage</Profil>
            <Panneau>
                <BoutonPanneau
                    onClick={camper}
                    styleDiff={
                        camping
                            ? { fond: "--c6", coul: "--c1" }
                            : { fond: "--c1", coul: "--c6" }
                    }
                >
                    <div>En tente</div>
                    <FontAwesomeIcon icon={faCampground} />
                </BoutonPanneau>
                <BoutonPanneau
                    onClick={coucherALInterieur}
                    styleDiff={
                        camping
                            ? { fond: "--c1", coul: "--c6" }
                            : { fond: "--c6", coul: "--c1" }
                    }
                >
                    <div>Dans un lit</div>
                    <FontAwesomeIcon icon={faBed} />
                </BoutonPanneau>
            </Panneau>
            <Liste
                bagages={bagages}
                camping={camping}
                packThis={packThis}
            />
            <ListePers
                packThis={packThis}
            />
            <Controles>
                <button onClick={imprimer}>Imprimer</button>
                <button onClick={reinit}>Réinitialiser</button>
            </Controles>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Profil = styled.div`
    margin: 20px auto;
    text-align: center;
`

const Panneau = styled.div`
    margin: 20px auto;
    text-align: center;
`

const BoutonPanneau = styled.button`
    background-color: var(${props => props.styleDiff.fond});
    border: none;
    border-radius: 10px;
    color: var(${props => props.styleDiff.coul});
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    transition: all 0.5s;
    &:hover {
        background-color: var(--c3);
    }
`

const Controles = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px auto;
    button {
        background-color: var(--c3);
        border-radius: 5px;
        color: var(--c11);
        cursor: pointer;
        font-size: large;
        margin: auto 10px;
        padding: 20px;
    }
`

export default ListeInteractive;