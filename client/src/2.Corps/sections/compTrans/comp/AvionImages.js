import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import veloBoite from "../images/velo-boite.jpg";
import veloEmboite from "../images/velo-emboite.jpg";
import avion from "../images/avion.jpg";
import { faArrowCircleRight, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const AvionImages = () => {
    return (
        <Wrapper>
            <figure>
                <img src={veloBoite} alt="boite de vélo ouverte et vide, vélo et sacoches à côté" />
                <figcaption>
                    <span>16 h 57</span>
                    <span>Préparation de la mise en boite</span>
                </figcaption>
            </figure>
            <div>
                <FontAwesomeIcon icon={faArrowCircleRight} size="2xl" />
                <FontAwesomeIcon icon={faArrowCircleDown} size="2xl" />
            </div>
            <figure>
                <img src={veloEmboite} alt="boite de vélo fermée, sacoches à côté" />
                <figcaption>
                    <span>17 h 59</span>
                    <span>Mise en boite effectuée avec difficulté</span>
                </figcaption>
            </figure>
            <div>
                <FontAwesomeIcon icon={faArrowCircleRight} size="2xl" />
                <FontAwesomeIcon icon={faArrowCircleDown} size="2xl" />
            </div>
            <figure>
                <img src={avion} alt="moteur d'un avion, aérogare au loin avec lettrage « Iles de la Madeleine »" />
                <figcaption>
                    <span>22 h 16</span>
                    <span>Décollage après plusieurs heures de retard</span>
                </figcaption>
            </figure>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    figure {
        margin: 0 10px;
        width: 150px;
        img {
            display: block;
            height: 200px;
            margin: 0 auto;
            width: 100%;
        }
        figcaption {
            display: flex;
            flex-direction: column;
        }
        &:first-child img {
            border-radius: 15px 0 0 15px;
        }
        &:last-child img {
            border-radius: 0 15px 15px 0;
        }
    }
    div {
        align-self: center;
        svg {
            color: var(--c4);
            
            &:last-child {
                display: none;
            }
        }
    }
    
    @media screen and (max-width: 660px) {
        align-items: center;
        flex-direction: column;
        figure {
            &:first-child img {
                border-radius: 15px 15px 0 0;
            }
            &:last-child img {
                border-radius: 0 0 15px 15px;
            }
        }
        div {
            margin: 10px 0;
            svg {
                &:first-child {
                    display: none;
                }
                &:last-child {
                    display: inline-block;
                }
            }
        }
    }
`

export default AvionImages;