import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faRoute } from "@fortawesome/free-solid-svg-icons";
import Veloroutes from "./sousComposantes/Veloroutes";
import Guide from "./sousComposantes/Guide";

const PlacesToRide = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faRoute} />
                <span>Places to ride</span>
            </h2>
            <p>Oh the places to go! Quebec is known for the great cycling opportunities it presents, and <ExternalLink href="https://www.routeverte.com/en/" target="blank">the Route verte</ExternalLink>, which in reality is a network of seven cycle routes criss-crossing the province. Just over half of the Route verte utilizes on-road segments, either quiet country roads or shoulders of busier routes. The rest is off-road, normally right-of-ways comprising of former railways.</p>
            <Veloroutes />
            <Guide />
            <p>Almost all cycle routes can be found on OSM (OpenStreetMap). You can view the data on a map by selecting either the <ExternalLink href="https://www.openstreetmap.org/#map=8/46.062/-73.526&layers=Y" target="blank">CyclOSM</ExternalLink> or <ExternalLink href="https://www.openstreetmap.org/#map=8/46.062/-73.526&layers=C" target="blank">OpenCycleMap</ExternalLink> layers. A multitude of route planners which draw their information from OSM exist, including <ExternalLink href="https://brouter.de/brouter-web" target="blank">Brouter</ExternalLink>, <ExternalLink href="https://cycle.travel/map" target="blank">cycle.travel</ExternalLink>, <ExternalLink href="https://ridewithgps.com/routes/new" target="blank">RideWithGPS</ExternalLink> and <ExternalLink href="https://www.komoot.com/plan" target="blank">Komoot</ExternalLink>.</p>
            <p>In addition to the Route verte, there are many other trails and on-road cycling opportunities across all regions. Cycling is not permitted on autoroutes (motorways or expressways), numbered between 1 and 99, and 401 to 999. The national highways (trunk roads) are numbered from 101 to 199, and regional highways (distributor roads) run between 201 and 399. Both categories are maintained by the provincial government. Cycling is permitted on all of them except short stretches with autoroute-like characteristics. Selecting the bicycle friendliness layer on the legend of either the <ExternalLink href="https://www.quebec511.info/en/Carte/Default.aspx" target="blank">Quebec 511</ExternalLink> or the <ExternalLink href="https://www.routeverte.com/en/" target="blank">Route verte</ExternalLink> interactive map will allow you to click on a segment and see traffic volume and shoulder width, amongst other relevant information.</p>
            <p>If you care for details, it's helpful to know that even-numbered routes normally follow the St. Laurent River, while odd-numbered ones are perpendicular. The St. Laurent is considered a <Italique>fleuve</Italique> in French, just like the Nile or the Rhine. <Italique>Rivière</Italique> is what all other rivers are referred to. There is only one <Italique>fleuve</Italique> in Quebec, so when someone uses that word, they are talking about that one river alone.</p>
        </section>
    )
}

const Italique = styled.span`
    font-style: italic;
`

export default PlacesToRide;