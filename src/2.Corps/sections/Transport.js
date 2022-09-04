import styled from "styled-components";
import FilDArianne from "./comp/FilDArianne";

const Transport = () => {

    const choix = [
        { "titre": "Transport régional", "lien": "regional" },
        { "titre": "Transport interurbain", "lien": "interurbain" },
        { "titre": "Synthèse", "lien": "synthese" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"transport"} choix={choix} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Transport;