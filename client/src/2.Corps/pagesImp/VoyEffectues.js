import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Stats1 from "./comp/Stats1";
import Stats2 from "./comp/Stats2";
import Cartes from "./comp/Cartes";
import Galerie from "./comp/Galerie";
import GalerieEtendue from "./comp/GalerieEtendue";
import VoyagesListe from "./comp/VoyagesListe";
import { faMoon, faMap, faImages, faClock } from "@fortawesome/free-solid-svg-icons";

const VoyEffectues = () => {

    const [montrerGal, setMontrerGal] = useState(false);

    return (
        <Wrapper>
            <h2>Quelques idées pour vous mettre sur la bonne piste!</h2>
            <p>Que ça soit pour se renseigner, planifier ou tout simplement pour s'inspirer, voici mon historique de cyclotourisme, d'abord sur une carte, puis en ordre chronologique. Même si j'ai parcouru plusieurs des grandes destinations de la province, je sais qu'il reste énormément d'endroits à découvrir ici comme ailleurs.</p>
            <p>En 2022, j'ai enfin réalisé mon projet de découvrir l'Acadie à vélo, me rendant jusqu'aux Iles-de-la-Madeleine. Ce fut le voyage le plus long que j'ai entrepris, ne me lassant jamais des différents points de vue sur la mer. Je suis aussi allé rouler 4 jours dans le bois, à cheval entre les Laurentides et l'Outaouais. Ce périple « en garnotte », fut l'occasion idéale de s'échapper des foules et de profiter du silence de la forêt. Quels objectifs pour l'an prochain? Bonne question!</p>
            <Stats1 />
            <h3>Nuitées<FontAwesomeIcon icon={faMoon} /></h3>
            <Stats2 />
            <h2>Galerie d'images<FontAwesomeIcon icon={faImages} /></h2>
            {
                !montrerGal
                && <Galerie montrerGal={montrerGal} setMontrerGal={setMontrerGal} />
            }
            {
                montrerGal
                && <GalerieEtendue montrerGal={montrerGal} setMontrerGal={setMontrerGal} />
            }
            <h2>Mes voyages sur une carte<FontAwesomeIcon icon={faMap} /></h2>
            <Cartes />
            <h2>Mes voyages en détail<FontAwesomeIcon icon={faClock} /></h2>
            <VoyagesListe />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h2, h3 {
        svg {
            margin-left: 5px;
        }
    }
`

export default VoyEffectues;