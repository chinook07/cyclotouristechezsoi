import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay, faMapSigns, faSuitcase, faTrain } from "@fortawesome/free-solid-svg-icons";

const Nav2 = () => {

    //ARIA

    return (
        <Wrapper>
            <NavLink to="/commencement/" aria-label="section commencer">
                <span>Commencer</span>
                <FontAwesomeIcon icon={faPlay} />
            </NavLink>
            <NavLink to="/destinations/" aria-label="section destinations">
                <span>Découvrir</span>
                <FontAwesomeIcon icon={faMapSigns} />
            </NavLink>
            <NavLink to="/equipement/" aria-label="section équipement">
                <span>S'équiper</span>
                <FontAwesomeIcon icon={faSuitcase} />
            </NavLink>
            <NavLink to="/transport/" aria-label="section transport">
                <span>Se transporter</span>
                <FontAwesomeIcon icon={faTrain} />
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    background-color: var(--c4);
    display: flex;
    justify-content: center;
    a {
        color: var(--c11);
        padding: 15px 25px;
        text-decoration: none;
        &:hover {
            background-color: var(--c5);
        }
        &.active {
            background-color: var(--c6);
        }
    }
    @media screen and (max-width: 600px) {
        span {
            display: none;
        }
    }
    @media screen and (min-width: 600px) {
        svg {
            display: none;
        }
    }
`

export default Nav2;