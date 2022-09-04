import styled from "styled-components";
import FilDArianne from "./comp/FilDArianne";

const Destinations = () => {

    const choix = [
        { "titre": "Trajets", "lien": "trajets" },
        { "titre": "Nouveautés", "lien": "nouveautes" },
        { "titre": "Synthèse", "lien": "synthese" }
    ]

    return (
        <Wrapper>
            <FilDArianne racine={"destinations"} choix={choix} />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Destinations;