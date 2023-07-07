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
                <span>Spending the night</span>
            </h2>
            <p>The one thing to note is the <ExternalLink href="https://www.routeverte.com/en/lodging/" target="blank">Bienvenue cyclistes</ExternalLink> lodging network for touring cyclists. This means basic tools if you forgot yours, as well as information about local cycling routes. Better yet, if camping, you will always have space even when showing up without notice. If you choose to be lodged under a roof such as at a B&B or a hotel, your bike will be too, in a covered and locked area.</p>
            <p>Many of the local touring cyclists will choose to travel with a tent and camping gear. Campgrounds can be found in many places, and a spot for your tent will cost anywhere from $25 to $45, too often on the upper end of the scale. Some will stealth camp on public domain which is legal, or at a rest stop along rail trails which is sometimes forbidden. In practice, when one arrives late, leaves early, starts no fire, and leaves no trace, it is easy to do it without getting in any form of trouble. One can also save somewhat exorbitant camping fees and get a good night's rest not surrounded by a hundred RVs.</p>
            <p>A room at a bed and breakfast could be hard to come by during the height of the summer, so light touring should be carefully planned in advance to avoid bad surprises. Many Quebecers also use <ExternalLink href="https://www.warmshowers.org/" target="blank">Warmshowers</ExternalLink>, a network of hosts offering a couch, a bed, or a place to pitch a tent for touring cyclists.</p>
            <ImgCamping src={imgCamping} alt="A campsite with the Bienvenue cyclistes sign"/>
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