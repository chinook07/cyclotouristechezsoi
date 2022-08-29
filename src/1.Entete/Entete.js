import styled from "styled-components";

import Nav1 from "./composantes/Nav1";
import Nav2 from "./composantes/Nav2";
import ImgTitre from "./composantes/ImgTitre";

const Entete = () => {

    return (
        <Wrapper>
            <Nav1 />
            <Nav2 />
            <ImgTitre />
        </Wrapper>
    )
}

const Wrapper = styled.header``



export default Entete;