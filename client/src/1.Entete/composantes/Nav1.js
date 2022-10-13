import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CycloContext } from "../../CycloContext";
import imgLogo from "../../images/icones/logo.png";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {

    const { lang } = useContext(CycloContext);
    
    const urlActuel = useLocation().pathname;

    console.log(urlActuel);

    return (
        <Wrapper>
            {
                urlActuel === "/"
                    ? <img src={imgLogo} height="48px" alt="logo du site" />
                    : <Link to="/">
                        <img src={imgLogo} height="48px" alt="retournez à la page d'accueil" />
                    </Link>
            }
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
    padding: 0 5px;
    > * {
        height: 48px;
    }
`

const Menu = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    a {
        color: var(--c4);
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
` 

const Langue = styled.div`
    align-items: center;
    display: flex;
    svg {
        margin-left: 4px;
    }
`

export default Nav1;