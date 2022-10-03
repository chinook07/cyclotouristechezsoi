import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { useState } from "react";

import indexVilles from "./donnees/indexVilles.json";
import trajets from "./donnees/trajets.json";
import Recherche from "./comp/Recherche";
import Resultats from "./comp/Resultats";
import Possibilites from "./comp/Possibilites";

const Synthese = () => {

    const [recherchee, setRecherchee] = useState("");
    const [villeSouhaitee, setVilleSouhaitee] = useState();

    return (
        <Wrapper>
            <h2>Carte globale</h2>
            <Carte>
                <iframe
                    frameBorder="0"
                    allowFullScreen
                    title="Carte du Québec cyclable"
                    src={`//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"`}
                />
                <ExternalLink href="//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264">Voir en plein écran</ExternalLink>
            </Carte>
            <h2>Recherche par ville</h2>
            <Recherche setRecherchee={setRecherchee} setVilleSouhaitee={setVilleSouhaitee} />
            {
                recherchee &&
                <Resultats
                    recherchee={recherchee}
                    setVilleSouhaitee={setVilleSouhaitee}
                />
            }
            
            {
                villeSouhaitee &&
                <Possibilites villeSouhaitee={villeSouhaitee} />
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Carte = styled.figure`
    height: 500px;
    margin: 10px auto 70px;
    max-height: 70vh;
    max-width: 860px;
    width: 100%;
    iframe {
        box-shadow: var(--c3) 5px 5px 5px 5px;
        display: block;
        height: 100%;
        width: 100%;
        &:hover {
            box-shadow: var(--c6) 5px 5px 5px 5px;
        }
    }
    > a {
        display: block;
        margin-top: 15px;
        text-align: center;
    }
`

export default Synthese;