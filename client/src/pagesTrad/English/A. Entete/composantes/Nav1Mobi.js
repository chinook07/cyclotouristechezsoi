import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChangerLangMobi from "./ChangerLangMobi";
import imgLogo from "../../../../images/icones/logo.png";
import { faGlobeEurope, faBars, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Nav1Mobi = () => {

    const [nav1Visible, setNav1Visible] = useState(false);
    const [monterChangLang, setMontrerChangLang] = useState(false);

    const montrerMenu = () => {
        if (nav1Visible) {
            setNav1Visible(false);
            setMontrerChangLang(false);
        } else {
            setNav1Visible(true);
        }
    }

    const handleLang = () => {
        monterChangLang ? setMontrerChangLang(false) : setMontrerChangLang(true)
    };

    return (
        <Wrapper>
            <Tete>
                <Link to="/">
                    <img src={imgLogo} height="48px" alt="icône"></img>
                </Link>
                <FontAwesomeIcon icon={faBars} onClick={montrerMenu} size="2x" />
            </Tete>
            {
                nav1Visible &&
                <Menu>
                        <NavLink onClick={montrerMenu} to="/">Accueil</NavLink>
                        <NavLink onClick={montrerMenu} to="/apropos">À propos</NavLink>
                        <NavLink onClick={montrerMenu} to="/voyages-effectues">Voyages effectués</NavLink>
                        <NavLink onClick={montrerMenu} to="/contact">Contact</NavLink>
                        <ExternalLink onClick={montrerMenu} href="https://www.touristechezsoi.ca">
                            <span>Blogue</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </ExternalLink>
                        <Langue onClick={handleLang}>
                            <span>FR</span>
                            <span><FontAwesomeIcon icon={faGlobeEurope}/></span>
                        </Langue>
                        {
                            monterChangLang &&
                            <ChangerLangMobi />
                        }
                </Menu>
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    position: relative;
`

const Tete = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    svg {
        cursor: pointer;
    }
`

const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: -30px;
    > a {
        color: var(--c4);
        font-size: 20px;
        line-height: 1.7;
        text-decoration: none;
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
    font-size: large;
    display: flex;
    margin: 15px 0;
    svg {
        margin-left: 4px;
    }
    &:hover {
        color: var(--c6);
    }
`

export default Nav1Mobi;