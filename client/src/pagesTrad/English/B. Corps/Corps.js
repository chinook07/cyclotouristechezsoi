import styled from "styled-components";

import Intro from "./composantes/Intro";
import Visiting from "./composantes/Visiting";
import GettingIn from "./composantes/GettingIn";

const Corps = () => {
    return (
        <Wrapper>
            <Intro />
            <Visiting />
            <GettingIn />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c0);
    padding: 40px;
    p {
        line-height: 1.6;
    }
`

export default Corps;