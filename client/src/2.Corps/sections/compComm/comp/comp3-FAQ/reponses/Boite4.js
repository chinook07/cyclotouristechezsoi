import styled from "styled-components";

const Boite4 = () => {
    return (
        <Wrapper>
            <p>Plusieurs cyclotouristes programment des journées de repos lors d'un voyage de longue durée. <Gras>Une journée par semaine</Gras> s'agit d'un consensus parmi les grands voyageurs. L'endroit choisi pour s'arrêter dépend de plusieurs facteurs, mais une ville où il y a beaucoup à visiter, ou bien un parc national peut s'avérer intéressant. L'idéal, c'est d'avoir de quoi explorer, par exemple des sentiers de randonnée ou la possibilité de louer un canot pour la matinée. Même une courte balade en boucle à vélo n'est pas à exclure.</p>
            <p>Le corps a besoin de repos. Si ce n'est pas une journée complète, assurez-vous <Gras>d'alterner entre les journées faciles et difficiles</Gras>. De plus, les premières journées peuvent s'avérer ardues, étant donné que le corps n'est pas encore habitué à la nouvelle routine.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
    font-weight: bold;
`

export default Boite4;