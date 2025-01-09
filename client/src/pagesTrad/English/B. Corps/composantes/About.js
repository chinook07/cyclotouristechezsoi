import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

const About = () => {
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span>About</span>
            </h2>
            <p>Tour guide and high school teacher living in Montréal, I decided to wanted to share my knowledge of bicycle touring online. After completing my initial project, I went on to make a one-page site in English, so people outside Quebec could discover this excellent cycling destination. To contact me, you may use <ExternalLink href="https://cyclotouristechezsoi.ca/contact">the form</ExternalLink> found on the French-language section.</p>
        </section>
    )
}

export default About;