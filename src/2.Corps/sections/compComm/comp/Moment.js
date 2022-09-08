import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faAngleRight, faBed, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faCampground, faCaravan, faBug, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import moments from "../donnees/moments.json"

const Moment = () => {

    const [mois, setMois] = useState(0);

    const avancer = () => {
        mois === 6 ? setMois(0) : setMois(mois + 1)
    }

    const reculer = () => {
        mois === 0 ? setMois(6) : setMois(mois - 1)
    }

    return (
        <Wrapper>
            <div>
                <div>{moments[mois].titre} : <FontAwesomeIcon icon={faTemperatureEmpty} /></div>
                <div>{moments[mois].description}</div>
                <Fleches>
                    <FontAwesomeIcon icon={faAngleLeft} onClick={reculer} />
                    <FontAwesomeIcon icon={faAngleRight} onClick={avancer} />
                </Fleches>
            </div>
            <figure>
                <img alt={moments[mois].imgAlt} />
                <figcaption>{moments[mois].caption}</figcaption>
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    figure {
        img {
            width: 100%;
        }
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const Fleches = styled.div`
    display: flex;
    justify-content: space-evenly;
    > svg {
        background-color: var(--c5);
        border-radius: 10px;
        cursor: pointer;
        padding: 20px;
    }
`

export default Moment;