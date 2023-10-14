import styled from "styled-components";

const R9 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>Le jeu sur la route</h2>
            <div>
                <ul>
                    <li>Quelques feuilles de mots croisés ou de sudoku.</li>
                    <li>Roman intéressant ou liseuse</li>
                    <li>Carnet résistant à l'eau</li>
                    <li>Crayons et/ou stylos à encre effaçable</li>
                    <li>Jeu de cartes</li>
                    <li>Jeux de société en version miniature</li>
                </ul>
                <img src={images[26]} alt="roman, jeu de cartes, crayon et stylo, carnet, pages de sudoku" />
            </div>
        </Rubrique>
    )
}

const Rubrique = styled.div`
    h2 {
        text-align: center;
    }
    > div {
        columns: 300px 3;
        margin-bottom: 15px;
        img {
            width: 100%;
        }
    }
`

export default R9;