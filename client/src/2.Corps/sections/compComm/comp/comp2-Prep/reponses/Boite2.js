import styled from "styled-components";

const Boite2 = ({ ouvrirFermer }) => {
    return (
        <Wrapper>
            <p>Si l'on accepte de recourir à un moyen de transport motorisé autre que sa propre voiture, il sera possible d'effectuer un trajet linéaire plutôt qu'une boucle. En roulant par exemple de Montréal à Québec, on maximise la probabilité d'avoir <Gras>le vent dans le dos</Gras>, puisque les vents dominants soufflent de l'ouest vers l'est. Voir <CommeUnLien onClick={() => ouvrirFermer(3)} tabIndex="0">la prochaine rubrique</CommeUnLien> pour davantage de renseignements. Autrement, rouler sur le P'tit Train du Nord entre Mont-Laurier et Montréal permet d'avoir <Gras>plus de descentes</Gras> que de montées. De vraies vacances, quoi!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

const Gras = styled.span`
    font-weight: bold;
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default Boite2;