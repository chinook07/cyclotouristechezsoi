import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChangerLang from "./ChangerLang";
import imgLogo from "../../images/icones/logo.png";
import { faGlobeEurope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {

    const [monterChangLang, setMontrerChangLang] = useState(false);
    
    const urlActuel = useLocation().pathname;

    const handleLang = () => {
        monterChangLang ? setMontrerChangLang(false) : setMontrerChangLang(true)
    };

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
                <ExternalLink href="https://www.touristechezsoi.ca">
                    <span>Blogue</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </ExternalLink>
            </Menu>
            <Langue onClick={handleLang}>
                <span>FR</span>
                <span><FontAwesomeIcon icon={faGlobeEurope}/></span>
            </Langue>
            {
                monterChangLang &&
                <ChangerLang />
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    position: relative;
    > *:not(:last-child) {
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
        &[target = _blank] > * {
            margin: 0 2px;
        }
    }
` 

const Langue = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    svg {
        margin-left: 4px;
    }
`

export default Nav1;