import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faMapSigns, faSuitcase, faTrain } from "@fortawesome/free-solid-svg-icons";

const Nav2 = () => {

    const [ecran, setEcran] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setEcran(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {window.removeEventListener("resize", handleResizeWindow)}
    }, [])

    if (ecran < 600) {
        return (
            <WrapperMobi>
                <NavLink to="/commencement"><FontAwesomeIcon icon={faPlay} /></NavLink>
                <NavLink to="/destinations"><FontAwesomeIcon icon={faMapSigns} /></NavLink>
                <NavLink to="/equipement"><FontAwesomeIcon icon={faSuitcase} /></NavLink>
                <NavLink to="/transport"><FontAwesomeIcon icon={faTrain} /></NavLink>
            </WrapperMobi>
        )
    } else {
        return (
            <Wrapper>
                <NavLink to="/commencement">Commencer</NavLink>
                <NavLink to="/destinations">Découvrir</NavLink>
                <NavLink to="/equipement">S'équiper</NavLink>
                <NavLink to="/transport">Se transporter</NavLink>
            </Wrapper>
        )
    }

    
}

const Wrapper = styled.nav`
    background-color: var(--c4);
    display: flex;
    justify-content: center;
    a {
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        &:hover {
            background-color: var(--c5);
        }
        &.active {
            background-color: var(--c6);
        }
    }
`

const WrapperMobi = styled.nav`
    background-color: var(--c4);
    display: flex;
    justify-content: center;
    a {
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        &:hover {
            background-color: var(--c5);
        }
        &.active {
            background-color: var(--c6);
        }
    }
`

export default Nav2;