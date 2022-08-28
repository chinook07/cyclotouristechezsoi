import styled from "styled-components";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import { CycloContext } from "../CycloContext";
import imgLogo from "../images/icones/logo.png"

const Entete = () => {

    const { lang } = useContext(CycloContext);

    return (
        <Wrapper>
            <Nav1>
                <img src={imgLogo} height="48px" alt="icône"></img>
                <Menu>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/apropos">À propos</NavLink>
                    <NavLink to="/voyages-effectues">Voyages effectués</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <ExternalLink href="https://www.touristechezsoi.ca">Blogue</ExternalLink>
                </Menu>
                <Langue>
                    <span>{lang}</span>
                    <span>/*-</span>
                </Langue>
            </Nav1>
            <Nav2>
                <NavLink to="/commencement">Commencer</NavLink>
                <NavLink to="/destinations">Découvrir</NavLink>
                <NavLink to="/equipement">S'équiper</NavLink>
                <NavLink to="/transport">Se transporter</NavLink>
            </Nav2>
        </Wrapper>
    )
}

const Wrapper = styled.header``

const Nav1 = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    a {
        color: black;
        padding-left: 10px;
        text-decoration: none;
        &:not(:last-child)::after {
            content: "|";
            margin-left: 10px;
        }
    }
` 

// const Menu = styled.div`
// `

// const Defilant = styled.div`
//     display: flex;
//     flex-direction: column;
// `

const Langue = styled.div``

const Nav2 = styled.nav`
    background-color: var(--c4);
    
    display: flex;
    justify-content: space-evenly;
    a {
        color: white;
        padding: 15px;
        text-decoration: none;
        &:hover {
            background-color: var(--c6);
        }
    }
`

export default Entete;