import styled from "styled-components";

import Intro from "./composantes/Intro";
import Visiting from "./composantes/Visiting";
import GettingIn from "./composantes/GettingIn";
import PlacesToRide from "./composantes/PlacesToRide";
import GettingAround from "./composantes/GettingAround";
import SpendingTheNight from "./composantes/SpendingTheNight";
import About from "./composantes/About";

const Corps = () => {
    return (
        <Wrapper>
            <Intro />
            <Visiting />
            <GettingIn />
            <PlacesToRide />
            <GettingAround />
            <SpendingTheNight />
            <About />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    background-color: var(--c0);
    padding: 40px;
    h2 svg {
        margin-right: 7px;
    }
    p {
        line-height: 1.6;
    }
`

export default Corps;