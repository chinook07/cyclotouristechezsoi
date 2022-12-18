import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import Chargement from "../../../../CompReutilisables/Chargement";
import * as imagesTout1 from "../images/bas-saint-laurent/index";
import * as imagesTout2 from "../images/becancour-sutton/index";

const GalerieDuTrajet = ({ details }) => {

    const [imgAMontrer, setImgAMontrer] = useState(undefined);

    useEffect(() => {
        setImgAMontrer(0);
    }, [])

    const tableauPhotos = Object.keys(imagesTout1);
    const nDePhotos = Object.keys(imagesTout1).length;

    const changerPhoto = (choisi) => {
        setImgAMontrer(choisi);
    }

    let photosParRangee;

    if (nDePhotos < 7) {
        photosParRangee = nDePhotos
    } else if (nDePhotos < 14) {
        photosParRangee = nDePhotos / 2
    } else {
        photosParRangee = nDePhotos / 3
    }

    const photoPrec = () => {
        imgAMontrer === 0 ? setImgAMontrer(nDePhotos - 1) : setImgAMontrer(imgAMontrer - 1)
    }

    const photoSuiv = () => {
        imgAMontrer === nDePhotos - 1 ? setImgAMontrer(0) : setImgAMontrer(imgAMontrer + 1)
    }

    if (imgAMontrer === undefined) {
        return (
            <Chargement />
        )
    } else {
        return (
            <Wrapper>
                <figure>
                    <Indicateur>
                        {imgAMontrer + 1}/{nDePhotos}
                    </Indicateur>
                    <FontAwesomeIcon
                        aria-label="image précédente"
                        icon={faBackwardStep}
                        onClick={photoPrec}
                        role="navigation"
                    />
                    <img src={imagesTout1[tableauPhotos[0 + imgAMontrer]]} alt="à venir" />
                    <FontAwesomeIcon
                        aria-label="image suivante"
                        icon={faForwardStep}
                        onClick={photoSuiv}
                        role="navigation"
                    />
                    <figcaption>À venir...</figcaption>
                    {/* <figcaption>{carrousel[imgAMontrer].desc}</figcaption> */}
                </figure>
                <Selecteur photosParRangee={photosParRangee}>
                    {
                        tableauPhotos.map((item, index) => {
                            return (
                                <img
                                    alt="à venir"
                                    key={index}
                                    onClick={() => changerPhoto(index)}
                                    src={imagesTout1[item]}
                                />
                            ) 
                        })
                    }
                </Selecteur>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    background-color: var(--c6);
    margin: 0;
    max-width: 800px;
    width: 100%;
    figure {
        height: unset;
        margin: 0;
        max-height: unset;
        position: relative;
        > svg {
            background-color: #ffffff88;
            border-radius: 50%;
            cursor: pointer;
            height: 30px;
            padding: 5px;
            position: absolute;
            top: 50%;
            width: 30px;
            &:first-of-type {
                left: 5%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
            &:last-of-type {
                left: 95%;
                transform: translate(-50%, -50%);
            }
        }
        img {
            width: 100%;
        }
        figcaption {
            color: var(--c11);
            font-size: 18px;
            margin: 0;
            padding: 10px;
        }
    }
    
`

const Indicateur = styled.p`
    background-color: var(--c2);
    margin: 0;
    opacity: 0.8;
    padding: 10px;
    position: absolute;
    text-shadow: 1px 1px var(--c2);
`

const Selecteur = styled.div`
    img {
        cursor: pointer;
        width: ${props => `calc(100% / ${props.photosParRangee})`};
    }
`

export default GalerieDuTrajet;