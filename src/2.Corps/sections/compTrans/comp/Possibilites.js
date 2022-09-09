import styled from "styled-components";

import indexVilles from "../donnees/indexVilles.json";
import trajets from "../donnees/trajets.json"

const Possibilites = ({ villeSouhaitee }) => {
    
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
                        <div>{item.infoA}</div>
                        <div>{item.infoB}</div>
                    </Itineraire>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Itineraire = styled.div``

export default Possibilites;