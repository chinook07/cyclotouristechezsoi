import styled from "styled-components";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexVilles from "../donnees/indexVilles.json";
import trajets from "../donnees/trajets.json";
import Legende from "./Legende";
import transporteurs from "../donnees/transporteurs.json"
import { faTrain, faTrainSubway, faBusAlt, faBus, faFerry, faCircleCheck, faBox, faBagShopping, faClock, faExclamationCircle, faSun } from "@fortawesome/free-solid-svg-icons";

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
                        ? <span>Cacher légende</span>
                        : <span>Montrer légende</span>
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

const Wrapper = styled.div``

const Itineraire = styled.div`
    padding: 15px 0;
    svg {
        margin: 0 5px;
    }
`

export default Possibilites;