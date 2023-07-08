import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

const About = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span>Über mich</span>
            </h2>
            <p>Da ich als Gymnasiallehrer und angehender Programmierer in Montreal lebe, beschloss ich, etwas Codierung zu lernen und gleichzeitig mein Wissen über Fahrradtouren online weiterzugeben. Nach Fertigstellung des Projekts habe ich eine einseitige Website auf Deutsch erstellt, damit die Menschen in den deutschsprachigen Ländern dieses ausgezeichnete Radreiseziel entdecken können. Dies würde mir auch die Möglichkeit geben, weiter an meinem Deutsch zu arbeiten. Um mit mir Kontakt aufzunehmen, können Sie <ExternalLink href="https://cyclotouristechezsoi.ca/contact">das Formular</ExternalLink> auf der französischsprachigen Seite verwenden.</p>
        </section>
    )
}

export default About;