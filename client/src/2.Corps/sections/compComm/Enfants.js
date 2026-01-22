import styled from "styled-components";

import TableauSystemes from "./comp/comp5-Enf/TableauSystemes";
import MeilleursChoix from "./comp/comp5-Enf/MeilleursChoix";

const Enfants = () => {

    return (
        <Wrapper>
            <h2>Voyager avec des enfants</h2>
            <p>On dit que la naissance d'un enfant bouscule les habitudes du quotidien. C'est vrai, mais ce n'empêche pas la pratique du cyclotourisme, moyennant quelques changements pour que tous puissent s'amuser.</p>
            <h3>Les différents systèmes de transport</h3>
            <p>Il existe plusieurs façons de transporter un enfant qui ne nécessitent pas l'achat d'un vélo-cargo onéreux.</p>
            <TableauSystemes />
            <h3>Les meilleures configurations</h3>
            <p>Tel qu'on constate dans le tableau ci-dessus, il n'y a pas d'approche universelle. Chaque système a ses avantages et ses inconvénients. Parfois, il peut être judicieux de combiner deux systèmes pour le bonheur des parents et de l'enfant.</p>
            <MeilleursChoix />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Enfants;