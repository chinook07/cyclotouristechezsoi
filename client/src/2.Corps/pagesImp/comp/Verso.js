import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TrCoucher from "./TrCoucher";
import TrCoucherAR from "./TrCoucherAR";
import { FaMountain } from "react-icons/fa";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Verso = ({ item, index }) => {

    return (
        <Wrapper>
            <Intro>
                <span>{index + 1}</span>
                <span>Km: {item.km}</span>
            </Intro>
            <Titre>{item.titre}</Titre>
            <Diff>
                <p>Dénivelé positif : {item.denivele}</p>
                <p>Ratio : {item.ratio}</p>
                <p>
                    <span>Difficulté de 1 à 5 : </span>
                    <Montagnes>
                        {
                            [...Array(item.difficulte)].map((e, i) => <FaMountain key={i} />)
                        }
                    </Montagnes>
                </p>
            </Diff>
            <VillesTrav>
                {
                    item.regions
                        ? <p>Régions traversées :</p>
                        : <p>Villes traversées :</p>
                }
                <ul>
                    {
                        item.villes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                    <span>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </VillesTrav>
            {
                item.alle === item.retour
                    ? <TrCoucherAR item={item} />
                    : <TrCoucher item={item} />
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
    padding: 10px;
    width: 100%;
    a {
        color: var(--c5);
        font-size: small;
    }
`

const Intro = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const Titre = styled.p`
    font-size: larger;
    margin: 25px 20px 0;
`

const Diff = styled.div`
    margin: 20px 20px 0;
    p {
        margin: 0;
    }
`

const Montagnes = styled.span`
    display: block;
`

const VillesTrav = styled.div`
    font-size: small;
    margin: 15px 20px;
    li {
        list-style: none;
        text-align: left;
        svg {
            margin-right: 4px;
        }
    }
`

export default Verso;