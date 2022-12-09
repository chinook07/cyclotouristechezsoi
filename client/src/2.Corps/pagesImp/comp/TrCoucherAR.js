import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlane, faTrain, faTrainSubway, faBusAlt, faBus, faCar, faCampground, faHotel } from "@fortawesome/free-solid-svg-icons";

const TrCoucherAR = ({item}) => {

    const afficher = {
        "avion": faPlane,
        "train": faTrain,
        "train de banlieue": faTrainSubway,
        "autocar": faBusAlt,
        "autobus": faBus,
        "voiture": faCar,
        "la tente": faCampground,
        "un toit": faHotel
    }

    return (
        <Wrapper>
            {
                item.alle &&
                <p>
                        <FontAwesomeIcon icon={afficher[item.alle]} />
                        <span>Allé et rentré en {item.alle}</span>
                </p>
            }
            <p>
                <FontAwesomeIcon icon={afficher[item.coucher]} />
                <span>Couché sous {item.coucher}</span>
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: small;
    margin: 15px 20px;
    p {
        margin: 0;
        svg {
            margin-right: 4px;
        }
    }
`

export default TrCoucherAR;