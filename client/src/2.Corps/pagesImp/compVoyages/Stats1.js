import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import statsDonnees from "../donnees/statsDonnes.json";
import { faRoute, faCalendarDay, faExpandAlt, faCog, faLeaf, faPercent } from "@fortawesome/free-solid-svg-icons";

const Stats1 = () => {

    let iconesAUtiliser = [faRoute, faCalendarDay, faExpandAlt, faCog, faLeaf, faPercent];

    return (
        <Wrapper>
            {
                statsDonnees.map((item, index) => {
                    return <div key={index}>
                        <Nombre>{item.nombre}</Nombre>
                        <div>
                            <span>{item.valeur} </span>
                            <FontAwesomeIcon icon={iconesAUtiliser[index]} />
                        </div>
                    </div>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c3);
    color: var(--c1);
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    > div {
        background-color: var(--c4);
        border: 1px solid var(--c6);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin: 5px;
        padding: 15px 10px;
        text-align: center;
        transition: 0.3s all;
        width: calc(100% / 6);
        &:hover {
            background-color: var(--c6);
            border-color: var(--c4);
            transition: 0.3s all;
        }
    }
    @media screen and (max-width: 730px) {
        flex-wrap: wrap;
        > div {
            margin: 5px 0;
            width: 27%;
        }
    }
`

const Nombre = styled.div`
    font-size: xx-large;
`

export default Stats1;