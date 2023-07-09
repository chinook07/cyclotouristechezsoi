import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faCampground } from "@fortawesome/free-solid-svg-icons";
import imgCamping from "../../../images/bienvenue-cyclistes.jpg"

const SpendingTheNight = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faCampground} />
                <span>Übernachten</span>
            </h2>
            <p>Hervorzuheben ist das <ExternalLink href="https://www.routeverte.com/en/lodging/" target="blank">Bienvenue cyclistes</ExternalLink> Unterkunftsnetz für Tourenradler. Das bedeutet grundlegende Werkzeuge, falls Sie Ihr eigenes vergessen haben, sowie Informationen über lokale Fahrradrouten. Besser noch, wenn Sie zelten, haben Sie immer Platz, auch wenn Sie unangekündigt auftauchen. Wenn Sie sich für eine überdachte Unterbringung entscheiden, z.B. in einer Pension oder einem Hotel, wird auch Ihr Fahrrad in einem überdachten und abgeschlossenen Bereich untergebracht sein.</p>
            <p>Viele der lokalen Tourenradfahrer werden sich dafür entscheiden, mit Zelt und Campingausrüstung zu reisen. Zeltplätze gibt es an vielen Orten, und ein Platz für Ihr Zelt kostet zwischen $25 und $45, zu oft am oberen Ende der Skala. Einige campieren heimlich auf öffentlichem Gelände, was legal ist, oder an einem Rastplatz entlang von Radwegen, was manchmal verboten ist. In der Praxis ist es einfach, wenn man spät ankommt, früh geht, kein Feuer macht und keine Spuren hinterlässt, ohne in irgendeine Form von Ärger zu geraten. Man kann auch etwas exorbitante Campinggebühren sparen und sich eine gute Nachtruhe gönnen, ohne von hundert Wohnmobilen umgeben zu sein.</p>
            <p>Ein Zimmer in einem Bed & Breakfast könnte im Hochsommer schwer zu bekommen sein, daher sollten leichte Touren sorgfältig im Voraus geplant werden, um böse Überraschungen zu vermeiden. Viele Quebecer benutzen auch <ExternalLink href="https://www.warmshowers.org/" target="blank">Warmshowers</ExternalLink>, ein Netzwerk von Gastgebern, die eine Couch, ein Bett oder einen Platz für ein Zelt für Radreisende anbieten.</p>
            <ImgCamping src={imgCamping} alt="Ein Campingplatz mit dem Bienvenue-Cyclistes-Schild"/>
        </section>
    )
}

const ImgCamping = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    width: 60%;
`

export default SpendingTheNight;