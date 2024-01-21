import styled from "styled-components";

import DeuxFiguresPetit from "../../../../../../CompReutilisables/DeuxFiguresPetit";
import Diff from "../Diff";
import diff1 from "../../../images/difficulte2.png";
import diff2 from "../../../images/difficulte1.png";

const Boite5 = () => {

    const photo3 = {
        "src": diff1,
        "alt": "dénivelé d'un trajet sur Ride With GPS",
        "cap": "Un calcul d'itinéraire sur Ride with GPS."
    }

    const photo4 = {
        "src": diff2,
        "alt": "dénivelé d'un trajet sur Google Maps",
        "cap": "Un calcul d'itinéraire sur Google Maps."
    }
    
    return (
        <Wrapper>
            <p>Ce qui empêche les gens de gouter au cyclotourisme, c'est souvent l'effort physique requis. Or, on peut choisir un parcours selon sa difficulté, et rouler une distance qu'on trouve acceptable. La vallée du fleuve Saint-Laurent, celle de l'Outaouais, ainsi que les nombreuses pistes cyclables aménagées sur d'anciennes emprises ferroviaires, présentent des espaces conviviaux pour les débutants. Le reste du Québec offre des collines pour ceux et celles qui le souhaitent.</p>
            <p>Comment choisir une destination qui respecte vos capacités physiques? Dans votre planificateur d'itinéraire préféré, une fois que vous aurez choisi un trajet, vous aurez un dénivelé positif (ascension) et négatif (descente).</p>
            <DeuxFiguresPetit photo1={photo3} photo2={photo4} />
            <p>À noter que le dénivelé pour un même trajet (voir images ci-dessus) peut différer selon le calculateur utilisé, puisque la source des données topographiques n'est pas la même.</p>
            <p>Plutôt qu'avec des RPM, une façon scientifique et ludique de connaitre la difficulté d'un trajet consiste à diviser le nombre de mètres montés par le nombre de kilomètres franchis. Cela nous donne aussi le nombre de <Gras>jurons par minute</Gras> qu'un cycliste risque de grommeler.</p>
            <p>Ce calcul peut être fait pour estimer la difficulté d'une journée ou bien d'un voyage au complet. Il est déconseillé pour les courtes distances.</p>
            <Diff />
            <div>*La difficulté dépend aussi d'autres facteurs, tels la surface de roulement, la distribution du dénivelé sur un trajet (une énorme côte vs des faux plats toute la journée), le nombre de km effectué par jour, la vitesse et la direction du vent, ainsi que la motivation.</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

const Gras = styled.span`
    font-weight: bold;
`

export default Boite5;