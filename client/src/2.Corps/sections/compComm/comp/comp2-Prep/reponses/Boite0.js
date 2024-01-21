import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Boite0 = () => {
    return (
        <Wrapper>
            <p>Le premier choix à faire est celui de l'hébergement.</p>
            <h4>Hébergement sous un toit</h4>
            <p>En mode léger, on dort à l'hôtel, au motel, au gite du passant, sinon on se sert des réseaux d'hébergement pour cyclistes, tel que <ExternalLink href="https://fr.warmshowers.org/">Warmshowers</ExternalLink>. Cette option permet de maintenir un certain niveau de confort tout en transportant une charge réduite.</p>
            <h4>Hébergement dans la tente</h4>
            <p>En mode autonomie, on monte sa tente dans un terrain de camping, ou bien l'on trouve une place à l'abri des regards, vers le crépuscule, tout en s'assurant de laisser l'espace propre. On peut aussi demander aux gens la permission de monter sa tente sur leur terrain. Bien sûr, lors d'un long voyage en autonomie, ça peut être relaxant de louer une chambre de temps à autre pour dormir dans un vrai lit.</p>
            <p>Dormir dans sa tente comporte deux principaux avantages. Ce type d'aventure nous permet de respecter un budget restreint et conserver la spontanéité du voyage.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite0;