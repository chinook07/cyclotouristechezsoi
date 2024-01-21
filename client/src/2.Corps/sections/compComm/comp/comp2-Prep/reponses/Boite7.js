import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import demontepneus from "../../../images/demontepneus.webp";

const Boite7 = () => {
    return (
        <Wrapper>
            <p>Nul besoin d'être mécanicien chevronné pour partir à l'aventure. Cependant, il est recommandé d'avoir une connaissance des bases pour éviter d'être mal pris. Certains pourraient suivre un cours d'initiation pour mieux se sentir en confiance, mais ce n'est pas absolument nécessaire, à moins de vouloir faire du cyclotourisme de brousse, voire du bikepacking. Voici un minimum de connaissances à savoir.</p>
            <ul>
                <li>Changer un pneu</li>
                <li>Ajuster légèrement les freins</li>
            </ul>
            <h4>Au diable les crevaisons!</h4>
            <p>On peut éviter la plupart des soucis en utilisant de bons pneus anticrevaison, ainsi qu'en faisant bien attention de mettre une pression optimale située à l'intérieur de la limite recommandée.</p>
            <p>Un pneu est théoriquement facile à démonter et remonter, si l'on se fie aux centaines de vidéos explicatives trouvées sur le web. À la maison, ça peut devenir décourageant sans un bon démonte-pneu (voir image ci-dessous). Sur le terrain, l'adrénaline vient parfois aider le cyclotouriste mal pris. Le meilleur tutoriel web recensé à ce jour par l'auteur de ce site s'agit du <ExternalLink href="https://www.sheldonbrown.com/flats.html" hrefLang="en">guide de Sheldon Brown</ExternalLink>, rédigé en anglais avec une traduction web disponible en français.</p>
            <p>La plupart des crevaisons se réparent avec des rustines, par contre, il est recommandé de changer la chambre à air pour éviter d'avoir des pépins dans un avenir rapproché.</p>
            <DemontePneu>
                <img src={demontepneus} alt="un démonte-pneu, une trousse de réparation et une chambre à air." />
                <figcaption>Quelques outils indispensables pour la route!</figcaption>
            </DemontePneu>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
    svg:not(:last-child) {
        margin-right: 5px;
    }
`

const DemontePneu = styled.figure`
    img {
        display: block;
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
    }
`

export default Boite7;