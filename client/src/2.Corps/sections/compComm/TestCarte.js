import styled from "styled-components";
import { useState } from "react";

import CarteCampings from "./comp/comp4-Biv/CarteCampings";

const TestCarte = () => {

    const [ajoutsFaits, setAjoutsFaits] = useState(0)

    return (
        <Wrapper>
            <CarteCampings ajoutsFaits={ajoutsFaits} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default TestCarte;