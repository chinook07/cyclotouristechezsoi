import styled from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import auteur from "./images/auteur.jpg"

const APropos = () => {

    return (
        <>
            <h2>Qui est l'auteur de ce site web?</h2>
            <div>
                <div>
                    <p>En 2014, après un été de plusieurs sorties en canot-camping, j'ai vécu ma première aventure en cyclotourisme, d'une durée de huit jours à travers l'est de l'Ontario. Depuis ce temps, il ne se passe pas un été où j'entreprends au moins deux voyages à vélo. De l'ile Salaberry jusqu'aux Iles-de-la-Madeleine, de Louvicourt à La Patrie, j'ai parcouru des milliers de kilomètres à deux roues. Mon métier de guide touristique et celui de suppléant dans les écoles secondaires m’accordaient la flexibilité d'explorer le Québec à vélo.</p>
                    <p>Durant l'été 2018, j'ai créé <ExternalLink href="https://touristechezsoi.ca/">un blogue</ExternalLink> relatant des sujets divers, tel le tourisme, la science, mais surtout le vélo. Lors du premier été de la COVID-19, j'ai créé un site web servant comme référence dans le domaine du cyclotourisme. De plus, j'avais décidé d'apprendre les langages HTML, CSS et JavaScript, non seulement pour réaliser ce projet, mais aussi en vue d'un retour potentiel aux études qui s'est enfin concrétisé en mars 2022.</p>
                    <p>Je vous laisse découvrir mon site web pour en apprendre davantage. Au plaisir de se croiser sur les routes du Québec!</p>
                    <p>Nicola Z.</p>
                </div>
                <PhotoAuteur>
                    <img src={auteur} alt="auteur du site avec un drapeau acadien au fond"></img>
                    <figcaption>L'auteur de ce site web lors de sa traversée de l'Acadie en 2022.</figcaption>
                </PhotoAuteur>
            </div>
            <div>
                <h3>Vous cherchez un collaborateur pour faire la promotion d'un itinéraire cyclable ou la pratique du cyclotourisme?</h3>
                <p>Alors que l'engouement pour le vélo se fait sentir de plus en plus, votre association ou votre entreprise pourrait profiter de cette tendance, là pour rester. Que ça soit pour la rédaction d'un article ou une conférence à vos employés, je vous invite à <Link to="/contact">me contacter</Link> pour discuter des possibilités.</p>
                <p>Expérience à ce jour :</p>
                <ul>
                    <li>Deux textes dans le livre <ExternalLink href="https://www.guidesulysse.com/catalogue/Randonnees-a-velo-Amerique-du-Nord-50-itineraires-de-reve-Itineraires-de-reve-Ulysse,9782765860853,produit.html">Randonnées à vélo Amérique du Nord - 50 itinéraires de rêve</ExternalLink>.</li>
                    <li>Deux articles de blogue en collaboration avec Tourisme Montérégie suite à un séjour <ExternalLink href="https://www.tourisme-monteregie.qc.ca/une-viree-a-velo-juste-parfaite-dans-le-suroit/?season=summer">dans Suroît</ExternalLink> et un autre <ExternalLink href="https://www.tourisme-monteregie.qc.ca/sejour-a-velo-pour-admirer-les-couleurs-de-lautomne/?season=fall">dans le nord-est de la région</ExternalLink> en 2020.</li>
                    <li>Fait parti du comité organisateur du <ExternalLink href="https://www.facebook.com/events/parc-maisonneuve/v%C3%A9lo-sur-glace-2020-forum-v%C3%A9lo-dhiver/439723316683787/">Forum du vélo d'hiver 2020</ExternalLink>.</li>
                    <li>Miniconférences données au Salon du vélo de Montréal en 2018, avec Vélo Québec.</li>
                    <li>Trois conférences données à <ExternalLink href="https://www.velo.qc.ca/categorie-evenement/conference-velo-maison-des-cyclistes/">la Maison des cyclistes</ExternalLink> entre 2017 et 2019.</li>
                </ul>
            </div>
            <div>
                <h3>Vous avez besoin d'un site web comme celui-ci?</h3>
                <p>N'hésitez pas à <Link to="/contact">me contacter</Link> pour voir si je peux vous aider à réaliser votre projet. J'ai bâti ce site web par moi-même en apprenant des langues de programmation, d'abord en HTML/CSS/JavaScript, puis en React.js. Il me fera plaisir de trouver <ExternalLink href="https://www.linkedin.com/in/nicolazoghbi/">un autre défi</ExternalLink> à surmonter!</p>
            </div>
        </>
    )
}

const PhotoAuteur = styled.figure`
    margin: 1em auto;
    max-width: 100%;
    width: 200px;
    img {
        border-radius: 5px;
        width: 100%;
    }
`

export default APropos;