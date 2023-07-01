import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCampground } from "@fortawesome/free-solid-svg-icons";

const SpendingTheNight = () => {
    return (
        <Wrapper>
            <h2>
                <FontAwesomeIcon icon={faCampground} />
                <span>Spending the night</span>
            </h2>
            <h3></h3>
            <p></p>
        </Wrapper>
    )
}

const Wrapper = styled.section``

export default SpendingTheNight;