import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContriInstructions from "./ContriInstructions";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

const DevenirContri = (setMontrerContri) => {

    const [confirmationDEM, setConfirmationDEM] = useState(false);

    const fermerMerciDEM = () => {
        setConfirmationDEM(false);
    }

    const envoyerDemande = async (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        await fetch("https://formspree.io/f/xzbozeqn", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        })
            .then(() => {
                setConfirmationDEM(true)
                form.reset()
            })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper
            onSubmit={envoyerDemande}
        >
            <legend>Si vous comptez ajoutez plusieurs sites en même temps, par exemple, lors d'un voyage, pensez à devenir contributeur! De cette façon, vous pouvez les faire afficher en temps réel.</legend>
            <ContriInstructions />
            <fieldset>
                <div>
                    <label htmlFor="courriel">Adresse courriel</label>
                    <input
                        id="courriel"
                        name="courriel"
                        placeholder="Adresse courriel"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <input
                        id="certification"
                        name="certification"
                        required
                        type="checkbox"
                    />
                    <label htmlFor="certification">Je souhaite contribuer à la carte des campings gratuits tout en suivant les instructions ci-dessous. J'ouvrirai un compte sur <ExternalLink href="https://umap.openstreetmap.fr/fr/">uMap</ExternalLink> pour pouvoir contribuer.</label>
                </div>
                <button
                    type="sumbit"
                    value="demande envoyée"
                >Envoyer demande</button>
            </fieldset>
            {
                confirmationDEM &&
                <Confirm>
                        <p>Merci pour votre intérêt! L'administrateur vous contactera dans les deux prochains jours pour vous informer de la marche à suivre.</p>
                        <button onClick={fermerMerciDEM}><FontAwesomeIcon icon={faClose} /></button>
                </Confirm>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    background-color: var(--c1);
    padding: 10px;
    fieldset {
        background-color: var(--c2);
        border: none;
        border-radius: 0 0 5px 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0;
        padding: 15px;
        > div {
            display: flex;
            gap: 10px;
            label:first-child {
                position: absolute;
                left: -99999px;
            }
            input[type=email] {
                border: 2px solid var(--c10);
                border-radius: 10px;
                
                padding: 10px 15px;
            }
        }
        button {
            background-color: var(--c1);
            border: 2px solid var(--c10);
            border-radius: 10px;
            cursor: pointer;
            padding: 10px 15px;
            width: fit-content;
            &:hover {
                box-shadow: 1px 1px var(--c6);
            }
        }
    }
`

const Confirm = styled.div`
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

export default DevenirContri;