import styled from "styled-components";
import { useState, useEffect } from "react";

import carrousel from "../donnees/caroussel.json"
import car0 from "../../../../2.Corps/accueil/images/carrousel/baiestecath.jpg";
import car1 from "../../../../2.Corps/accueil/images/carrousel/cabano.jpg";
import car2 from "../../../../2.Corps/accueil/images/carrousel/monteregie.jpg";
import car3 from "../../../../2.Corps/accueil/images/carrousel/perce.jpg";
import car4 from "../../../../2.Corps/accueil/images/carrousel/portneuf.jpg";
import car5 from "../../../../2.Corps/accueil/images/carrousel/stukely.jpg";
import Chargement from "../../../../CompReutilisables/Chargement";

const Carrousel = () => {

    const [carMontrer, setCarMontrer] = useState(undefined);

    useEffect(() => {
        setCarMontrer(0)
    }, [])

    const imagesCar = [car0, car1, car2, car3, car4, car5];

    const changerPhoto = () => {
        if (carMontrer === 5 || carMontrer === undefined) { setCarMontrer(0) } else {
            setCarMontrer(carMontrer + 1)
        }
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
                        <Titre>
                            <p>Cyclotouriste chez soi –</p>
                            <h1>Radreisen in Quebec</h1>
                        </Titre>
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
    /* margin-top: 52px; */
    overflow: hidden;
    figure {
        margin: 52px auto 0;
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
    font-size: 35px;
    left: 50%;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px 1px var(--c2);
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    p {
        margin: 0;
    }
    h1 {
        font: unset;
        margin: 0;
    }
    @media screen and (min-width: 450px) and (max-width: 550px) {
        font-size: 30px;
    }
    @media screen and (max-width: 450px) {
        font-size: 25px;
    }
`

export default Carrousel;