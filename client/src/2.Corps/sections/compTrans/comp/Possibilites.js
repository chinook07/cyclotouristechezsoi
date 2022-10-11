import styled from "styled-components";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexVilles from "../donnees/indexVilles.json";
import trajets from "../donnees/trajets.json";
import Legende from "./Legende";
import transporteurs from "../donnees/transporteurs.json"
import { faTrain, faTrainSubway, faBusAlt, faBus, faFerry, faCircleCheck, faBox, faBagShopping, faClock, faExclamationCircle, faSun, faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Possibilites = ({ villeSouhaitee }) => {

    const [montrerLegende, setMontrerLegende] = useState(true);

    const toutesIcones = [faTrain, faTrainSubway, faBusAlt, faBus, faFerry, faCircleCheck, faBox, faBagShopping, faClock, faExclamationCircle, faSun]
    
    const trajetsLocaux = indexVilles[villeSouhaitee];
    const routes = [];
    trajetsLocaux.forEach(item => {
        routes.push(trajets[item])
    })

    const alternerLegende = () => montrerLegende ? setMontrerLegende(false) : setMontrerLegende(true);

    return (
        <Wrapper>
            <button onClick={alternerLegende}>
                {
                    montrerLegende
                        ? <div><FontAwesomeIcon icon={faAnglesUp}/><span>Cacher légende</span></div>
                        : <div><FontAwesomeIcon icon={faAnglesDown}/><span>Montrer légende</span></div>
                }
            </button>
            {
                montrerLegende &&
                <Legende toutesIcones={toutesIcones} />
            }
            
            {
                villeSouhaitee &&
                routes.map((item, index) => {
                    return <Itineraire key={index}>
                        <div>
                            {
                                item.icone.map((itemB, indexB) => {
                                    return <FontAwesomeIcon key={indexB} icon={toutesIcones[itemB]} />
                                })
                            }
                        </div>
                        <div>{item.trajet}</div>
                        <div>Période d'opération : {item.heures}</div>
                        <div>{item.velos}</div>
                        <div>Transporteur : <ExternalLink href={transporteurs[item.transporteur]}>{item.transporteur}</ExternalLink></div>
                    </Itineraire>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    button {
        background-color: var(--c6);
        border: none;
        border-radius: 5px 5px 0 0;
        color: var(--c1);
        cursor: pointer;
        padding: 10px;
        &:hover {
            background-color: var(--c5);
        }
        svg {
            margin-right: 5px;
        }
    }
`

const Itineraire = styled.div`
    padding: 15px 0;
    svg {
        margin: 0 5px;
    }
`

export default Possibilites;