import styled from "styled-components";
import { useState, useEffect } from "react";

import carrousel from "../donnees/caroussel.json"
import car0 from "../../../images/carrousel/baiestecath.jpg";
import car1 from "../../../images/carrousel/cabano.jpg";
import car2 from "../../../images/carrousel/monteregie.jpg";
import car3 from "../../../images/carrousel/perce.jpg";
import car4 from "../../../images/carrousel/portneuf.jpg";
import car5 from "../../../images/carrousel/stukely.jpg";

const Carrousel = () => {

    const [carMontrer, setCarMontrer] = useState(0);

    const imagesCar = [car0, car1, car2, car3, car4, car5];

    const changerPhoto = () => {
        if (carMontrer === 5) {setCarMontrer(0)} else {setCarMontrer(carMontrer + 1)}
    }
    setTimeout(changerPhoto, 6000);

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

const Wrapper = styled.div`
    
    width: 100%;
    figure {
        background-color: black;
        margin: 0;
        position: relative;
        width: 100%;
        img {
            width: 100%;
        }
        figcaption {
            color: white;
            font-size: 18px;
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
    color: white;
    font-size: 50px;
    left: 50%;
    position: absolute;
    text-shadow: 2px 2px 1px var(--c2);
    top: 50%;
    transform: translate(-50%, -50%);
`

export default Carrousel;