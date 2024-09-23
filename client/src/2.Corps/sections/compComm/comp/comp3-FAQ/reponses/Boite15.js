import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import osmand from "../../../images/osmand-eau.webp";

const Boite15 = () => {

    const photo9 = {
		src: osmand,
		alt: "carte de Waterloo avec des points d'eau",
		cap: "Hé OsmAnd, montre-moi les points d'eau à Waterloo et ailleurs!",
    };
    
    return (
        
        <Wrapper>
            <p>Au Québec, il est relativement facile de trouver des points d'eau. On trouve des abreuvoirs dans les parcs, les bâtiments municipaux (centres communautaires, bibliothèques) et les autres espaces publics. D'autres lieux où l'on peut souvent se ravitailler en eau incluent les stations-services, les restaurants, les dépanneurs et à l'occasion les supermarchés.</p>
            <p>Parfois, il faudra remplir sa bouteille dans le lavabo d'une salle de bain. L'eau est tout aussi potable que celle d'un évier de cuisine, mais l'espace de dégagement limité peut être gênant pour les grandes bouteilles.</p>
            <h4>Est-ce qu'il y a une carte des points d'eau?</h4>
            <p>Les cartes de <ExternalLink href="https://www.routeverte.com/cartographie-route-verte/">la Route verte</ExternalLink> et de <ExternalLink href="https://www.quebec511.info/fr/Carte/Default.aspx">Québec 511</ExternalLink> offrent la possibilité d'afficher les haltes routières. En cliquant dessus, on voit si de l'eau y est disponible. Par expérience, cette information n'est pas toujours véridique.</p>
            <h4>Vive la cartographie libre!</h4>
            <p>Puisqu'on est parfois mieux servi par soi-même, il existe <ExternalLink href="https://www.openstreetmap.org">une plateforme de cartographie</ExternalLink> ouverte et gratuite d'utilisation. Chacun peut se créer un compte, dans le but d'améliorer la carte et partager ses connaissances. Ce <ExternalLink href="https://touristechezsoi.weebly.com/blogue/la-cartographie-libre">billet de blogue</ExternalLink> donne un aperçu d'OpenStreetMap et surtout <ExternalLink href="https://osmand.net/">OsmAnd</ExternalLink>, une application mobile qui permet d'afficher les points d'eau.</p>
            <UnePhoto>
                <img src={photo9.src} alt={photo9.alt} />
                <figcaption>{photo9.cap}</figcaption>
            </UnePhoto>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const UnePhoto = styled.figure`
    margin: 0 auto;
    max-width: 500px;
    img {
        
        width: 100%;
    }
    
`;

export default Boite15;