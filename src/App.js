import { useContext } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { CycloContext } from "./CycloContext";

import Entete from "./1.Entete/Entete";
import Corps from "./2.Corps/Corps";
import Pied from "./3.Pied/Pied";

const App = () => {
    return (
        <Wrapper>
            <GlobalStyles />
            <Entete />
            <Corps />
            <Pied />
        </Wrapper>
    );
}

const Wrapper = styled.div``

export default App;
