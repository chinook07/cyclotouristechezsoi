import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
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
                        <li>
                            <ScrollLink
                                offset={-70}
                                onClick={montrerMenu}
                                smooth={true}
                                to="section1"
                            >Visiting Quebec</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                offset={-70}
                                onClick={montrerMenu}
                                smooth={true}
                                to="section2"
                            >Getting in</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                offset={-70} 
                                onClick={montrerMenu} 
                                smooth={true} 
                                to="section3"
                            >Places to ride</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                offset={-70} 
                                onClick={montrerMenu} 
                                smooth={true} 
                                to="section4"
                            >Getting around</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                offset={-70} 
                                onClick={montrerMenu} 
                                smooth={true} 
                                to="section5"
                            >Spending the night</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                offset={-70} 
                                onClick={montrerMenu} 
                                smooth={true} 
                                to="section6"
                            >About</ScrollLink>
                        </li>
                        <Langue onClick={handleLang}>
                            <span>EN</span>
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
    background-color: var(--c4);
    position: fixed;
    width: 100%;
    z-index: 1;
`

const Tete = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    svg {
        color: var(--c11);
        cursor: pointer;
    }
`

const Menu = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: -30px 0 0;
    padding: 0;
    li {
        color: var(--c11);
        cursor: pointer;
        font-size: 20px;
        line-height: 1.7;
        list-style: none;
        text-decoration: none;
        &:hover {
            color: var(--c1);
        }
    }
`

const Langue = styled.div`
    align-items: center;
    color: var(--c11);
    cursor: pointer;
    font-size: large;
    display: flex;
    margin: 15px 0;
    svg {
        margin-left: 4px;
    }
    &:hover {
        color: var(--c1);
    }
`

export default Nav1Mobi;