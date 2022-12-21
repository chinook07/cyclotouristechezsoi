import styled from "styled-components";
import { useState, useEffect } from "react";

import * as imagesToutPa from "../images/galerie-paysage/index";
import * as imagesToutPo from "../images/galerie-portrait/index";
import galerieSousTitrePaysage from "../donnees/galerieSousTitrePaysage.json";
import galerieSousTitrePortrait from "../donnees/galerieSousTitrePortrait.json";
import texteAltPaysage from "../donnees/texteAltPaysage.json";
import texteAltPortrait from "../donnees/texteAltPortrait.json";
import Chargement from "../../../CompReutilisables/Chargement";
import Zoom from "./Zoom";

const GalerieEtendue = ({ montrerGal, setMontrerGal }) => {

    const [diapo, setDiapo] = useState();
    const [tousPhotos, setTousPhoto] = useState();
    const [ordreDesPhotos, setOrdreDesPhotos] = useState([]);

    const mettrePhotosEnAleatoire = () => {
        const tableauPaysage = [];
        const tableauPortrait = [];
        const tableauTous = [];

        Object.keys(imagesToutPa).forEach(item => {
            tableauPaysage.push({ "titre": item })
        })
        tableauPaysage.forEach((item, index) => {
            item.lien = (Object.values(imagesToutPa)[index])
            item.description = galerieSousTitrePaysage[index];
            item.texteAlt = texteAltPaysage[index];
            tableauTous.push(item);
        })

        Object.keys(imagesToutPo).forEach(item => {
            tableauPortrait.push({ "titre": item })
        })
        tableauPortrait.forEach((item, index) => {
            item.lien = (Object.values(imagesToutPo)[index])
            item.description = galerieSousTitrePortrait[index]
            item.texteAlt = texteAltPortrait[index];
            tableauTous.push(item)
        })

        const ordrePhotos = [];
        while (ordrePhotos.length < 133) {
            let resultat = Math.ceil(Math.random() * 133);
            if (!ordrePhotos.includes(resultat)) {
                ordrePhotos.push(resultat)
            }
        }
        setOrdreDesPhotos(ordrePhotos);
        setTousPhoto(tableauTous);
    }

    useEffect(() => {
        mettrePhotosEnAleatoire();
    }, []);

    const handleMontrerImage = (image) => setDiapo(image);
    
    const photoPrec = () => {
        let indexPhotoPresente = ordreDesPhotos.indexOf(diapo);
        if (indexPhotoPresente > 0) {
            setDiapo(ordreDesPhotos[indexPhotoPresente - 1])
        } else {
            setDiapo(ordreDesPhotos[ordreDesPhotos.length - 1])
        }
    }

    const photoSuiv = () => {
        let indexPhotoPresente = ordreDesPhotos.indexOf(diapo);
        if (indexPhotoPresente < ordreDesPhotos.length - 1) {
            setDiapo(ordreDesPhotos[indexPhotoPresente + 1])
        } else {
            setDiapo(ordreDesPhotos[0])
        }
    }

    const fermerZoom = () => setDiapo(undefined);

    const fermerGalEtendue = () => setMontrerGal(false);

    if (ordreDesPhotos.length) {

        return (
            <Wrapper>
                <Fermer onClick={fermerGalEtendue}>Fermer</Fermer>
                <GalerieComplete opaque={diapo === undefined ? 1 : 0.4}>
                    {
                        ordreDesPhotos.map((item, index) => {
                            return <img
                                onClick={() => handleMontrerImage(item)}
                                key={index}
                                src={tousPhotos[item - 1].lien}
                                alt={tousPhotos[item - 1].texteAlt}
                            />
                        })
                    }
                </GalerieComplete>
                <Fermer onClick={fermerGalEtendue}>Fermer</Fermer>
                {
                    diapo !== undefined
                    && <Zoom
                        fermerZoom={fermerZoom}
                        photoPrec={photoPrec}
                        photoSuiv={photoSuiv}
                        tousPhotos={tousPhotos}
                        diapo={diapo}
                    />
                }
            </Wrapper>
        )
    } else {
        return <Chargement />
    }
    
}

const Wrapper = styled.div`
    background-color: var(--c10);
    border-radius: 5px;
    padding: 12px;
`

const Fermer = styled.button`
    background-color: var(--c6);
    border-radius: 5px;
    color: var(--c1);
    cursor: pointer;
    display: block;
    margin: 15px auto;
    padding: 15px;
`

const GalerieComplete = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    opacity: ${props => props.opaque};
    img {
        border-radius: 50%;
        cursor: pointer;
        height: 120px;
        margin: 5px;
        object-fit: cover;
        transition: transform 0.2s;
        width: 120px;
        @media (prefers-reduced-motion) {
            transition: none;
        }
        &:hover {
            transform: scale(1.6);
            transition: transform 0.2s;
            @media (prefers-reduced-motion) {
                transition: none;
            }
        }
    }
    @media screen and (max-width: 500px) {
        img {
            height: 80px;
            width: 80px;
        }
    }
`

export default GalerieEtendue;