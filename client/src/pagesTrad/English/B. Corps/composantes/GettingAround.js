import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrain } from "@fortawesome/free-solid-svg-icons";

const GettingAround = () => {
    return (
        <Wrapper>
            <h2>
                <FontAwesomeIcon icon={faTrain} />
                <span>Getting Around</span>
            </h2>
            <h3></h3>
            <p></p>
        </Wrapper>
    )
}

const Wrapper = styled.section``

export default GettingAround;