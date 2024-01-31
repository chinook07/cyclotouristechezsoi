import styled from "styled-components";

import Realisations from "./Realisations";

const Principale = () => {
    return (
        <Wrapper>
            <h2>Mes réalisations</h2>
            <Realisations />
        </Wrapper>
    )
}

const Wrapper = styled.main``

export default Principale;