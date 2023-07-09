import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "react-external-link";

import { faRoute } from "@fortawesome/free-solid-svg-icons";
import Veloroutes from "./sousComposantes/Veloroutes";

const PlacesToRide = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faRoute} />
                <span>Radrouten</span>
            </h2>
            <p>Oh die Orte, wo man hinfahren kann! Québec ist bekannt für die großartigen Möglichkeiten, die es für Radfahrer bietet, und <ExternalLink href="https://www.routeverte.com/en/" target="blank">die Route verte</ExternalLink>, die in Wirklichkeit ein Netz von sieben Radrouten ist, die die Provinz kreuz und quer durchziehen. Etwas mehr als die Hälfte der Route verte nutzt Abschnitte auf der Straße, entweder ruhige Landstraßen oder Schultern verkehrsreicherer Routen. Der Rest ist außerhalb des Straßennetzes, normalerweise auf ehemaligen Eisenbahnstrecken.</p>
            <Veloroutes />
            <hr />
            <p>Neben der Route verte gibt es in allen Regionen viele andere Wege und Möglichkeiten zum Radfahren auf den Straßen. Auf Autorouten (Autobahnen), die zwischen 1 und 99 oder 401 bis 999 nummeriert sind, ist Radfahren nicht erlaubt. Die primären Landstraßen sind von 101 bis 199 nummeriert, und die sekundären Landstraßen sind zwischen 201 und 399 nummeriert. Radfahren ist auf allen erlaubt, außer auf kurzen Strecken mit Autoroute-ähnlichen Merkmalen. Wenn Sie die Fahrradfreundlichkeitsebene auf der Legende der interaktiven Karte <ExternalLink href="https://www.quebec511.info/en/Carte/Default.aspx" target="blank">Québec 511</ExternalLink> oder der <ExternalLink href="https://www.routeverte.com/en/" target="blank">Route verte</ExternalLink> auswählen, können Sie auf ein Segment klicken und sich neben anderen relevanten Informationen das Verkehrsvolumen und die Schulterbreite anzeigen lassen.</p>
            <p>Wenn Sie sich für Details interessieren, ist es hilfreich zu wissen, dass die geradzahligen Routen normalerweise dem Strom St-Laurent folgen, während die ungeradzahligen senkrecht verlaufen. Vorsicht: <Italique>fleuve</Italique> bedeudet <Italique>Strom</Italique> und <Italique>rivière</Italique> bedeudet <Italique>Fluss</Italique>. Es gibt nur einen Strom in Québec, der Saint-Laurent.</p>
        </section>
    )
}

const Italique = styled.span`
    font-style: italic;
`

export default PlacesToRide;