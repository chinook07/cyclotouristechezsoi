import styled from "styled-components";

const Boite8 = () => {
    return (
        <Wrapper>
            <p>Quelqu'un qui n'a jamais fait du vélo éprouverait beaucoup de difficultés lors de son premier voyage. Quand on roule 70 km, plusieurs jours de suite, le corps finit par s'adapter. Par contre, être en forme et connaitre ses limites sont deux préalables pour pouvoir pleinement profiter de ses vacances.</p>
            <p>Voici un exemple de préparation physique pour quelqu'un habitué à rouler en ville et de faire des balades de 20 ou 30 km à l'occasion.</p>
            <ol>
                <li>Effectuer quelques sorties de plus en plus longues pour s'habituer aux distances de 50 à 60 km.</li>
                <li>Rouler un bon 60 km, deux jours de suite. La deuxième journée, on peut ajouter des objets lourds dans ses sacoches pour émuler le poids d'un vélo chargé.</li>
                <li>Répéter l'expérience au besoin, tout en augmentant la distance et le poids transporté.</li>
            </ol>
            <p>Il faut respecter son corps, sa capacité physique et mentale, et surtout, il faut s'amuser!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite8;