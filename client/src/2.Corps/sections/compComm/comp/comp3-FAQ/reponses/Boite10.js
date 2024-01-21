import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import DeuxFiguresPetit from "../../../../../../CompReutilisables/DeuxFiguresPetit";
import meteo1 from "../../../images/radar.webp";
import meteo3 from "../../../images/poutine-ingredients.webp";
import meteo2 from "../../../images/cumulonimbus.webp";
import meteo4 from "../../../images/poutine.webp";

const Boite10 = () => {

    const photo1 = {
		src: meteo1,
		alt: "un radar météo indiquant des orages",
		cap: "Un radar annonçant le déluge.",
	};

	const photo2 = {
		src: meteo2,
		alt: "ciel très orageux",
		cap: "La pluie commence dans 3, 2, 1...",
	};

	const photo3 = {
		src: meteo3,
		alt: "des frites, de la sauce et du fromage",
		cap: "Veille de poutine en vigueur. On a tout ce qu'il faut pour un souper succulent.",
	};

	const photo4 = {
		src: meteo4,
		alt: "une poutine prête à manger",
		cap: "AVERTISSEMENT de poutine. Préparez-vous à manger!",
    };
    
    return (
        <Wrapper>
            <p>Il ne faut pas se laisser décourager! Lors d'une sortie de plusieurs journées, il est rare de ne jamais avoir la pluie. Il est alors primordial de bien s'équiper d'un manteau et de pantalons imperméables pour pouvoir rouler aisément sous la pluie. De plus, les garde-boues empêchent de salir ses vêtements.</p>
            <DeuxFiguresPetit photo1={photo1} photo2={photo2} />
            <p>L'été, lorsque le temps est chaud et instable, les conditions peuvent changer rapidement. Il est alors judicieux de jeter un coup d'œil <ExternalLink href="https://meteo.gc.ca/map_f.html?layers=radar&zoom=-1&center=45.52,-73.65">au radar météo</ExternalLink>, ainsi qu'à <ExternalLink href="https://meteo.gc.ca/lightning/index_f.html?id=QUE#mapTop">la carte du risque de foudre</ExternalLink>. Il devient possible de prédire avec
                quasi-certitude la venue d'averses et d'orages violents.</p>
            <p>Enfin, il est bon de connaitre la différence entre une veille d'orages violents (ou de tornade) et une alerte. La première indique que les ingrédients (chaleur, humidité, instabilité, etc.) sont présents, tandis que la deuxième nous informe que l'évènement est en formation ou en cours. Une analogie loufoque mais pertinente serait de comparer ce concept à notre mets national.</p>
            <DeuxFiguresPetit photo1={photo3} photo2={photo4} />
            <p>À noter que les tornades au Québec sont rares, mais puisqu'on en recense environ 5 par année, c'est une bonne idée de savoir <ExternalLink href="https://www.preparez-vous.gc.ca/cnt/hzd/trnds-drng-fr.aspx">quoi faire</ExternalLink> si ça arrive durant votre périple.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite10;