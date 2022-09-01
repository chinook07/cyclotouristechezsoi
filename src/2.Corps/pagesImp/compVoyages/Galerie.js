import styled from "styled-components";
import * as imagesTout from "../../../images/galerie-paysage/index";

const Galerie = () => {

    // const imagesTerm = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
    // console.log(imagesTerm);
    const sample = [];
    while (sample.length < 5) {
        let resultat = Math.ceil(Math.random() * 99);
        if (!sample.includes(resultat)) sample.push(resultat);
    }
    const tableauLiens = Object.values(imagesTout);
    
    return (
        <Wrapper>
            {
                sample.map((item, index) => {
                    return <img key={index} src={tableauLiens[item - 1]} />
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    img {
        width: 15%;
    }
`

export default Galerie;