import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const APropos = () => {
    return (
        <Wrapper>
            <h2>Qui est l'auteur de ce site web?</h2>
            <div>
                <div>
                    <p>En 2014, après un été de plusieurs sorties en canot-camping, j'ai vécu ma première aventure en cyclotourisme, d'une durée de huit jours à travers l'est de l'Ontario. Depuis ce temps, il ne se passe pas un été où j'entreprends au moins deux voyages à vélo. De l'ile Salaberry jusqu'aux Iles-de-la-Madeleine, de Louvicourt à La Patrie, j'ai parcouru des milliers de kilomètres à deux roues. Mon métier de guide touristique et celui de suppléant dans les écoles secondaires m’accordaient la flexibilité d'explorer le Québec à vélo.</p>
                    <p>Durant l'été 2018, j'ai créé <ExternalLink href="https://touristechezsoi.ca/">un blogue</ExternalLink> relatant des sujets divers, tel le tourisme, la science, mais surtout le vélo. Lors du premier été de la COVID-19, j'ai créé un site web servant comme référence dans le domaine du cyclotourisme. De plus, j'avais décidé d'apprendre les langages HTML, CSS et JavaScript, non seulement pour réaliser ce projet, mais aussi en vue d'un retour potentiel aux études qui s'est enfin concrétisé en mars 2022.</p>
                    <p>Je vous laisse découvrir mon site web pour en apprendre davantage. Au plaisir de se croiser sur les routes du Québec!</p>
                    <p>Nicola Z.</p>
                </div>
                <figure>
                    <img></img>
                    <figcaption>L'auteur de ce site web sur le Chemin du Roy en 2016.</figcaption>
                </figure>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default APropos;