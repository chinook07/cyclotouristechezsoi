import styled from "styled-components";
import { useState } from "react";

import outils from "../images/navAccueil/outils.webp";

const TestWebP = () => {

    const [pasCompatible, setPasCompatible] = useState(false);

    const verif = () => {
        let elem = document.createElement('canvas');
        console.log(elem);
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        return false;
    }

    const verif2 = () => {
        console.log("verif2");
        if (!verif) setPasCompatible(true);
    }

    window.onload = verif2();

    return (
        <Wrapper>
            <img alt="" src={outils} />
            {
                pasCompatible && <Avertissement>
                    <p>Attention! Votre navigateur web n'est pas compatible avec les images en format .webp, utilisées sur ce site web.</p>
                </Avertissement>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    img {
        width: 50px;
    }
`

const Avertissement = styled.div`
    border: 2px solid orange;
    padding: 10px;
    p {
        margin: 0;
        text-align: center;
    }
`

export default TestWebP;