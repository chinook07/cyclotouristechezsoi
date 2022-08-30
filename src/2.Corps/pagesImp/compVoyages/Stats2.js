import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import statsNuitees from "./statsNuitees.json";
import { faCampground, faTree, faHotel, faHouseUser, faTrain } from "@fortawesome/free-solid-svg-icons";

const Stats2 = () => {

    let NuiteesTotal = 0;
    let iconesAUtiliser = [faCampground, faTree, faHotel, faHouseUser, faTrain];

    return (
        <Wrapper>
            {
                statsNuitees.map((item, index) => {
                    return <div key={index}>
                        {item.nombre}
                        {item.valeur}
                        <FontAwesomeIcon icon={iconesAUtiliser[index]} />
                    </div>
                })
            }
            <div>
                <span>TOTAL :</span>
                {
                    statsNuitees.forEach((item) => {
                        NuiteesTotal += item.nombre
                    })
                }
                <span>{NuiteesTotal}</span>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    > div {
        border: 1px solid black;
    }
`

export default Stats2;