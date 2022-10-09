import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CycloContext } from "../../../../CycloContext";
import donnees from "../donnees/trajets.json";

const Hasard = ({ trajetsHasard }) => {
    
    const { setTrajetRedig } = useContext(CycloContext);

    const ouvrirTrajet = (trajet) => {
        let details = donnees.find(item => item.id === trajet);
        setTrajetRedig(details);
    };

    return (
        <Wrapper>
            {
                trajetsHasard.map((item, index) => {
                    return (
                        <div key={index} onClick={() => ouvrirTrajet(item)}>
                            <Link to="/destinations/trajets">
                                <DeEtA>
                                    <div>{donnees[item].deA[0]}</div>
                                    <div>{donnees[item].deA[1]}</div>
                                </DeEtA>
                                <Titre>{donnees[item].trajet}</Titre>
                            </Link>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        border: 3px solid var(--c4);
        border-radius: 9px;
        height: 100px;
        margin: 0 auto 20px;
        max-width: 90%;
        padding: 10px;
        width: 400px;
        a {
            color: inherit;
            text-decoration: none;
        }
    }
`

const DeEtA = styled.div`
    display: flex;
    justify-content: space-between;
`

const Titre = styled.div`
    font-size: x-large;
    text-align: center;
`

export default Hasard;