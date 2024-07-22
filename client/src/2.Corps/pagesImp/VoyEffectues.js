import styled from "styled-components";
import { useState } from "react";
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
        <>
            <section>
                <h2>Quelques idées pour vous mettre sur la bonne piste!</h2>
                <p>Que ça soit pour se renseigner, planifier ou tout simplement pour s'inspirer, voici mon historique de cyclotourisme, d'abord sur une carte, puis en ordre chronologique. Même si j'ai parcouru plusieurs des grandes destinations de la province, je sais qu'il reste énormément d'endroits à découvrir ici comme ailleurs.</p>
                <p>En juillet 2024, j'ai pu découvrir le nord du Vermont à vélo... jusqu'à ce que des inondations majeures me forcent à mettre le cap vers Québec. J'ai alors roulé sur une des plus longues pistes cyclables continues au Québec, soit de Richmond à Lévis. J'ai été émerveillé du début à la fin!</p>
                <Stats1 />
                <H3e>Nuitées<FontAwesomeIcon icon={faMoon} /></H3e>
                <Stats2 />
            </section>
            <section>
                <H2e>Galerie d'images<FontAwesomeIcon icon={faImages} /></H2e>
                {
                    !montrerGal
                    && <Galerie setMontrerGal={setMontrerGal} />
                }
                {
                    montrerGal
                    && <GalerieEtendue montrerGal={montrerGal} setMontrerGal={setMontrerGal} />
                }
            </section>
            <section>
                <H2e>Mes voyages sur une carte<FontAwesomeIcon icon={faMap} /></H2e>
                <Cartes />
            </section>
            <section>
                <H2e>Mes voyages en détail<FontAwesomeIcon icon={faClock} /></H2e>
                <VoyagesListe />
            </section>
        </>
    )
}

const H2e = styled.h2`
    svg {
        margin-left: 5px;
    }
`

const H3e = styled.h3`
    svg {
        margin-left: 5px;
    }
`

const ListeObjectifs = styled.ol`
    list-style-position: inside;
    padding-left: 0;
`

export default VoyEffectues;