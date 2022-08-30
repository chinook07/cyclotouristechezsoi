import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import statsDonnees from "./statsDonnes.json";
import { faRoute, faCalendarDay, faExpandAlt, faCog, faLeaf, faPercent } from "@fortawesome/free-solid-svg-icons";

const Stats1 = () => {

    let iconesAUtiliser = [faRoute, faCalendarDay, faExpandAlt, faCog, faLeaf, faPercent];

    return (
        <Wrapper>
            {
                statsDonnees.map((item, index) => {
                    return <div key={index}>
                        {item.nombre}
                        {item.valeur}
                        <FontAwesomeIcon icon={iconesAUtiliser[index]} />
                    </div>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    > div {
        border: 1px solid black;
    }
`

export default Stats1;