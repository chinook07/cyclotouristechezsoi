import styled from "styled-components";
import { useState } from "react";

import * as imagesToutPa from "../../../images/galerie-paysage/index";
import * as imagesToutPo from "../../../images/galerie-portrait/index";
import galerieSousTitre from "./galerieSousTitre.json";

const GalerieEtendue = () => {

    const [diapo, setDiapo] = useState();

    const tableauLiensPa = Object.values(imagesToutPa);
    const tableauLiensPo = Object.values(imagesToutPo);

    const handleMontrerImage = (image) => {
        console.log("ouvrir image", image, galerieSousTitre[image]);
        setDiapo(image);
    }

    return (
        <Wrapper>
            {/* <div>TEst</div> */}
            <GalerieComplete>
                {
                    tableauLiensPa.map((item, index) => {
                        return <img onClick={() => handleMontrerImage(index)} key={index} src={tableauLiensPa[index]} />
                    })
                }
            </GalerieComplete>
            
            {
                diapo !== undefined
                && <Zoom>
                        <div>←</div>
                        <figure>
                            <img src={tableauLiensPa[diapo]} />
                            <figcaption>{galerieSousTitre[diapo]}</figcaption>
                        </figure>
                        <div>→</div>
                </Zoom>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: black;
    position: relative;
    
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