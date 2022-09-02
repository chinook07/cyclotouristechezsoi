import styled from "styled-components";
import { useState, useEffect } from "react";

import * as imagesToutPa from "../../../images/galerie-paysage/index";
import * as imagesToutPo from "../../../images/galerie-portrait/index";
import galerieSousTitrePaysage from "./galerieSousTitrePaysage.json";
import galerieSousTitrePortrait from "./galerieSousTitrePortrait.json";

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
        console.log("image :", image);
    };
    
    const photoPrec = () => {
        let indexPhotoPresente = ordreDesPhotos.indexOf(diapo);
        if (indexPhotoPresente > 0) {
            setDiapo(ordreDesPhotos[indexPhotoPresente - 1])
        } else {
            console.log(ordreDesPhotos[ordreDesPhotos.length - 1]);
            setDiapo(ordreDesPhotos[ordreDesPhotos.length - 1])
        }
    }

    const photoSuiv = () => {
        let indexPhotoPresente = ordreDesPhotos.indexOf(diapo);
        if (indexPhotoPresente < ordreDesPhotos.length - 1) {
            setDiapo(ordreDesPhotos[indexPhotoPresente + 1])
        } else {
            console.log(ordreDesPhotos[0]);
            setDiapo(ordreDesPhotos[0])
        }
    }

    const fermerGalEtendue = () => setMontrerGal(false);

    if (ordreDesPhotos.length) {

        return (
            <Wrapper>
                <Fermer>
                    <button onClick={fermerGalEtendue}>Fermer</button>
                </Fermer>
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
                            <div onClick={photoPrec}>←</div>
                            <figure>
                                <img src={tousPhotos[diapo - 1].lien} />
                                <figcaption>{tousPhotos[diapo - 1].description}</figcaption>
                            </figure>
                            <div onClick={photoSuiv}>→</div>
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
    position: relative;
    
`

const Fermer = styled.div`
    color: var(--c1);
    cursor: pointer;
`

const GalerieComplete = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
        cursor: pointer;
        height: 50px;
        object-fit: contain;
        width: 80px;
    }
`

const Zoom = styled.div`
    align-items: center;
    background-color: var(--c5);
    border-radius: 10px;
    display: flex;
    left: 50%;
    padding: 20px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    > div {
        cursor: pointer;
    }
    figure {
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
            width: 100%;
        }
    }
`

export default GalerieEtendue;