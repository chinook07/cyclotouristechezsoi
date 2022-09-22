import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CycloContext } from "../../CycloContext";
import imgLogo from "../../images/icones/logo.png";
import { faGlobeEurope, faBars } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {

    const { ecran, lang } = useContext(CycloContext);
    const [nav1Visible, setNav1Visible] = useState(false);

    const montrerMenu = () => {
        nav1Visible === false ? setNav1Visible(true) : setNav1Visible(false);
    }

    if (ecran < 700) {
        return (
            <WrapperMobi>
                <div>
                    <Link to="/">
                        <img src={imgLogo} height="48px" alt="icône"></img>
                    </Link>
                    <FontAwesomeIcon icon={faBars} onClick={montrerMenu} />
                </div>
                {
                    nav1Visible &&
                    <MenuMobi>
                        <NavLink onClick={montrerMenu} to="/">Accueil</NavLink>
                        <NavLink onClick={montrerMenu} to="/apropos">À propos</NavLink>
                        <NavLink onClick={montrerMenu} to="/voyages-effectues">Voyages effectués</NavLink>
                        <NavLink onClick={montrerMenu} to="/contact">Contact</NavLink>
                        <ExternalLink onClick={montrerMenu} href="https://www.touristechezsoi.ca">Blogue</ExternalLink>
                        <Langue>
                            <span>{lang}</span>
                            <span><FontAwesomeIcon icon={faGlobeEurope}/></span>
                        </Langue>
                    </MenuMobi>
                }
                
                
            </WrapperMobi>
        )
    } else {
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
}

const WrapperMobi = styled.nav`
    > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
        svg {
            cursor: pointer;
        }
    }
    
`

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    > * {
        height: 48px;
    }
`

const MenuMobi = styled.div`
    display: flex;
    flex-direction: column;
    a {
        color: var(--c4);
        line-height: 1.3;
        text-decoration: none;
        &:hover {
            color: var(--c5);
        }
        &.active {
            font-weight: bold;
        }
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
`

export default Nav1;