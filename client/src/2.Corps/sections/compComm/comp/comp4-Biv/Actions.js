import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Actions = ({ site }) => {

    const rapportErreur = (site) => {
        console.log(site);
    }

    const ajoutComm = (site) => {
        console.log(site);
    }
    
    return (
        <Wrapper>
            <button onClick={() => rapportErreur(site)}>Signalez une erreur</button>
            <button onClick={() => ajoutComm(site)}>Ajouter un commentaire</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default Actions;