import styled from "styled-components";

const Boite3 = () => {
    
    return (
        <Wrapper>
            <p>Cher cyclotouriste potentiel, le verbe « devoir » dans votre question est à proscrire, puisque vous roulez la distance que vous voulez. Beaucoup de <Gras>débutants</Gras> roulent <Gras>de 50 à 70 km par jour</Gras>, d'autres frôlent ou dépassent le 100. Certains iront même rallier Montréal et Québec en deux jours, ce qui équivaut à environ 150 km à la fois. Il faut respecter ses limites et surtout, s'amuser.</p>
            <p>Si l'on voyage avec ses enfants et qu'on veut savourer son séjour, il est conseillé de revoir ces chiffres à la baisse. Surtout, il ne faut oublier que lorsqu'on s'initie, plus on pédale, plus on doit s'arrêter pour se reposer!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
    font-weight: bold;
`

export default Boite3;