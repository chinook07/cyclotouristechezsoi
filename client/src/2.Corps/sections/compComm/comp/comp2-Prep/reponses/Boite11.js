import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrain, faPlane, faCampground, faHotel } from "@fortawesome/free-solid-svg-icons";

const Boite11 = () => {
    return (
        <Wrapper>
            <p>Il incombe d'effectuer certaines réservations à l'avance, telles que :</p>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Les billets d'avion</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTrain} />
                    <span>Les billets de train interurbains</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCampground} />
                    <span>Certains campings lorsque ceux-ci ne sont pas certifiés Bienvenue cyclistes, et qu'ils ne disposent que de quelques places pour tentes.</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Les hébergements intérieurs</span>
                </li>
            </ul>
            <p>Et même à ca, certains ne réservent leurs hôtels que quelques jours à l'avance, selon le moment de l'année et la région visitée!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite11;