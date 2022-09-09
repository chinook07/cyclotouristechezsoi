import styled from "styled-components";

import indexVilles from "../donnees/indexVilles.json";

const Resultats = ({ recherchee, setVilleSouhaitee }) => {

    const toutesVilles = Object.keys(indexVilles);
    const total = toutesVilles.filter(ville => ville.toLowerCase().includes(recherchee.toLowerCase()))

    const choisirVille = (ville) => setVilleSouhaitee(ville);

    return (
        <Wrapper>
            <div>Résultats :</div>
            <ul>
                {
                    total.length > 0 && recherchee.length > 2 &&
                    total.map((item, index) => {
                        return <li key={index} onClick={() => choisirVille(item)}>{item}</li>
                    })
                }
            </ul>
            
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Resultats;