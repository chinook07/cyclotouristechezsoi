import styled from "styled-components";
import * as imagesTout from "../../../images/galerie-paysage/index"

const Galerie = () => {

    // const imagesTerm = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
    // console.log(imagesTerm);
    const sample = [];
    while (sample.length < 5) {
        let resultat = Math.ceil(Math.random() * 99);
        if (!sample.includes(resultat)) sample.push(resultat);
    }

    const tableauDImages = [];
    console.log(imagesTout);
    
    return (
        <Wrapper>
            {/* {
                sample.map((item, index) => {
                    console.log("Je dois afficher :", tableauDImages[item - 1]);
                    return <img key={index} src={tableauDImages[item - 1]} />
                })
            } */}
            <img src={imagesTout.GalPaysage04}></img>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

export default Galerie;