import styled from "styled-components";

import Tete from "./Tete";
import Principale from "./Principale";
import Pied from "./Pied";

const Corps = () => {
    return (
        <Wrapper>
            <Tete />
            <Principale />
            <Pied />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 15px;
`

export default Corps;