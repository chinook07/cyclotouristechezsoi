import styled from "styled-components";
import { useState } from "react";

import Recto from "./Recto";
import Verso from "./Verso";

const Voyage = ({ index, item }) => {
    const [montrerVerso, setMontrerVerso] = useState(false);
    const changerCarte = () => montrerVerso ? setMontrerVerso(false) : setMontrerVerso(true);

    return (
        <Wrapper>
            {
                !montrerVerso
                && <Recto index={index} item={item} changerCarte={changerCarte} />
            }
            {
                montrerVerso
                && <Verso index={index} item={item} changerCarte={changerCarte} />
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