import styled from "styled-components";
import Moment from "../Moment";

const Boite4 = () => {
    return (
        <Wrapper>
            <p>Il s'agit d'une question de préférence. Il y a grosso modo de quatre à cinq mois qui sont propices au cyclotourisme. Chaque période de cette courte saison amène ses bienfaits et ses importunités.</p>
            <Moment />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite4;