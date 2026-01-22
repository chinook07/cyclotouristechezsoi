import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay } from "@fortawesome/free-solid-svg-icons";

const FilDArianne = ({racine, choix}) => {
    return (
        <Wrapper aria-label="navigation section">
            <NavLink to={`/${racine}/`}>
                <FontAwesomeIcon icon={faPlay} />
                <span>Intro</span>
            </NavLink>
            {
                choix.map((item, index) => {
                    return <NavLink key={index} to={`/${racine}/${item.lien}`} >{item.titre}</NavLink>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    margin: 25px 0;
    a {
        color: var(--c10);
        padding-left: 10px;
        text-decoration: none;
        svg {
            margin-right: 5px;
        }
        &:hover {
            color: var(--c5);
        }
        &.active {
            font-weight: bold;
        }
        @media screen and (min-width: 601px) {
            &:not(:last-child)::after {
                content: "|";
                margin-left: 10px;
            }
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    
`

export default FilDArianne;