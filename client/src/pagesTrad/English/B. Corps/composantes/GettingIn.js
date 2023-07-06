import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { CycloContext } from "../../../../CycloContext";
import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import imgTrain from "../../../images/bike-on-train.jpg";

const GettingIn = () => {

    const { mesuresMetriques } = useContext(CycloContext);

    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faPlaneArrival} />
                <span>Getting In</span>
            </h2>
            <p>Flying into Quebec will most likely bring you into Montréal's international airport. If this is the case, you can cycle into the city quite easily following cycle tracks and lanes towards the lakeshore where the Route verte 5 and the Lachine Canal bike route whisk you into the city centre. Commuter trains (infrequent outside of peak times) <ExternalLink href="https://exo.quebec/en/trip-planner/train/vaudreuil%E2%80%93hudson" target="blank">run from Dorval station</ExternalLink>, {mesuresMetriques ? <span>just over a kilometre</span> : <span>about a mile</span>} from the airport, to Lucien-L'Allier station, in the city centre. <ExternalLink href="https://exo.quebec/en/trip-planner/bike/riding-public-transit" target="blank">Bicycles are permitted</ExternalLink> on these trains at all times.</p>
            <ImgTrain src={imgTrain} alt="The author of this page securing his bike by the seats of a train" />
            <p>Shall your bike still be in a box, you can jump on <ExternalLink href="http://stm.info/en/info/networks/bus/shuttle/747-yul-montreal-trudeau-airport-downtown-shuttle" target="blank">STM's 747 shuttle</ExternalLink> which gets you into the city with frequent departures.</p>
            <p>Other options for flying into Quebec include the international airports in Ottawa (close to Gatineau) and Quebec City, both around 10 miles from their respective city centres. There are various regional airports located throughout the province but they are only served by several flights a day.</p>
            <p>Bicycle tourists may equally arrive by train from Ottawa, Toronto, or the Canadian Maritimes, or by bus. See the information below for more details about how to properly pack your ride for the trip.</p>
        </section>
    )
}

const ImgTrain = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`

export default GettingIn;