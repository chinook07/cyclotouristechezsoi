import styled from "styled-components";
import FilDArianne from "./comp/FilDArianne";

const Equipement = () => {

    const choix = [
        { "titre": "Matériel", "lien": "materiel" },
        { "titre": "Liste interactive", "lien": "listeinteractive" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"equipement"} choix={choix} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Equipement;