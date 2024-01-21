import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Boite16 = () => {
    return (
        <Wrapper>
            <p>Plus sérieusement, il y a certains animaux auxquels il faudra faire attention. En roulant en Montérégie, dans les Cantons-de-l'Est, ainsi que dans certaines autres régions, le cyclotouriste est mieux de se méfier des <ExternalLink href="https://www.inspq.qc.ca/zoonoses/maladie-de-lyme">tiques</ExternalLink>. Cet insecte peut transmettre la maladie du Lyme. Si traité rapidement, le danger est minimisé.
            </p>
            <p>Le Québec est surtout reconnu pour son <ExternalLink href="https://mffp.gouv.qc.ca/faune/securite/ours-responsabilite.jsp">ours noir</ExternalLink> qui peut s'avérer dangereux. Il faut se souvenir du fait que les attaques rapportées sont très rares, et les décès le sont encore moins. Évitez de les surprendre, et ne vous mettez jamais entre une mère et son ourson. De plus, ne laissez pas la nourriture trainer partout autour de votre site de camping.</p>
            <p>En ville comme en campagne, une morsure ou une griffure d'un animal infecté par <ExternalLink href="https://www.quebec.ca/sante/problemes-de-sante/a-z/rage-chez-humain/">la rage</ExternalLink> pourrait être fatale pour l'humain. Phénomène extrêmement rare, il faut quand même être alerte, puisqu'une fois les symptômes présents, il ne reste plus rien à faire.</p>
            <p>Malgré ces avertissements, <strong>la faune québécoise est extrêmement bénigne</strong>. Pas de lions, pas de serpents venimeux, pas de rhinocéros!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite16;