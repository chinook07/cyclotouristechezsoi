import styled from "styled-components";
import * as imagesTout from "../images/galerie-paysage/index";

const Galerie = ({ montrerGal, setMontrerGal }) => {

    const sample = [];
    while (sample.length < 5) {
        let resultat = Math.ceil(Math.random() * 99);
        if (!sample.includes(resultat)) sample.push(resultat);
    }
    const tableauLiens = Object.values(imagesTout);

    const ouvrirGalerieEtendue = () => setMontrerGal(true);
    
    return (
        <Wrapper onClick={ouvrirGalerieEtendue}>
            {
                sample.map((item, index) => {
                    return <img key={index} alt="Description disponible sur la galerie étendue en cliquant ici." src={tableauLiens[item - 1]} />
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    transition: 0.2s all;
    &:hover {
        transition: 0.2s all;
        transform: scale(1.05);
    }
    img {
        border-radius: 10px;
        height: 100px;
        width: 15%;
        object-fit: cover;
    }
`

export default Galerie;