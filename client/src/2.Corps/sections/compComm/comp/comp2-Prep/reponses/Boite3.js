import styled from "styled-components";

import DeuxFiguresPetit from "../../../../../../CompReutilisables/DeuxFiguresPetit";
import ListeLiens from "../ListeLiens";
import ventMontreal from "../../../images/vent-montreal.png";
import ventRimouski from "../../../images/vent-rimouski.png";

const Boite3 = () => {

    const photo1 = {
        "src": ventMontreal,
        "alt": "graphique montrant les vents dominants de l'ouest à Montréal durant l'été",
        "cap": "Les vents à Montréal.",
        "lien": "Weather Spark",
        "href": "https://fr.weatherspark.com/s/25077/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Montr%C3%A9al-Canada#Figures-WindDirection"
    }

    const photo2 = {
        "src": ventRimouski,
        "alt": "graphique montrant les vents dominants de l'ouest et du sud à Rimouski durant l'été",
        "cap": "Les vents à Rimouski.",
        "lien": "Weather Spark",
        "href": "https://fr.weatherspark.com/s/27467/1/M%C3%A9t%C3%A9o-moyenne-en-%C3%A9t%C3%A9-%C3%A0-Rimouski-Canada#Figures-WindDirection"
    }
    
    return (
        <Wrapper>
            <p>Si le vent peut souffler de n'importe quelle direction, il suit plus ou moins une règle de base : être le plus chiant possible envers les cyclistes circulant vers l'ouest.</p>
            <DeuxFiguresPetit photo1={photo1} photo2={photo2} />
            <p>Tel qu'aperçu sur les tableaux ci-dessus, les vents d'ouest dans le sud du Québec dominent principalement en début juillet, tandis que dans le Bas-Saint-Laurent, les vents du sud sont presque aussi fréquents à partir de ce même moment. À noter qu'un vent de l'est durant l'été s'accompagne souvent de pluie et de températures froides.</p>
            <p>Les vents dominants au Québec :</p>
            <ListeLiens />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
    font-weight: bold;
`

const CommeUnLien = styled.span`
    color: #0000cc;
    cursor: pointer;
    text-decoration: underline;
`

export default Boite3;