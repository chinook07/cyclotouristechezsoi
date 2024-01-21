import styled from "styled-components";

const Boite0 = () => {
    return (
        <Wrapper>
            <p>Inutile de dire que ça prend un vélo en bon état de fonctionnement pour voyager plusieurs jours. Contrairement à ce que l'on pourrait croire, il n'est pas nécessaire d'avoir le dernier modèle haut de gamme. Un simple vélo qui repose dans votre garage suffira probablement. Par contre, pour éviter l'inconfort et l'inefficacité, on opte pour <Gras>un vélo de cyclotourisme</Gras> ou même <Gras>un simple hybride</Gras>.</p>
            <p><Gras>Un vélo de route</Gras> est plus léger, donc rencontre moins de résistance au roulement. Ceux-ci sont généralement moins bien adaptés pour transporter beaucoup de sacoches, par contre, c'est l'idéal pour un voyage en léger, c'est-à-dire avec le coucher à l'hôtel ou à l'auberge. Mais oubliez le gravier!</p>
            <p>Enfin, <Gras>un vélo de gravelle</Gras>, nouvelle tendance des dernières années, permet de sortir des sentiers battus et d'aller se ressourcer sur les chemins forestiers des <abbr title="zones d'exploitation contrôlée">zecs</abbr> et des réserves fauniques.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
    font-weight: bold;
`

export default Boite0;