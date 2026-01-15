import styled from "styled-components";
import { useState } from "react";

import TableauSystemes from "./comp/comp5-Enf/TableauSystemes";

const Enfants = () => {

    const [boiteOuverte, setBoiteOuverte] = useState()

    return (
        <Wrapper>
            <h2>Voyager avec des enfants</h2>
            <p>On dit que la naissance d'un enfant bouscule les habitudes du quotidien. C'est vrai, mais ce n'empêche pas la pratique du cyclotourisme, moyennant quelques changements pour que tous puissent s'amuser.</p>
            <h3>Les différents systèmes de transport</h3>
            <p>Il existe plusieurs façons de transporter un enfant qui ne nécessitent pas l'achat d'un vélo-cargo onéreux.</p>
            <TableauSystemes />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Enfants;