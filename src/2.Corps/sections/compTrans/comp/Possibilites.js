import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexVilles from "../donnees/indexVilles.json";
import trajets from "../donnees/trajets.json"
import { faTrain, faTrainSubway, faBusAlt, faBus, faFerry, faCircleCheck, faBox, faBagShopping, faClock, faExclamationCircle, faSun } from "@fortawesome/free-solid-svg-icons";

const Possibilites = ({ villeSouhaitee }) => {

    const [montrerLegende, setMontrerLegende] = useState(true);

    const toutesIcones = [faTrain, faTrainSubway, faBusAlt, faBus, faFerry, faCircleCheck, faBox, faBagShopping, faClock, faExclamationCircle, faSun]

    const legendeTexte = [
        "train",
        "autocar",
        "train de banlieue",
        "autobus",
        "traversier",
        "vélos non-démontés acceptés",
        "boite requise",
        "sac requis",
        "vélos acceptés en tout temps",
        "vélos acceptés sur certains départs",
        "vélos acceptés durant la journée seulement"
    ]
    
    const trajetsLocaux = indexVilles[villeSouhaitee];
    const routes = []
    trajetsLocaux.forEach(item => {
        routes.push(trajets[item])
    })

    const alternerLegende = () => montrerLegende ? setMontrerLegende(false) : setMontrerLegende(true);

    return (
        <Wrapper>
            <button onClick={alternerLegende}>
                {
                    montrerLegende
                        ? <span>Cacher légende</span>
                        : <span>Montrer légende</span>
                }
            </button>
            {
                montrerLegende &&
                <Legende>
                    {
                        toutesIcones.map((item, index) => {
                            return (
                                <div key={index}>
                                    <FontAwesomeIcon icon={toutesIcones[index]} />
                                    <span>{legendeTexte[index]}</span>
                                </div>
                            )
                        })
                    }
                </Legende>
            }
            
            {
                villeSouhaitee &&
                routes.map((item, index) => {
                    return <Itineraire key={index}>
                        <div>
                            <span>{index + 1} – </span>
                            <span>
                                {
                                    item.icone.map((itemB, indexB) => {
                                        return <FontAwesomeIcon key={indexB} icon={toutesIcones[itemB]} />
                                    })
                                }
                            </span>
                        </div>
                        <div>{item.trajet}</div>
                        <div>Période d'opération : {item.heures}</div>
                        <div>{item.velos}</div>
                        <div>Transporteur : {item.transporteur}</div>
                    </Itineraire>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Legende = styled.div`
    background-color: var(--c6);
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > div {
        font-size: small;
        padding: 10px;
        > svg {
            margin-right: 5px;
        }
    }
`

const Itineraire = styled.div``

export default Possibilites;