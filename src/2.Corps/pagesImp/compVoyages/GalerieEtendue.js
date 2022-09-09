import styled from "styled-components";
import { useState, useEffect } from "react";

import * as imagesToutPa from "../../../images/galerie-paysage/index";
import * as imagesToutPo from "../../../images/galerie-portrait/index";
import galerieSousTitrePaysage from "../donnees/galerieSousTitrePaysage.json";
import galerieSousTitrePortrait from "../donnees/galerieSousTitrePortrait.json";

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
            tableauTous.push(item);
        })

        Object.keys(imagesToutPo).forEach(item => {
            tableauPortrait.push({ "titre": item })
        })
        tableauPortrait.forEach((item, index) => {
            item.lien = (Object.values(imagesToutPo)[index])
            item.description = galerieSousTitrePortrait[index]
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

    const handleMontrerImage = (image) => {
        setDiapo(image);
    };
    
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

    const fermerZoom = () => {
        setDiapo(undefined)
    }

    const fermerGalEtendue = () => setMontrerGal(false);

    if (ordreDesPhotos.length) {

        return (
            <Wrapper>
                <Fermer onClick={fermerGalEtendue}>Fermer</Fermer>
                <GalerieComplete>
                    {
                        ordreDesPhotos.map((item, index) => {
                            return <img
                                onClick={() => handleMontrerImage(item)}
                                key={index}
                                src={tousPhotos[item - 1]["lien"]}
                            />
                        })
                    }
                </GalerieComplete>
                
                {
                    diapo !== undefined
                    && <Zoom>
                            <button onClick={fermerZoom}>Fermer</button>
                            <Caroussel>
                                <div onClick={photoPrec}>←</div>
                                <figure>
                                    <img src={tousPhotos[diapo - 1].lien} />
                                    <figcaption>{tousPhotos[diapo - 1].description}</figcaption>
                                </figure>
                                <div onClick={photoSuiv}>→</div>
                            </Caroussel>
                            
                    </Zoom>
                }
            </Wrapper>
        )
    } else {
        return <div>Loading...</div>
    }
    
}

const Wrapper = styled.div`
    background-color: black;
    padding: 10px;
    /* position: relative; */
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
    img {
        cursor: pointer;
        height: 100px;
        object-fit: contain;
    }
`

const Zoom = styled.div`
    background-color: var(--c5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    left: 50%;
    max-height: 90vh;
    padding: 10px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    button {
        margin: 0 auto;
        padding: 10px;
        width: 80px;
    }
    @media screen and (max-width : 600px) {
        width: 88%;
    }
`

const Caroussel = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    > div {
        cursor: pointer;
    }
    figure {
        display: flex;
        flex-direction: column;
        margin: 10px;
        img {
            max-height: 80vh;
            width: 100%;
        }
    }
    @media screen and (max-width : 600px) {
        flex-direction: column;
        figure {
            margin: 10px 0;
        }
    }
`

export default GalerieEtendue;