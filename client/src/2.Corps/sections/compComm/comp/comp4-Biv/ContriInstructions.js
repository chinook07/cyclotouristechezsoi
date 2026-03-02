import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import uMap1 from "../../images/uMap-editer.png";
import uMap2 from "../../images/uMap-ajout.png";
import uMap3 from "../../images/uMap-categorie.png";
import uMap4 from "../../images/uMap-enr.png";

const ContriInstructions = () => {

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
                >Comment ajouter un site avec uMap</button>
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
                                <p>Activez l'édition de la carte à l'aide du bouton se trouvant en haut à droite de l'écran.</p>
                                <img src={uMap1} alt="bouton éditer" />
                            </li>
                            <li>
                                <p>Juste en bas, ajoutez un marqueur, puis choisissez l'emplacement exact de votre site de camping.</p>
                                <img src={uMap2} alt="icone lieu" />
                            </li>
                            <li>
                                <p>Sélectionnez d'abord la bonne catégorie de votre emplacement. Rédigez ensuite une description détaillée de l'endroit, et décidez-vous d'un titre.</p>
                                <img src={uMap3} alt="liste de catégories" />
                            </li>
                            <li>
                                <p>Cliquez sur X, puis sur Enregistrer.</p>
                                <img src={uMap4} alt="icone enregistrer" />
                            </li>
                            <li>
                                <p>Pour ajouter des photos (fortement recommandé), vous pouvez envoyer les images à l'administrateur, par l'adresse courriel qui vous aura été communiqué avec vous en remplissant le formulaire ci-dessous.</p>
                            </li>
                        </ol>
                        <p><strong>SVP, ne modifiez pas les styles ou les couches! Tout se fera automatiquement.</strong></p>
                </div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-bottom: 1px solid var(--c3);
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

export default ContriInstructions;