import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Climat from "./sousComposantes/Climat";
import Animaux from "./sousComposantes/Animaux";
import { faSuitcase, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import imgDrapeau from "../../../images/quebec-flag.webp"
import { CycloContext } from "../../../../CycloContext";

const Visiting = () => {
    const { mesuresMetriques } = useContext(CycloContext);
    return (
        <section>
            <h2>
                <FontAwesomeIcon icon={faSuitcase} />
                <span>Visiting Quebec</span>
            </h2>
            <h3>Language and Culture</h3>
            <p>Our lingua franca is French. That said, it differs greatly in its spoken form from the variety spoken in Europe. In the western half of Montréal, as well as many areas bordering Ontario, New York, and Vermont, English is used as a common language by a significant proportion of the population. Road signs are normally only in French, but locals in many towns along major cycling routes are used to seeing lost tourists on their bikes, and will often be happy to help them find their way whether they are fluent, or can only say <Italique>yes, no, toaster</Italique>.</p>
            <ImgDrapeau src={imgDrapeau} alt="" />
            <p>The people of Quebec are called Quebecers, or Québécois, in their native language. People either identify as such, as French Canadian, as Canadian, or a combination thereof. Many Montrealers are of various origins, and therefore speak three or more languages. The important thing is to come with an open mind, and be willing to try even a few words in French. People will appreciate, but do not get offended if they switch to English. It's (probably) not because your French is horrible! They are simply trying to be helpful!</p>
            <h3>Climate</h3>
            <p>The summer climate in southern Quebec is warm and humid. The hottest time of the year is late July and heat waves over { mesuresMetriques ? <span>30°C</span>: <span>86°F</span> } are getting more common. Thunderstorms are common in the afternoon but in no way match the intensity often witnessed in the USA. North and east of the City of Québec, summer days are often cooler and the sea breeze usually prevents it from getting uncomfortably hot.</p>
            <Climat />
            <p>Summer winds in Quebec tend to blow from the west or south-west, favouring journeys made in this direction. When doing a loop, keep in mind the wind is generally calmer in covered areas, i.e. within rail trails sheltered by trees.</p>
            <h4>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <span> Severe weather</span>
            </h4>
            <p>Tornadoes are extremely rare, with around five occurring per year, generally minor ones. Smoke from distant forest fires is uncommon, but can seriously affect the quality and safety of your ride. In 2023, fires of historic proportions burnt nearly {mesuresMetriques ? <span>50 000 km² (around the size of Nova Scotia, or 65% the landmass of Scotland)</span> : <span>20 000 square miles (19 times the size of Rhode Island)</span>} of land within Quebec, smoking out many North American cities for multiple days.</p>
            <h3>Animals</h3>
            <p>Quebec is not Australia! The fauna is a lot more benign than in many other parts of the world, and we have our cold winters to thank for that. For a start, poisonous snakes and spiders are extremely uncommon. However, there are certain dangers to watch out for.</p>
            <Animaux />
            <p>Though more annoying than dangerous, mosquitoes, deer flies, horse flies, and no-see-ums will make your trip miserable if you don't arm yourself with bug spray, especially at the beginning of the summer. Once mid-August comes around, it is generally more pleasant to be in the forest, even at dusk. Peak season for mosquitoes is late May and June, and should be avoided when planning on doing a lot of stealth camping in the woods.</p>
        </section>
    )
}

const ImgDrapeau = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
`

const Italique = styled.span`
    font-style: italic;
`

export default Visiting;