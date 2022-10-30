import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Zoom = ({ fermerZoom, photoPrec, photoSuiv, tousPhotos, diapo }) => {

    const clavier = (e) => {
        if (e.which === 27) fermerZoom();
        if (e.which === 37) photoPrec();
        if (e.which === 39) photoSuiv();
        window.removeEventListener("keyup", clavier)
    }
    
    window.addEventListener("keyup", clavier);

    return (
        <Wrapper>
            <button onClick={fermerZoom}>
                <FontAwesomeIcon icon={faCircleXmark} size="3x" />
            </button>
            <Caroussel>
                <FontAwesomeIcon icon={faBackwardStep} onClick={photoPrec} />
                <figure>
                    <img
                        src={tousPhotos[diapo - 1].lien}
                        alt={tousPhotos[diapo - 1].description}
                    />
                    <figcaption>{tousPhotos[diapo - 1].description}</figcaption>
                    {
                        tousPhotos[diapo - 1].description === undefined &&
                        <figcaption>À venir...</figcaption>
                    }
                </figure>
                <FontAwesomeIcon icon={faForwardStep} onClick={photoSuiv} />
            </Caroussel>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c6);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    left: 50%;
    padding: 10px;
    position: fixed;
    top: 0;
    transform: translateX(-50%);
    width: 75%;
    z-index: 2;
    button {
        background: none;
        border: none;
        cursor: pointer;
        height: 60px;
        margin: 0 auto;
        width: 70px;
    }
    @media screen and (max-width : 600px) {
        width: 88%;
    }
`

const Caroussel = styled.div`
    align-items: center;
    display: flex;
    height: calc(100vh - 70px);
    justify-content: center;
    position: relative;
    > svg {
        background-color: #ffffff88;
        border-radius: 50%;
        cursor: pointer;
        height: 30px;
        padding: 5px;
        position: absolute;
        top: 50%;
        width: 30px;
        &:first-child {
            left: 5%;
            transform: translate(-50%, -50%);
        }
        &:last-child {
            left: 95%;
            transform: translate(-50%, -50%);
        }
    }
    figure {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 10px;
        max-height: 100%;
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

export default Zoom;