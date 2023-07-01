import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

const About = () => {
    return (
        <Wrapper>
            <h2>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span>About</span>
            </h2>
            <p>High school teacher living in Montréal, and soon-to-be programmer, I decided to learn some coding while sharing my knowledge of bicycle touring online. After completing my project, I went on to make a one-page site in English, so people outside Quebec could discover this excellent cycling destination. To contact me, you may use <ExternalLink href="https://cyclotouristechezsoi.ca/contact">the form</ExternalLink> found on the French-language section.</p>
        </Wrapper>
    )
}

const Wrapper = styled.section``

export default About;