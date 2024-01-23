import styled from "styled-components";
import { useState } from "react";

import FormCorrection from "./FormCorrection";
import FormCommentaire from "./FormCommentaire";

const Actions = ({ site }) => {

    const [action, setAction] = useState();
    const [confirmation, setConfirmation] = useState(false);

    const rapport = (actionAFaire) => {
        if (action === actionAFaire) {
            setAction(undefined)
        } else {
            setAction(actionAFaire);
            document.getElementById("nouveauIFrame").scrollTop += 200;
        }
    }
    
    return (
        <Wrapper>
            <Boutons>
                <button onClick={() => rapport("erreur")}>Signalez une erreur</button>
                <button onClick={() => rapport("ajout")}>Ajouter un commentaire</button>
            </Boutons>
            {
                action === "erreur" &&
                <FormCorrection site={site} />
            }
            {
                action === "ajout" &&
                <FormCommentaire site={site} rapport={rapport} setConfirmation={setConfirmation} />
            }
            {
                confirmation &&
                <Confirm>Merci d'avoir contribué à la carte!</Confirm>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const Boutons = styled.div`
    display: flex;
    justify-content: space-evenly;
    button {
        background-color: var(--c1);
        border: 2px solid var(--c10);
        border-radius: 10px;
        cursor: pointer;
        padding: 10px 15px;
        width: fit-content;
    }
`

const Confirm = styled.p`
    font-weight: bold;
    text-align: center;
`

export default Actions;