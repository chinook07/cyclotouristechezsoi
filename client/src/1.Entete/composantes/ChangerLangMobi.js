import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ChangerLangMobi = () => {
    return (
        <Wrapper>
            <ul>
                <li><FontAwesomeIcon icon={faChevronRight} /><ExternalLink href="https://cyclotouristechezsoi.ca/english">English</ExternalLink></li>
                <li><FontAwesomeIcon icon={faChevronRight} /><ExternalLink href="https://cyclotouristechezsoi.ca/deutsch">Deutsch</ExternalLink></li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c1);
    border-radius: 0 0 15px 15px;
    height: fit-content;
    left: 50%;
    padding: 10px;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    z-index: 2;
    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
        li {
            display: flex;
            gap: 10px;
            margin: 10px 0;
            align-items: center;
            a {
                color: var(--c6);
                text-decoration: none;
            }
        }
    }
`

export default ChangerLangMobi;