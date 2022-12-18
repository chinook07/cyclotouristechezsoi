import styled from "styled-components";
import { useState, useEffect } from "react";

import Chargement from "../../../../CompReutilisables/Chargement";
import * as imagesTout1 from "../images/bas-saint-laurent/index";
import * as imagesTout2 from "../images/becancour-sutton/index";

const GalerieDuTrajet = ({ details }) => {

    const [imgAMontrer, setImgAMontrer] = useState(undefined);

    useEffect(() => {
        setImgAMontrer(0);
    }, [])

    const tableauPhotos = Object.keys(imagesTout1);
    console.log(tableauPhotos);
    const nDePhotos = Object.keys(imagesTout1).length;

    const changerPhoto = (choisi) => {
        setImgAMontrer(choisi);
    }

    console.log(details.id);
    console.log(`imagesTout${details.id}`);
    console.log(imagesTout1)

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
                    <img src={imagesTout1[`Gal0${1 + imgAMontrer}`]} alt="à venir" />
                    <figcaption>À venir...</figcaption>
                    {/* <figcaption>{carrousel[imgAMontrer].desc}</figcaption> */}
                </figure>
                <Selecteur>
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
    background-image: linear-gradient(var(--c4), var(--c3));
    margin: 0;
    width: 100%;
    figure {
        margin: 0 auto;
        position: relative;
        max-width: 700px;
        img {
            margin-top: 30px;
            width: 100%;
        }
        figcaption {
            color: var(--c11);
            font-size: 18px;
            padding: 10px;
        }
    }
    
`

const Indicateur = styled.div`
    left: 20px;
    position: absolute;
    text-shadow: 1px 1px var(--c2);
    top: 50px;
`

const Selecteur = styled.div`
    img {
        cursor: pointer;
        width: 100px;
    }
`

export default GalerieDuTrajet;