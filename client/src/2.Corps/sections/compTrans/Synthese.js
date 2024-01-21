import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { useState } from "react";

import Recherche from "./comp/Recherche";
import Resultats from "./comp/Resultats";
import Possibilites from "./comp/Possibilites";

const Synthese = () => {

    const [recherchee, setRecherchee] = useState("");
    const [villeSouhaitee, setVilleSouhaitee] = useState();

    return (
        <div>
            <section>
                <h2>Carte des transports</h2>
                <Carte>
                    <iframe
                        aria-hidden
                        allowFullScreen
                        title="Carte du Québec cyclable"
                        src={`//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"`}
                    />
                    <ExternalLink href="//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264">Voir en plein écran</ExternalLink>
                </Carte>
            </section>
            <section>
                <h2>Recherche par ville</h2>
                <p>Attention! Sont exclus des résultats la plupart des circuits d'autobus qui ne sont en opération que dans la sens du pointe, c'est-à-dire de la banlieue vers le centre-ville le matin, et vice-versa.</p>
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
            </section>
        </div>
    )
}

const Carte = styled.figure`
    height: 500px;
    margin: 10px auto 70px;
    max-height: 70vh;
    max-width: 860px;
    width: 100%;
    iframe {
        border: 0;
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