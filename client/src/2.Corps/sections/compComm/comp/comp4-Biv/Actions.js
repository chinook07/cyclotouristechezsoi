import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormCorrection from "./FormCorrection";
import FormCommentaire from "./FormCommentaire";

const Actions = ({ site }) => {

    const [action, setAction] = useState();

    const rapport = (action) => {
        setAction(action);
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
                <FormCommentaire site={site} />
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

export default Actions;