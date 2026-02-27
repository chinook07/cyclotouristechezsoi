import styled from "styled-components";

import Instructions from "./Instructions";

const DemandeEdition = () => {
    return (
        <Wrapper
            action="https://formspree.io/f/xzbozeqn"
            method="POST"
        >
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
                    <label htmlFor="certification">Je souhaite contribuer à la carte des campings gratuits tout en suivant les instructions ci-dessous.</label>
                </div>
                <button
                    type="sumbit"
                    value="demande envoyée"
                >Envoyer demande</button>
            </fieldset>
            <Instructions />
        </Wrapper>
    )
}

const Wrapper = styled.form`
    background-color: var(--c1);
    padding: 10px;
    fieldset {
        background-color: var(--c2);
        border: none;
        border-radius: 5px;
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

export default DemandeEdition;