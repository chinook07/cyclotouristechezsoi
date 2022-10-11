import styled from "styled-components";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

const velo = keyframes`
    0% {transform: rotate(0)};
    25% {transform: rotate(90deg)};
    50% {transform: rotate(180deg)};
    75% {transform: rotate(270deg)};
    100% {transform: rotate(360deg)};
`

const Chargement = () => {
    return (
        <Wrapper icon={faPersonBiking} size="3x" />
    )
}

const Wrapper = styled(FontAwesomeIcon)`
    animation: ${velo} 1s linear infinite;
    display: block;
    margin: 5px auto;
`

export default Chargement;