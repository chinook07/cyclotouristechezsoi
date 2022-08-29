import styled from "styled-components";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import { CycloContext } from "../../CycloContext";
import imgLogo from "../../images/icones/logo.png";

const Nav1 = () => {

    const { lang } = useContext(CycloContext);

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.nav`
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

const Langue = styled.div``

export default Nav1;