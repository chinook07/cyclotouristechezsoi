import styled from "styled-components";
import { useState } from "react";

import FAQ1 from "./comp/FAQ1";
import FAQ2 from "./comp/FAQ2";

const FoireAuxQuestions = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

    return (
        <Wrapper>
            <FAQ1
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
            <FAQ2
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default FoireAuxQuestions;