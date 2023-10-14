import styled from "styled-components";

const R1 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>La trousse de réparation</h2>
            <div>
                <p>Sur la route, il faudra être préparé face à l'éventuel pépin mécanique. Sans être équipé d'un éventail complet de tournevis et de clés, il est essentiel d'avoir les outils de base pour pouvoir réparer une crevaison, par exemple.</p>
                <img src={images[4]} alt="multioutil, clé 8 et 10 mm, clé à pédales" />
                <p>Pour les petits ajustements, il est bon de s'équiper de ces outils :</p>
                <ul>
                    <li>Multioutil avec clés hexagonales 4, 5 et 6 mm, tournevis plat et croix</li>
                    <li>Clé 8 / 10 mm</li>
                    <li>Clé à pédales 5/8"</li>
                </ul>
                <img src={images[5]} alt="chambre à air, trousse de réparation, démonte-pneu" />
                <p>Un bon démonte-pneu peut remplacer un trio de ces outils en plastique pour enlever un pneu. Toujours avoir une ou deux chambres à air supplémentaires correspondant à la bonne largeur des pneus, ainsi que des rustines.</p>
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

export default R1;