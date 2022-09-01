import styled from "styled-components";
import { useState } from "react";

import * as imagesToutPa from "../../../images/galerie-paysage/index";
import * as imagesToutPo from "../../../images/galerie-portrait/index";
import galerieSousTitrePaysage from "./galerieSousTitrePaysage.json";
import galerieSousTitrePortrait from "./galerieSousTitrePortrait.json";

const GalerieEtendue = ({ montrerGal, setMontrerGal }) => {

    const [diapo, setDiapo] = useState();

    const tableauPaysage = [];
    Object.keys(imagesToutPa).forEach(item => {
        tableauPaysage.push({ "titre": item })
    })
    tableauPaysage.forEach((item, index) => {
        item.lien = (Object.values(imagesToutPa)[index])
        item.description = galerieSousTitrePaysage[index]
    })

    const tableauPortrait = [];
    Object.keys(imagesToutPo).forEach(item => {
        tableauPortrait.push({ "titre": item })
    })
    tableauPortrait.forEach((item, index) => {
        item.lien = (Object.values(imagesToutPo)[index])
        item.description = galerieSousTitrePortrait[index]
    })

    const ordreDesPhoto = [];
    while (ordreDesPhoto.length < 3) {
        let resultat = Math.ceil(Math.random() * 99);
        if (!ordreDesPhoto.includes(resultat)) {
            ordreDesPhoto.push(tableauPaysage[resultat])
        } else {
            console.log("duplicat");
        }
    }

    // automatiser avec une boucle
    while (ordreDesPhoto.length < 133) {
        for (let i = 0; i < 2; i++) {
            let resultat = Math.ceil(Math.random() * 33);
            // if (!ordreDesPhoto.includes(tableauPortrait[resultat]))
                ordreDesPhoto.push(tableauPortrait[resultat]);
        }
        for (let i = 0; i < 6; i++) {
            let resultat = Math.ceil(Math.random() * 99);
            // if (!ordreDesPhoto.includes(tableauPaysage[resultat]))
                ordreDesPhoto.push(tableauPaysage[resultat]);
        }
    }
    // boucle infinie?

    console.log(ordreDesPhoto);

    const handleMontrerImage = (image) => setDiapo(image);
    
    const photoPrec = () => {
        if (diapo > 1) setDiapo(diapo - 1)
    }

    const photoSuiv = () => {
        if (diapo < 98) setDiapo(diapo + 1)
    }

    const fermerGalEtendue = () => setMontrerGal(false);

    return (
        <Wrapper>
            <Fermer>
                <button onClick={fermerGalEtendue}>Fermer</button>
            </Fermer>
            {/* <GalerieComplete>
                {
                    ordreDesPhoto.map((item, index) => {
                        return <img onClick={() => handleMontrerImage(index)} key={index} src={ordreDesPhoto[index].lien} />
                    })
                }
            </GalerieComplete> */}
            
            {
                diapo !== undefined
                && <Zoom>
                        <div onClick={photoPrec}>←</div>
                        <figure>
                            <img src={tableauPaysage[diapo].lien} />
                            <figcaption>{tableauPaysage[diapo].description}</figcaption>
                        </figure>
                        <div onClick={photoSuiv}>→</div>
                </Zoom>
            }
        </Wrapper>
    )
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