import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faAngleRight, faBed, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faCampground, faCaravan, faBug, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import moments from "../donnees/moments.json";
import mois1 from "../images/varennes-inondation.jpg";
import mois2 from "../images/monteregiade.jpg";
import mois3 from "../images/sentier-waterfront.jpg";
import mois4 from "../images/traversier_tadoussac.jpg";
import mois5 from "../images/riviere-rouge.jpg";
import mois6 from "../images/mauricie.jpg";
import mois7 from "../images/riviere_rideau.jpg";


const Moment = () => {

    const [mois, setMois] = useState(0);

    const icones = [
        [faTemperatureEmpty, faBed],
        [faTemperatureHalf, faBug, faBed],
        [faTemperatureFull, faBug],
        [faTemperatureFull, faCaravan],
        [faTemperatureFull, faCampground, faGrinStars],
        [faTemperatureHalf, faBed, faCampground],
        [faTemperatureEmpty, faBed]
    ];

    const imagesAMontrer = [mois1, mois2, mois3, mois4, mois5, mois6, mois7]

    const avancer = () => {
        mois === 6 ? setMois(0) : setMois(mois + 1)
    }

    const reculer = () => {
        mois === 0 ? setMois(6) : setMois(mois - 1)
    }

    return (
        <Wrapper>
            <div>
                <Titre>
                    <span>{moments[mois].titre} : </span>
                    {
                        icones[mois].map((item, index) => {
                            return <FontAwesomeIcon key={index} icon={item} />
                        })
                    }
                </Titre>
                <div>{moments[mois].description}</div>
                <Fleches>
                    <FontAwesomeIcon icon={faAngleLeft} onClick={reculer} />
                    <FontAwesomeIcon icon={faAngleRight} onClick={avancer} />
                </Fleches>
            </div>
            <figure>
                <img alt={moments[mois].imgAlt} src={imagesAMontrer[mois]} />
                <figcaption>{moments[mois].caption}</figcaption>
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    figure {
        img {
            width: 100%;
        }
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
    @media screen and (min-width: 700px) {
        > * {
            width: 50%;
        }
    }
`

const Titre = styled.div`
    text-align: center;
    font-weight: bold;
`

const Fleches = styled.div`
    display: flex;
    justify-content: space-evenly;
    > svg {
        background-color: var(--c5);
        border-radius: 10px;
        cursor: pointer;
        padding: 15px 20px;
    }
`

export default Moment;