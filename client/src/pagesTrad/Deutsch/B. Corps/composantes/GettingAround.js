import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faTrain } from "@fortawesome/free-solid-svg-icons";

const GettingAround = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faTrain} />
                <span>Getting Around</span>
            </h2>
            <p>Getting around Quebec with a bike in public transport is useful when one doesn't have unlimited time to explore only by bicycle. Tourists arriving from abroad who want to cycle a particular region may have to fly into a major city and take a train or a bus to their cycling destination. Fortunately, it isn't as complex any more.</p>
            <p>When travelling by intercity train <ExternalLink href="https://www.viarail.ca/en/travel-info/baggage/non-standard-items" target="blank">(VIA Rail)</ExternalLink>, only those offering checked baggage service enable you to bring your bicycle, normally unpacked, for a $25 fee. Charlevoix offers <ExternalLink href="https://traindecharlevoix.com/en/le-train/luggage/" target="blank">regional rail service</ExternalLink> with bikes travelling for a small fee. In the Montréal area, Exo provides <ExternalLink href="https://exo.quebec/en/trip-planner/bike/riding-public-transit" target="blank">regional commuter service</ExternalLink> allowing bikes on board all trains.</p>
            <p>Buses are a bit more complex, as the bike will normally have to go into a box, though some carriers accept them in giant plastic bags. The appropriate packing material is sold at many service points of <ExternalLink href="https://www.expedibus.com/en" target="blank">Expedibus</ExternalLink>, the company which manages the shipping of baggage and bicycles across Quebec. Call in advance to make sure they have boxes at your point of departure! There are some regional carriers which allow bikes to be carried on a rack at the front of a bus.</p>
            <CarteUMap>
                <iframe title="map of transport options with a bike" allowFullScreen src="//umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false" />
                <ExternalLink href="https://umap.openstreetmap.fr/fr/map/transport-intermodal-train-et-autobus-velo_570264" target="blank">Full screen</ExternalLink>
                <p>This map (in French) gives you all the information regarding transport services, including where and how you can transport a bike.</p>
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