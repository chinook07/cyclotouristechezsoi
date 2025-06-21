import styled from "styled-components";
import { Element } from 'react-scroll';

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
            <Element name="section1">
                <Visiting />
            </Element>
            <Element name="section2">
                <GettingIn />
            </Element>
            <Element name="section3">
                <PlacesToRide />
            </Element>
            <Element name="section4">
                <GettingAround />
            </Element>
            <Element name="section5">
                <SpendingTheNight />
            </Element>
            <Element name="section6">
                <About />
            </Element>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    background-color: var(--c0);
    padding: 40px;
    h2 svg {
        margin-right: 7px;
    }
    h3 {
        margin-top: 25px;
    }
    p {
        line-height: 1.6;
    }
    @media screen and (max-width: 750px) {
        padding: 15px;
    }
`

export default Corps;