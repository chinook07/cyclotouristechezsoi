import styled from "styled-components";
import { useContext } from "react";

import { CycloContext } from "../CycloContext";
import Nav1 from "./composantes/Nav1";
import Nav1Mobi from "./composantes/Nav1Mobi";
import Nav2 from "./composantes/Nav2";
import ImgTitre from "./composantes/ImgTitre";

const Entete = () => {

    const { ecran } = useContext(CycloContext);

    return (
        <Wrapper>
            {
                ecran < 700
                    ? <Nav1Mobi />
                    : <Nav1 />
            }
            <Nav2 />
            <ImgTitre />
        </Wrapper>
    )
}

const Wrapper = styled.header``



export default Entete;