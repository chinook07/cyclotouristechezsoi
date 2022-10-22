import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CycloContext } from "../../CycloContext";
import imgLogo from "../../images/icones/logo.png";
import { faGlobeEurope, faBars, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Nav1Mobi = () => {

    const { lang } = useContext(CycloContext);
    const [nav1Visible, setNav1Visible] = useState(false);

    const montrerMenu = () => {
        nav1Visible === false ? setNav1Visible(true) : setNav1Visible(false);
    }


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
                        {/* <Langue>
                            <span>{lang}</span>
                            <span><FontAwesomeIcon icon={faGlobeEurope}/></span>
                        </Langue> */}
                </Menu>
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
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
    margin: -30px 0 5px;
    a {
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
    display: flex;
    margin-top: 15px;
    svg {
        margin-left: 4px;
    }
`

export default Nav1Mobi;