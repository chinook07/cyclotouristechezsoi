import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NouvelleCarteCampings = () => {
    return (
        <Wrapper>
            <iframe allowFullScreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/dormir-gratuitement-en-velo_1365588?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=caption&captionBar=false&captionMenus=true&locateControl=true&captionControl=true" title="carte des campings gratuits"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/dormir-gratuitement-en-velo_1365588?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=caption&captionBar=false&captionMenus=true&locateControl=true&captionControl=true">Voir en plein écran</a></p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    iframe {
        border: 0;
        height: 400px;
        width: 100%;
    }
`

export default NouvelleCarteCampings;