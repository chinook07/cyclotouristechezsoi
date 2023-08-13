import styled from "styled-components";
import { useState } from "react";

import Choix from "./comp/comp2-Prep/Choix";
import Comm1 from "./comp/comp2-Prep/Comm1";
import Comm2 from "./comp/comp2-Prep/Comm2";

const Preparation = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

    return (
        <Wrapper>
            <Comm1
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
            <Comm2
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Preparation;