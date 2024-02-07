import styled from "styled-components";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChangerLang from "./ChangerLang";
import imgLogo from "../../../../images/icones/logo.png";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const Nav1 = () => {

    const [monterChangLang, setMontrerChangLang] = useState(false);

    const handleLang = () => {
        monterChangLang ? setMontrerChangLang(false) : setMontrerChangLang(true)
    };

    return (
        <Wrapper>
            <img src={imgLogo} height="48px" alt="website logo" />
            <Menu>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section1"
                    >Einleitung</ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section2"
                    >Einreisen</ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section3"
                    >Radrouten</ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section4"
                    >Verkehrsmittel</ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section5"
                    >Übernachten</ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        offset={-52}
                        smooth={true}
                        to="section6"
                    >Über mich</ScrollLink>
                </li>
            </Menu>
            <Langue onClick={handleLang}>
                <span>DE</span>
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
    background-color: var(--c4);
    display: flex;
    height: 52px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 1;
    > *:not(:last-child) {
        height: 52px;
    }
`

const Menu = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        color: var(--c11);
        cursor: pointer;
        padding: 15px;
        text-decoration: none;
        text-align: center;
        &:hover {
            background-color: var(--c5);
        }
    }
` 

const Langue = styled.div`
    align-items: center;
    color: var(--c11);
    cursor: pointer;
    display: flex;
    padding: 0 10px;
    svg {
        margin-left: 4px;
    }
    &:hover {
        background-color: var(--c6);
    }
`

export default Nav1;