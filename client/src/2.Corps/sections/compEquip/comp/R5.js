import styled from "styled-components";

const R3 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>La gestion de l'imprévu</h2>
            <div>
                <p>Ici, il s'agit d'avoir une panoplie d'outils pour pouvoir dépanner, effectuer la réparation d'un objet, attacher deux trucs ensemble, etc.</p>
                <img src={images[15]} alt="petits sacs, pièces de réparation, allumettes et démarre-feu, élastiques" />
                <ul>
                    <li>Sac de petits sacs en plastique et des élastiques</li>
                    <li>Ruban adhésif</li>
                    <li>Démarre-feu et allumettes</li>
                    <li>Pièces de réparation pour le matelas</li>
                </ul>
                <img src={images[16]} alt="attaches rapides, pièces de réparation, mousqutons, clochette à ours" />
                <ul>
                    <li>Attaches rapides ("tie-wraps")</li>
                    <li>Pièces de réparation pour tente</li>
                    <li>Mousquetons</li>
                    <li>Clochette à ours : pour les contrées lointaines</li>
                </ul>
                <p>Peut-être que vous amènerez de la corde, du gaz poivré (ours grizzli dans l'Ouest canadien), ou une couverture d'urgence.</p>
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

export default R3;