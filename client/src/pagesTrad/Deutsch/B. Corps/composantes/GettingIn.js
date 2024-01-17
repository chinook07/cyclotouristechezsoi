import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import imgTrain from "../../../images/bike-on-train.webp";

const GettingIn = () => {

    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faPlaneArrival} />
                <span>Einreisen</span>
            </h2>
            <p>Wenn Sie nach Quebec fliegen, landen Sie höchstwahrscheinlich auf dem internationalen Flughafen von Montreal. Wenn dies der Fall ist, können Sie ganz einfach mit dem Fahrrad in die Stadt fahren, indem Sie den Radwegen und Fahrradspuren in Richtung Seeufer folgen, wo die Route verte 5 und die Fahrradroute des Lachine-Kanals Sie durch die Innenstadt führen. Pendlerzüge (selten außerhalb der Hauptverkehrszeiten) <ExternalLink href="https://exo.quebec/en/trip-planner/train/vaudreuil%E2%80%93hudson" target="blank">fahren von Dorval Station aus</ExternalLink>, etwa 1 km vom Flughafen entfernt, bis zum Bahnhof Lucien-l'Allier im Stadtzentrum. <ExternalLink href="https://exo.quebec/en/trip-planner/bike/riding-public-transit" target="blank">Das Mitnehmen von Fahrrädern sind in diesen Zügen</ExternalLink> jederzeit erlaubt.</p>
            <ImgTrain src={imgTrain} alt="Der Autor dieser Seite sichert sein Fahrrad an den Sitzen eines Zuges" />
            <p>Sollte Ihr Fahrrad noch in einer Kiste liegen, können Sie <ExternalLink href="http://stm.info/en/info/networks/bus/shuttle/747-yul-montreal-trudeau-airport-downtown-shuttle" target="blank">auf den 747-Shuttle von STM</ExternalLink> aufspringen, der Sie mit häufigen Abfahrten in die Stadt bringt.</p>
            <p>Weitere Möglichkeiten, nach Quebec zu fliegen, bieten die internationalen Flughäfen in Ottawa (in der Nähe von Gatineau) und Quebec City, die beide etwa 15 km von ihren jeweiligen Stadtzentren entfernt sind. Es gibt verschiedene regionale Flughäfen, die über die ganze Provinz verteilt sind, die jedoch nur von wenigen Flügen pro Tag angeflogen werden.</p>
            <p>Fahrradurlauber können auch mit dem Zug aus Ottawa, Toronto oder den kanadischen Seeprovinzen, oder mit dem Bus anreisen. In den nachstehenden Informationen, finden Sie weitere Einzelheiten darüber, wie Sie Ihre Fahrräder für die Reise richtig packen.</p>
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