import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CycloContext } from "../../CycloContext";
import imgLogo from "../../images/icones/logo.png";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {

    const { lang } = useContext(CycloContext);

    // const taille = window.innerWidth;

    return (
        <Wrapper>
            <Link to="/">
                <img src={imgLogo} height="48px" alt="icône"></img>
            </Link>
            <Menu>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">À propos</NavLink>
                <NavLink to="/voyages-effectues">Voyages effectués</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <ExternalLink href="https://www.touristechezsoi.ca">Blogue</ExternalLink>
            </Menu>
            <Langue>
                <span>{lang}</span>
                <span><FontAwesomeIcon icon={faGlobeEurope}/></span>
            </Langue>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    > * {
        height: 48px;
    }
    @media screen and (max-width: 700px) {
        > * {
            height: unset;
        }
    }
`

const Menu = styled.div`
    align-items: center;
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
        &:hover {
            color: var(--c5);
        }
        &.active {
            font-weight: bold;
        }
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
        a {
            &:not(:last-child)::after {
                content: "";
                margin-left: 0;
            }
        }
    }
` 

const Langue = styled.div`
    align-items: center;
    display: flex;
`

export default Nav1;