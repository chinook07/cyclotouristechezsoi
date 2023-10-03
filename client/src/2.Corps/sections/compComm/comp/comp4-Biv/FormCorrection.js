import styled from "styled-components";
import { useState } from "react";

const FormCorrection = ({ site }) => {

    const [confirmation, setConfirmation] = useState(false);

    const envoyerRapport = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await fetch("https://formspree.io/f/xoqopjyn", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        })
            .then(() => setConfirmation(true))
            .catch(err => console.log(err))
        
    }
    
    return (
        <Wrapper
            action="https://formspree.io/f/xoqopjyn"
            method="POST"
            onSubmit={envoyerRapport}
        >
            <p>Le terrain n'est plus accessible ou appartient à vous? Il y a une erreur dans les informations de ce site? Rapportez-le ici!</p>
            <fieldset>
                <input type="hidden" name="idSite" value={site._id} />
                <label htmlFor="texteCorr">Entrez l'information à jour. Selon la nature de message, votre message pourrait être ajouté au contenu, ou le site enlevé de la carte.</label>
                <textarea
                    id="texteCorr"
                    name="texteCorr"
                    placeholder="Ex : Je suis passé par là en juillet 2046, il n'y avait plus d'eau potable."
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
                    <label htmlFor="validCorr">Je consens que ces informations sont exacts, dans la mesure du possible.</label>
                </Validation>
                <button type="submit">Envoyer</button>
            </fieldset>
            {
                confirmation &&
                <Confirm>Merci d'avoir contribué à la carte! L'administrateur prendra les actions pour corriger la carte si nécessaire.</Confirm>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        textarea {
            border-radius: 5px;
            height: 100px;
            padding: 10px;
        }
        input[type=email] {
            border: 2px solid var(--c10);
            border-radius: 10px;
            max-width: 300px;
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

const Validation = styled.div``

const Confirm = styled.p`
    font-weight: bold;
    text-align: center;
`

export default FormCorrection;