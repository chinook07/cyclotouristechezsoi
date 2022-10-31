import styled from "styled-components";

import carte1 from "../images/voyages-eff.png";
import carte2 from "../images/voyages-eff-int.png";

const Cartes = () => {
    
    return (
        <Wrapper>
            <Carte1 src={carte1} alt="carte des voyages effectués" />
            <Carte2>
                <img src={carte2} alt="carte des voyages effectués dans le sud du Québec"/>
            </Carte2>
            <p>Les numéros sur la carte réfèrent à ceux dans la section suivante.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 900px;
    position: relative;
    transition: all 0.3s;
    width: 80%;
    @media (prefers-reduced-motion) {
        transition: none;
    }
    p {
        text-align: center;
    }
    &:hover {
        transition: all 0.3s;
        width: 100%;
        @media (prefers-reduced-motion) {
            transition: none;
        }
    }
`

const Carte1 = styled.img`
    box-shadow: var(--c3) 5px 5px 5px 5px;
    width: 100%;
    &:hover {
        box-shadow: var(--c6) 5px 5px 5px 5px;
    }
`

const Carte2 = styled.div`
    left: 18.5%;
    max-width: 330px;
    position: absolute;
    top: 43%;
    transition: all 0.3s;
    width: 37%;
    @media (prefers-reduced-motion) {
        transition: none;
    }
    img {
        box-shadow: var(--c5) 5px 5px 5px 5px;
        opacity: 0;
        width: 100%;
    }
    &:hover img {
        opacity: 1;
        transition: 0.3s;
        transform: scale(2.2) translate(4%, -21%);
        @media (prefers-reduced-motion) {
            transition: none;
        }
    }
`

export default Cartes;