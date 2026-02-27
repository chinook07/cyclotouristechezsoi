import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faClose } from "@fortawesome/free-solid-svg-icons";

const FormMAJ = () => {

    const [confirmationMAJ, setConfirmationMAJ] = useState(false);

    const fermerMerciMAJ = () => {
        setConfirmationMAJ(false);
    }

    const envoiMAJ = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        await fetch("https://formspree.io/f/xoqopjyn", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        })
            .then(() => {
                    form.reset()
                    setConfirmationMAJ(true)
                })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper onSubmit={envoiMAJ}>
            <fieldset>
                <p>Vous êtes passé par un des emplacements de cette et vous souhaitez ajouter un commentaire? Un terrain n'est plus accessible ou appartient à vous? Rapportez-le ici!</p>
                <label htmlFor="lieuCorr">La correction ou le signalement concerne quel endroit? Veuillez copier-coller le titre de l'emplacement et noter le lieu approximatif.</label>
                <input
                    name="lieuCorr"
                    placeholder="Ex : Halte du Pont-Couvert, Saint-René-de-Matane"
                    type="text"
                />
                <label htmlFor="texteCorr">Entrez l'information à jour. Selon la nature de message, votre message pourrait être ajouté au contenu, ou le site enlevé de la carte.</label>
                <textarea
                    id="texteCorr"
                    minLength="30"
                    name="texteCorr"
                    placeholder="Ex : J'ai dormi là en juin 2041 au doux son du ruisseau. Il y a maintenant une toilette sèche à 300 millimètres au nord. Je recommande ce site."
                    required
                />
                <label htmlFor="courrielCorr">L'adresse courriel ne sera utilisée que pour vous contacter si jamais des précisions sont demandées.</label>
                <input
                    id="courrielCorr"
                    name="courrielCorr"
                    type="email"
                />
                <Validation>
                    <input
                        id="validCorr"
                        name="validCorr"
                        required
                        type="checkbox"
                    />
                    <label htmlFor="validCorr">Je consens que ces informations sont exactes, dans la mesure du possible.</label>
                </Validation>
                <button type="submit">Envoyer</button>
            </fieldset>
            {
                confirmationMAJ &&
                <Confirm>
                        <p>Merci d'avoir contribué à la carte! L'administrateur prendra les actions pour corriger la carte si nécessaire.</p>
                        <button onClick={fermerMerciMAJ}><FontAwesomeIcon icon={faClose} /></button>
                </Confirm>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    
    fieldset {
        background-color: var(--c2);
        border: none;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0;
        textarea {
            border-radius: 5px;
            height: 100px;
            padding: 10px;
        }
        input[type=email], input[type=text] {
            border: 2px solid var(--c10);
            border-radius: 10px;
            max-width: 350px;
            padding: 10px 15px;
        }
        button {
            background-color: var(--c1);
            border: 2px solid var(--c10);
            border-radius: 10px;
            cursor: pointer;
            max-width: 100px;
            padding: 10px 15px;
            width: fit-content;
        }
    }
`

const Confirm = styled.p`
    background-color: var(--c6);
    border-radius: 0 0 10px 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    p {
        color: var(--c11);
        font-weight: bold;
        margin: 0;
        text-align: center;
    }
    button {
        cursor: pointer;
    }
`

const Validation = styled.div``

export default FormMAJ;