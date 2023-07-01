import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRoute } from "@fortawesome/free-solid-svg-icons";

const PlacesToRide = () => {
    return (
        <Wrapper>
            <h2>
                <FontAwesomeIcon icon={faRoute} />
                <span>Places to ride</span>
            </h2>
            <h3></h3>
            <p></p>
        </Wrapper>
    )
}

const Wrapper = styled.section``

export default PlacesToRide;