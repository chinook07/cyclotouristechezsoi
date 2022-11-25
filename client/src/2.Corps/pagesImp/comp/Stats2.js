import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import statsNuitees from "../donnees/statsNuitees.json";
import { faCampground, faTree, faHotel, faHouseUser, faTrain } from "@fortawesome/free-solid-svg-icons";

const Stats2 = () => {

    let NuiteesTotal = 0;
    let iconesAUtiliser = [faCampground, faTree, faHotel, faHouseUser, faTrain];

    return (
        <Wrapper>
            {
                statsNuitees.map((item, index) => {
                    return <div key={index}>
                        <Nombre>{item.nombre}</Nombre>
                        <div>
                            <span>{item.valeur} </span>
                            <FontAwesomeIcon icon={iconesAUtiliser[index]} />
                        </div>
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
                <Nombre>{NuiteesTotal}</Nombre>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c3);
    border-radius: 5px;
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
        @media (prefers-reduced-motion) {
            transition: none;
        }
        &:hover {
            background-color: var(--c6);
            border-color: var(--c4);
            transition: 0.3s all;
            @media (prefers-reduced-motion) {
                transition: none;
            }
        }
        @media screen and (max-width: 500px) {
            width: 40%
        }
        @media screen and (min-width: 500px) and (max-width: 730px) {
            width: 27%
        }
    }
    @media screen and (max-width: 730px) {
        flex-wrap: wrap;
        > div {
            margin: 5px 0;
        }
    }
`

const Nombre = styled.div`
    font-size: xx-large;
`

export default Stats2;