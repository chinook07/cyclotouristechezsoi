import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import DeuxFiguresPetit from "../../../../../../CompReutilisables/DeuxFiguresPetit";
import camping1 from "../../../images/camping-tomifobia.webp";
import camping2 from "../../../images/camping-rouge.webp";

const Boite11 = () => {

    const photo5 = {
		src: camping1,
		alt: "vélo sur le bord d'une piste, beau terrain dégagé sous les pins près d'une rivière",
		cap: "Bivouac interdit mais tranquillité (quasi-) garantie!",
	};

	const photo6 = {
		src: camping2,
		alt: "tente montée sur une plage près d'une rivière",
		cap: "Bivouac autorisé et beau temps illimité!",
    };

    return (
        <Wrapper>
            <p>Le Québec est parsemé de <Gras>campings privés</Gras> où il est souvent possible de se pointer sans réservation, puisqu'une tente et un vélo ne prend pas autant de place qu'une roulotte et deux camionnettes. Une nuitée peut couter de 20 à 50 $, avec une moyenne qui tourne de plus en plus autour de 40 $. Certains font même partie du réseau <ExternalLink href="https://www.routeverte.com/se-loger/">Bienvenue cyclistes</ExternalLink> de Vélo Québec, ce qui garantit une place aux cyclocampeurs spontanés. La quasi-totalité des <Gras>parcs nationaux du Québec</Gras> en font partie et offrent même un tarif par personne, très bénéfique lorsqu'on voyage en solo.</p>
            <p>Pour éviter de payer ce prix et de devoir supporter les nuisances sonores d'un camping aménagé, il est possible de <ExternalLink href="https://educaloi.qc.ca/actualites-juridiques/camping-peut-on-installer-sa-tente-nimporte-ou/">s'installer sur les terres du domaine public</ExternalLink>. Il faut bien sûr respecter quelques règlements de civisme, et plusieurs exceptions s'appliquent, car certaines juridictions encadrent la pratique différemment. On utilise le terme <Gras>camping sauvage</Gras> ou bien le <Gras>bivouac</Gras>.</p>
            <DeuxFiguresPetit photo1={photo5} photo2={photo6} />
            <p>S'il y a un doute de la légalité de la chose, la bonne pratique consiste à monter son campement en soirée et de partir tôt le lendemain. On gagne aussi lorsqu'on s'assure de bivouaquer loin des regards.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
	font-weight: bold;
`;

export default Boite11;