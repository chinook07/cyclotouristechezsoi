import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Feux = () => {
    return (
        <Wrapper>
            <p>Pour savoir comment les feux de forêt et la fumée émanant de ceux-ci affectera votre voyage</p>
            <ul>
                <li>
                    <p>Feux en cours :</p>
                    <ExternalLink href="https://sopfeu.qc.ca/">SS</ExternalLink>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: red;
    border-radius: 5px;
    color: var(--c11);
    display: block;
    margin: 0 auto;
    max-width: 800px;
    padding: 10px;
`

export default Feux;