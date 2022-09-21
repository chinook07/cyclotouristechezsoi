import styled from "styled-components";
import { useState } from "react";

import Choix from "./comp/Choix";
import Comm1 from "./comp/Comm1";
import Comm2 from "./comp/Comm2";

const Preparation = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

    return (
        <Wrapper>
            <p></p>
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