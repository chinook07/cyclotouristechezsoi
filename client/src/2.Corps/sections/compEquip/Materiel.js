import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RubanIcones from "./comp/RubanIcones";
import Rubriques from "./comp/Rubriques";

const Materiel = () => {

    const [montrerRubrique, setMontrerRubrique] = useState(0);

    const changerRubrique = (r) => {setMontrerRubrique(r)};

    return (
        <Wrapper>
            <RubanIcones changerRubrique={changerRubrique} montrerRubrique={montrerRubrique} />
            <Rubriques montrerRubrique={montrerRubrique} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Materiel;