import styled from "styled-components";
import { useState } from "react";

import Choix from "./comp/Choix";
import Partie1 from "./comp/Partie1";
import Partie2 from "./comp/Partie2";

const Preparation = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

    return (
        <Wrapper>
            <p></p>
            <Partie1
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
            <Partie2
                boiteOuverte={boiteOuverte}
                setBoiteOuverte={setBoiteOuverte}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Preparation;