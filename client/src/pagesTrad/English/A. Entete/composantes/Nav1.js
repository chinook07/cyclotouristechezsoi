import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChangerLang from "./ChangerLang";
import imgLogo from "../../../../images/icones/logo.png";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { CycloContext } from "../../../../CycloContext";

const Nav1 = () => {

    const { setLangSec } = useContext(CycloContext)

    const [monterChangLang, setMontrerChangLang] = useState(false);
    
    const urlActuel = useLocation().pathname;

    const handleLang = () => {
        monterChangLang ? setMontrerChangLang(false) : setMontrerChangLang(true)
    };

    const choisirSection = (sec) => {
        console.log("choisir section", sec);
        setLangSec(sec);
    }

    return (
        <Wrapper>
            {
                urlActuel === "/english"
                    ? <img src={imgLogo} height="48px" alt="website logo" />
                    : <Link to="/english">
                        <img src={imgLogo} height="48px" alt="back to home page" />
                    </Link>
            }
            <Menu>
                <li onClick={() => choisirSection(1)}>Visiting Quebec</li>
                <li onClick={() => choisirSection(2)}>Getting in</li>
                <li onClick={() => choisirSection(3)}>Places to ride</li>
                <li onClick={() => choisirSection(4)}>Getting around</li>
                <li onClick={() => choisirSection(5)}>Spending the night</li>
                <li onClick={() => choisirSection(6)}>About</li>
            </Menu>
            <Langue onClick={handleLang}>
                <span>EN</span>
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
    position: relative;
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