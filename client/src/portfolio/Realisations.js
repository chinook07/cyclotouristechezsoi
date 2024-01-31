import styled from "styled-components";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import * as ImagesReal from "./images/index.js";

const Realisations = () => {

    const [montrerItems, setMontrerItems] = useState(0);

    console.log(ImagesReal.RandoAm);

    return (
        <Wrapper>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            <ul>
                <li>
                    <img alt="livre" src={ImagesReal.RandoEu} />
                    <h2>Randonnées à vélo en Europe</h2>
                    <p>Rédaction de quatre textes dans un guide de voyage</p>
                    <time dateTime="2024-03-06">À paraitre en mars 2024</time>
                    <ExternalLink href="https://www.guidesulysse.com/fr/produit.aspx?ISBN=9782765860860&aftag=f40bddf8222fe0628b5225131aa46c13">En lire davantage</ExternalLink>
                </li>
                <li>
                    <img alt="livre" src={ImagesReal.RandoAm} />
                    <h2>Randonnées à vélo en Amérique du Nord</h2>
                    <p>Rédaction de deux textes dans un guide de voyage</p>
                    <time dateTime="2023-02-20">Février 2023</time>
                    <ExternalLink href="https://www.guidesulysse.com/fr/produit.aspx?ISBN=9782765860853&aftag=f40bddf8222fe0628b5225131aa46c13">En lire davantage</ExternalLink>
                </li>
                <li>
                    <img alt="livre" src={ImagesReal.RandoAm} />
                    <h2>Séjour à vélo pour admirer les couleurs de l'automne</h2>
                    <p>Rédaction d'un billet de blogue pour Tourisme Montérégie suite à un séjour de 3 jours dans le nord-est de la région</p>
                    <time dateTime="2023-02-20">Septembre 2020</time>
                    <ExternalLink href="https://www.guidesulysse.com/fr/produit.aspx?ISBN=9782765860853&aftag=f40bddf8222fe0628b5225131aa46c13">En lire davantage</ExternalLink>
                </li>
                <li>
                    <img alt="livre" src={ImagesReal.RandoAm} />
                    <h2>Une virée à vélo juste parfaite dans le Suroit</h2>
                    <p>Rédaction d'un billet de blogue pour Tourisme Montérégie suite à un séjour de 3 jours dans le Suroit</p>
                    <time dateTime="2023-02-20">Aout 2020</time>
                    <ExternalLink href="https://www.guidesulysse.com/fr/produit.aspx?ISBN=9782765860853&aftag=f40bddf8222fe0628b5225131aa46c13">En lire davantage</ExternalLink>
                </li>
                <li>
                    <img alt="livre" src={ImagesReal.RandoAm} />
                    <h2>Cyclotouriste chez soi</h2>
                    <p>Création d'un site web servant comme référence dans le domaine du cyclotourisme</p>
                    <time dateTime="2020-07">Juillet 2020</time>
                    <ExternalLink href="https://cyclotouristechezsoi.ca/">En lire davantage</ExternalLink>
                </li>
                <li>
                    <img alt="livre" src={ImagesReal.RandoAm} />
                    <h2>Touriste chez soi</h2>
                    <p>Rédaction d'un blogue sur de sujets divers, tel le cyclotourisme, la mobilité urbaine et autres.</p>
                    <time dateTime="2018-07-03">Juillet 2018</time>
                    <ExternalLink href="https://touristechezsoi.ca/">En lire davantage</ExternalLink>
                </li>
            </ul>
            <FontAwesomeIcon icon={faArrowCircleRight} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    ul {
        list-style: none;
        padding: 0;
        li {
            background-color: var(--c2);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            padding: 25px;
            width: 250px;
            img {
                width: 100%;
            }
        }
    }
`

export default Realisations;