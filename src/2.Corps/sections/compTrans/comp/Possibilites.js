import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import indexVilles from "../donnees/indexVilles.json";
import trajets from "../donnees/trajets.json"
import { faTrain, faTrainSubway, faBusAlt, faBus, faFerry } from "@fortawesome/free-solid-svg-icons";

const Possibilites = ({ villeSouhaitee }) => {

    const toutesIcones = [faTrain, faTrainSubway, faBusAlt, faBus, faFerry]
    
    const trajetsLocaux = indexVilles[villeSouhaitee];
    const routes = []
    trajetsLocaux.forEach(item => {
        routes.push(trajets[item])
    })

    return (
        <Wrapper>
            {
                villeSouhaitee &&
                routes.map((item, index) => {
                    return <Itineraire key={index}>
                        <div>{index + 1} – <FontAwesomeIcon icon={toutesIcones[item.icone]} /></div>
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

const Itineraire = styled.div``

export default Possibilites;