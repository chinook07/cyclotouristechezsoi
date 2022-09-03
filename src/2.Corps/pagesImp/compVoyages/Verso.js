import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import {FaMountain} from "react-icons/fa"

const Verso = ({item, index}) => {
    return (
        <Wrapper>
            <Intro>Km: {item.km}</Intro>
            <Titre>{item.titre}</Titre>
            <Diff>
                <div>Dénivelé positif : {item.denivele}</div>
                <div>Ratio : {item.ratio}</div>
                <div>Difficulté de 1 à 5 : {item.difficulte} <FaMountain/></div>
            </Diff>
            <VillesTrav>
                <span>Villes traversées :</span>
                <ul>
                    {
                        item.villes.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </VillesTrav>
            {
                item.alle === item.retour
                ? <Details>
                        {
                            item.alle &&
                            <div>Allé et rentré en {item.alle}</div>
                        }
                        <div>Couché sous {item.coucher}</div>
                    </Details>
                    : <Details>
                        {
                            item.alle &&
                            <div>Allé en {item.alle}</div>
                        }
                        <div>Couché sous {item.coucher}</div>
                        {
                            item.retour &&
                            <div>Rentré en {item.retour}</div>
                        }
                </Details>
            }
            {
                item.lienURL &&
                <ExternalLink href={item.lienURL}>{item.lienTitre}</ExternalLink>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c1);
    border-radius: 5px;
    color: var(--c5);
    height: 100%;
    width: 100%;
    a {
        color: var(--c5);
        font-size: small;
    }
`

const Intro = styled.div`
    text-align: right;
`

const Titre = styled.div`
    font-size: larger;
`

const Diff = styled.div``

const VillesTrav = styled.div`
    font-size: small;
`

const Details = styled.div`
    font-size: small;
`

export default Verso;