import styled from "styled-components";
import { Link } from "react-router-dom";

const Boite9 = () => {
    return (
        <Wrapper>
            <p>Vous aurez <Link to="/equipement">une section de ce site web</Link> dédiée à l'équipement requis. Lentement mais surement, il faut commencer par trouver le matériel nécessaire. On peut :</p>
            <ul>
                <li>Emprunter si l'on a la chance de connaitre quelqu'un qui possède déjà le matériel.</li>
                <li>Louer si l'on n'est vraiment pas certain d'aimer le cyclotourisme.</li>
                <li>Acheter de l'occasion ou du neuf (bas de gamme), si l'on n'est pas certain de vouloir pratiquer le cyclotourisme souvent, et qu'on ne veut pas trop investir.</li>
                <li>Acheter des articles neufs de moyenne ou de haute qualité, si l'on n'est pas à son premier voyage et on veut du matériel qui durera longtemps.</li>
            </ul>
            <p>Une attention particulière est recommandée en choisissant la tente, le réchaud et certains autres équipements. Par exemple, une tente trop usée qui laisse passer l'eau est une garantie d'un temps misérable en cas de pluie.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

export default Boite9;