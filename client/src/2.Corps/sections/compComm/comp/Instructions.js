import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import couche from "../images/couche.png";
import description from "../images/description.png";
import photo from "../images/photo.png";
import repere from "../images/repere.png";

const Instructions = () => {

    const [accVisible, setAccVisible] = useState(false);

    const montrerAcc = () => {
        accVisible ? setAccVisible(false) : setAccVisible(true);
    }

    return (
        <Wrapper>
            <h3>
                <button
                    aria-controls="acc-corps"
                    aria-expanded="true"
                    id="acc-tete"
                    onClick={montrerAcc}
                    type="button"
                >Comment ajouter un site avec Google</button>
                {
                    accVisible
                        ? <FontAwesomeIcon icon={faAnglesUp} onClick={montrerAcc} />
                        : <FontAwesomeIcon icon={faAnglesDown} onClick={montrerAcc} />
                }
            </h3>
            {
                accVisible &&
                    <div
                        aria-labelledby="acc-tete"
                        id="acc-corps"
                        role="panel"
                        >
                        <ol>
                            <li>
                                <p>Cliquez sur la couche appropriée, selon le type de site.</p>
                                <img src={couche} alt="il faut cliquer sur une couche" />
                            </li>
                            <li>
                                <p>Ajoutez un repère.<img src={repere} alt="icone lieu" /></p>
                            </li>
                            <li>
                                <p>Cliquez sur l'emplacement exact de votre site de camping.</p>
                            </li>
                            <li>
                                <p>Décidez-vous d'un titre, et rédigez une description détaillée de l'endroit.</p>
                                <img src={description} alt="" />
                            </li>
                            <li>
                                <p>Cliquez sur la caméra <img src={photo} alt="icone caméra" /> (fortement recommandé) pour ajouter des photos à partir de :</p>
                                <ul>
                                    <li>votre appareil</li>
                                    <li>un lien web</li>
                                    <li>vos photos Google</li>
                                    <li>votre disque nuagique (Google Drive)</li>
                                </ul>
                            </li>
                            <li>
                                <p>Si vous vous êtes trompés avec l'emplacement, cliquez une fois sur le repère et déplacez-le au bon endroit.</p>
                            </li>
                        </ol>
                        <p><strong>SVP, ne modifiez pas les styles ou les couches! Tout se fera automatiquement.</strong></p>
                </div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h3 {
        background-color: var(--c3);
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
        
        button {
            background-color: unset;
            border: none;
            cursor: inherit;
            font-family: inherit;
            font-size: large;
            font-weight: bold;
            padding: 10px 20px;
            text-align: left;
            width: 100%;
        }
        svg {
            padding: 10px;
        }
    }
    div {
        background-color: var(--c2);
        border-radius: 0 0 10px 10px;
        padding: 15px;
        ol {
            padding-left: 20px;
            li img {
                max-width: 100%;
            }
        }
        > p {
            text-align: center;
        }
    }
`

export default Instructions;