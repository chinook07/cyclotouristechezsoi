import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay } from "@fortawesome/free-solid-svg-icons";

const FilDArianne = ({racine, choix}) => {
    return (
        <Wrapper>
            <NavLink to={`/${racine}`}>
                <FontAwesomeIcon icon={faPlay} />
            </NavLink>
            {
                choix.map((item, index) => {
                    return <NavLink key={index} to={`/${racine}/${item.lien}`} >{item.titre}</NavLink>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    a {
        color: black;
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

export default FilDArianne;