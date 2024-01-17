import styled from "styled-components";
import { useState, useEffect } from "react";

import carrousel from "../donnees/caroussel.json"
import car0 from "../images/carrousel/baiestecath.webp";
import car1 from "../images/carrousel/cabano.webp";
import car2 from "../images/carrousel/monteregie.webp";
import car3 from "../images/carrousel/perce.webp";
import car4 from "../images/carrousel/portneuf.webp";
import car5 from "../images/carrousel/stukely.webp";
import Chargement from "../../../CompReutilisables/Chargement";

const Carrousel = () => {

    const [carMontrer, setCarMontrer] = useState(undefined);

    useEffect(() => {
        setCarMontrer(0)
    }, [])

    const imagesCar = [car0, car1, car2, car3, car4, car5];

    const changerPhoto = () => {
        if (carMontrer === 5 || carMontrer === undefined) {setCarMontrer(0)} else {setCarMontrer(carMontrer + 1)}
    }
    setTimeout(changerPhoto, 6000);

    if (carMontrer === undefined) {
        return (
            <Chargement />
        )
    } else {
        return (
            <Wrapper>
                {
                    <figure>
                        <Indicateur>
                            {carMontrer + 1}/{carrousel.length}
                        </Indicateur>
                        <Titre>Cyclotouriste<br />chez soi</Titre>
                        <img src={imagesCar[carMontrer]} alt={carrousel[carMontrer].alt} />
                        <figcaption>{carrousel[carMontrer].desc}</figcaption>
                    </figure>
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    background-image: linear-gradient(var(--c4), var(--c3));
    margin: -20px -20px 20px -20px;
    overflow: hidden;
    width: calc(100% + 40px);
    figure {
        margin: 0 auto;
        position: relative;
        max-width: 700px;
        img {
            width: 100%;
        }
        figcaption {
            font-size: 18px;
            padding: 10px;
        }
    }
    
`

const Indicateur = styled.div`
    left: 20px;
    position: absolute;
    text-shadow: 1px 1px var(--c2);
    top: 20px;
`

const Titre = styled.div`
    color: var(--c11);
    font-size: 50px;
    left: 50%;
    position: absolute;
    text-shadow: 2px 2px 1px var(--c2);
    top: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 450px) and (max-width: 550px) {
        font-size: 40px;
    }
    @media screen and (max-width: 450px) {
        font-size: 30px;
    }
`

export default Carrousel;