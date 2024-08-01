import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Guide = () => {
    return (
        <Wrapper>
            <h3>
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
                <span> Brauchen Sie einen lokalen Guide in Montreal?</span>
            </h3>
            <p>Suchen Sie nach einer perfekten Art, Ihre Fernradreise zu beginnen oder zu beenden? Holen Sie sich eine Tour zu Fuß oder mit dem Rad, von einem lizenzierten Guide!</p>
            <ExternalLink href="http://toursmontreal.ca/de" target="blank">Touren durchsuchen</ExternalLink>
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