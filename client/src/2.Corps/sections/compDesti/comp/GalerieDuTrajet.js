import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import Chargement from "../../../../CompReutilisables/Chargement";
import imagesTout from "../donnees/imagesTout";
import titrePhotos from "../donnees/titrePhotos";
import texteAltPhotos from "../donnees/texteAltPhotos";

const GalerieDuTrajet = ({ details }) => {

    const [imgAMontrer, setImgAMontrer] = useState(undefined);

    useEffect(() => setImgAMontrer(0), [])

    const idTrajet = details.id;
    
    let tableauPhotos = Object.keys(imagesTout[idTrajet]);
    let tableauSources = Object.values(imagesTout[idTrajet]);
    const nDePhotos = tableauSources.length;

    const changerPhoto = (choisi) => {
        setImgAMontrer(choisi);
    }

    let photosParRangee, photosParRangeeMobi;

    if (nDePhotos <= 8) {
        photosParRangee = nDePhotos;
    } else if (nDePhotos <= 16) {
        photosParRangee = nDePhotos / 2
    } else {
        photosParRangee = nDePhotos / 3
    }

    if (nDePhotos % 3 === 0) {
        photosParRangeeMobi = 3
    } else {
        photosParRangeeMobi = 4
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
                    <FontAwesomeIcon
                        aria-label="image suivante"
                        icon={faForwardStep}
                        onClick={photoSuiv}
                        role="navigation"
                    />
                    <img src={imagesTout[idTrajet][tableauPhotos[0 + imgAMontrer]]} alt={ texteAltPhotos.trajet[idTrajet][imgAMontrer] } />
                    <figcaption>{titrePhotos.trajet[idTrajet][imgAMontrer]}</figcaption>
                </figure>
                <Selecteur photosParRangee={photosParRangee} photosParRangeeMobi={photosParRangeeMobi}>
                    {
                        tableauPhotos.map((item, index) => {
                            return (
                                <img
                                    alt="à venir"
                                    key={index}
                                    onClick={() => changerPhoto(index)}
                                    src={imagesTout[idTrajet][item]}
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
    display: flex;
    flex-direction: column;
    margin: 0;
    max-width: 800px;
    width: 100%;
    > figure {
        height: initial;
        margin: 0;
        max-height: initial;
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
    display: flex;
    flex-wrap: wrap;
    img {
        cursor: pointer;
        width: ${props => `calc(100% / ${props.photosParRangee})`};
        @media screen and (max-width: 600px) {
            width: ${props => `calc(100% / ${props.photosParRangeeMobi})`};
        }
    }
`

export default GalerieDuTrajet;