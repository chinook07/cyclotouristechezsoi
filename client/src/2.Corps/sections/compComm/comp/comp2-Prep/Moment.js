import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleLeft, faAngleRight, faBed, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faCampground, faCaravan, faBug, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import moments from "../../donnees/moments.json";
import mois1 from "../../images/varennes-inondation.jpg";
import mois2 from "../../images/monteregiade.webp";
import mois3 from "../../images/sentier-waterfront.jpg";
import mois4 from "../../images/traversier_tadoussac.webp";
import mois5 from "../../images/riviere-rouge.webp";
import mois6 from "../../images/mauricie.jpg";
import mois7 from "../../images/riviere_rideau.jpg";


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
                    <button type="button" title="précédent" aria-label="moment précédent de l'année" onClick={reculer}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button type="button" title="suivant" aria-label="moment suivant de l'année" onClick={avancer}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    
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
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
`

const Fleches = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    button {
        background-color: var(--c6);
        border: none;
        border-radius: 10px;
        svg {
            color: var(--c1);
            cursor: pointer;
            padding: 15px 20px;
        }
    }
    
`

export default Moment;