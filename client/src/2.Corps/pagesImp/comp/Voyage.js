import styled from "styled-components";
import { useState } from "react";

import Recto from "./Recto";
import Verso from "./Verso";

const Voyage = ({ index, item }) => {
    const [montrerVerso, setMontrerVerso] = useState(false);
    const retournerCarte = () => setMontrerVerso(true);
    const retourCarte2 = () => setMontrerVerso(false);


    return (
        <Wrapper onMouseEnter={retournerCarte} onMouseLeave={retourCarte2}>
            {
                !montrerVerso
                && <Recto index={index} item={item} />
            }
            {
                montrerVerso
                && <Verso index={index} item={item} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    height: 470px;
    margin: 15px;
    text-align: center;
    width: 250px;
`

export default Voyage;