import styled from "styled-components";

const Boite12 = () => {
    return (
        <Wrapper>
            <p>Si le vélo est en hibernation dans le garage depuis un mois, il est sage de le sortir pour faire un test de la mécanique au moins une ou deux semaines avant le départ. Un vélo apte à prendre la route est un dont la transmission et les freins fonctionnent, entre autres.</p>
            <p>C'est aussi l'équipement de camping qui mérite une attention particulière. Il faut tester le réchaud sur le balcon, monter la tente dans son salon si l'on ne se souvient pas comment faire, ainsi qu'essayer le filtre d'eau sous le robinet.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite12;