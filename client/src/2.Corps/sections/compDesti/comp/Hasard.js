import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CycloContext } from "../../../../CycloContext";
import donnees from "../donnees/trajets.json";
import * as HasardImg from "../images/0-hasard/index"

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
                        <Choix
                            key={index}
                            onClick={() => ouvrirTrajet(item)}
                        >
                            <ImgFond has={"Has" + item} />
                            <Link to="/destinations/trajets">
                                <DeEtA>
                                    <div>{donnees[item].deA[0]}</div>
                                    <div>{donnees[item].deA[1]}</div>
                                </DeEtA>
                                <Titre>{donnees[item].trajet}</Titre>
                            </Link>
                        </Choix>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Choix = styled.div`
    border: 3px solid var(--c4);
    border-radius: 9px;
    height: 100px;
    margin: 0 auto 20px;
    max-width: 90%;
    position: relative;
    width: 400px;
    a {
        color: inherit;
        height: 100%;
        padding: 10px;
        position: absolute;
        text-decoration: none;
        width: 100%;
        /* text-shadow: var(--c4) 2px 2px 2px 2px; */
    }
`

const ImgFond = styled.div`
    background-image: url(${props => HasardImg[props.has]});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    z-index: 0;
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