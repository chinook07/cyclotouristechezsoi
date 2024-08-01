import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Guide = () => {
    return (
        <Wrapper>
            <h3>
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
                <span> Need a local guide in Montreal?</span>
            </h3>
            <p>Looking for a perfect way to start or finish your long-distance bike tour? Get a tour on foot or by bike, by a licensed guide!</p>
            <ExternalLink href="http://toursmontreal.ca/en" target="blank">Browse tours</ExternalLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c4);
    border-radius: 10px;
    color: var(--c0);
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    a {
        background-color: var(--c1);
        border-radius: 5px;
        color: var(--c10);
        display: block;
        margin: 0 auto;
        padding: 10px;
        text-decoration: none;
        width: fit-content;
    }
`

export default Guide;