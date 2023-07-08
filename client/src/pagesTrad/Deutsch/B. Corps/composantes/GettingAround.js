import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faTrain } from "@fortawesome/free-solid-svg-icons";

const GettingAround = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faTrain} />
                <span>Verkehrsmittel</span>
            </h2>
            <p>Die Fahrradmitnahme in öffentlichen Verkehrsmitteln ist nützlich, wenn man nicht unbegrenzt Zeit hat, Quebec nur mit dem Rad zu erkunden. Touristen, die aus dem Ausland anreisen und eine bestimmte Region mit dem Fahrrad erkunden wollen, müssen unter Umständen in eine Großstadt fliegen und mit dem Zug oder Bus zu ihrem Radreiseziel fahren. Glücklicherweise ist das nicht mehr so komplex.</p>
            <p>Wenn Sie mit einem Intercity-Zug <ExternalLink href="https://www.viarail.ca/en/travel-info/baggage/non-standard-items" target="blank">(VIA Rail)</ExternalLink> reisen, können Sie nur bei Zügen mit aufgegebenem Gepäck Ihr Fahrrad, das normalerweise unverpackt ist, gegen eine Gebühr von $25 mitnehmen. Charlevoix bietet einen <ExternalLink href="https://traindecharlevoix.com/en/le-train/luggage/" target="blank">regionalen Bahnverkehr</ExternalLink> an, bei dem Fahrräder für einen geringen Preis befördert werden. In der Gegend von Montreal bietet Exo einen <ExternalLink href="https://exo.quebec/en/trip-planner/bike/riding-public-transit" target="blank">S-bahn</ExternalLink> an, der es erlaubt, Fahrräder an Bord aller Abfahrten zu nehmen.</p>
            <p>Busse sind etwas komplizierter, da das Fahrrad normalerweise in eine Kiste gelegt werden muss, obwohl einige Transportunternehmen sie in riesigen Plastiktüten akzeptieren. Das entsprechende Verpackungsmaterial wird an vielen Servicestellen von <ExternalLink href="https://www.expedibus.com/en" target="blank">Expedibus</ExternalLink> verkauft, dem Unternehmen, das den Versand von Gepäck und Fahrrädern in ganz Quebec verwaltet. Rufen Sie im Voraus an, um sicherzugehen, dass an Ihrem Abreiseort Kisten vorhanden sind! Es gibt einige regionale Transportunternehmen, die es erlauben, Fahrräder auf einem Gepäckträger an der Vorderseite eines Busses mitzunehmen.</p>
            <CarteUMap>
                <iframe title="map of transport options with a bike" allowFullScreen src="//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false" />
                <ExternalLink href="https://umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264" target="blank">Vollbild</ExternalLink>
                <p>Diese Karte (auf Französisch) gibt Ihnen alle Informationen über die Verkehrsdienste, einschließlich der Frage, wo und wie Sie ein Fahrrad mitnehmen können.</p>
            </CarteUMap>
        </section>
    )
}

const CarteUMap = styled.div`
    iframe {
        border: none;
        border-radius: 5px;
        display: block;
        height: 480px;
        margin: 0 auto;
        width: MIN(100%, 640px);
    }
    a {
        display: block;
        font-size: small;
        margin-top: 15px;
        text-align: center;
    }
    p {
        font-size: small;
        text-align: center;
    }
`

export default GettingAround;