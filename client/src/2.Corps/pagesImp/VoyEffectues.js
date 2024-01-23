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
                <p>L'été 2024 arrive à grands pas. Deux grands projets s'annoncent :</p>
                <ListeObjectifs>
                    <li>Je veux progressivement initier mon fils qui aura 18 mois cet été, au cyclotourisme. Si j'aimerais faire de longs voyages avec lui, nos escapades cette année seront plus modestes.</li>
                    <li>Équipé de mon passeport et de l'argent américain, je veux découvrir une région que j'ai jusqu'à maintenant boudée : le Vermont. Je vise un parcours d'environ 10 jours à travers le nord de l'état.</li>
                </ListeObjectifs>
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