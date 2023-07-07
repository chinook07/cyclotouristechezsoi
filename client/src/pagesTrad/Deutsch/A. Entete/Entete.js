import styled from "styled-components";
import { useContext } from "react";

import { CycloContext } from "../../../CycloContext";
import Nav1 from "./composantes/Nav1";
import Nav1Mobi from "./composantes/Nav1Mobi";
import Caroussel from "./composantes/Caroussel";

const Entete = () => {

    const { ecran } = useContext(CycloContext);

    return (
        <Wrapper>
            {
                ecran < 880
                    ? <Nav1Mobi />
                    : <Nav1 />
            }
            <Caroussel />
        </Wrapper>
    )
}

const Wrapper = styled.header`
    @media print {
        display: none;
    }
`



export default Entete;