import styled from "styled-components";

import CalculCarburant from "../CalculCarburant";

const Boite2 = () => {
    return (
        <Wrapper>
            <p>Pour calculer le pourcentage de carburant qu'il vous reste, il suffit de peser votre cartouche, et de connaitre le poids de celle-là lorsqu'elle est vide.</p>
            <p>Si vous avez un réchaud à l'isobutane, vous pouvez utiliser les calculateurs ci-dessous selon la bonbonne que vous avez.</p>
            <ol>
                <li>Quelle était la quantité de carburant (g) à l'achat? Regardez l'étiquette et sélectionnez le bon montant.</li>
                <li>Pesez maintenant votre cartouche telle quelle et entrez le poids (g) dans la boite correspondante.</li>
            </ol>
            <CalculCarburant />
            <Details>*À noter que le poids des cartouches peut varier légèrement selon la marque.</Details>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Details = styled.p`
    font-style: italic;
    font-size: small;
`

export default Boite2;