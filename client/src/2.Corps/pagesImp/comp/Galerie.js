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
                    return <img key={index} src={tableauLiens[item - 1]} />
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
        width: 15%;
    }
`

export default Galerie;