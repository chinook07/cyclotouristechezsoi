import styled from "styled-components";

import DeuxFigures from "../../../CompReutilisables/DeuxFigures";
import veloAutocar from "./images/velo-autocar.jpg"
import veloTrain from "./images/velo-train-exo.jpg"

const Intro = () => {

    const photo1 = {
        "src": veloAutocar,
        "alt": "Un vélo dans un sac géant et les sacoches aux alentours.",
        "cap": "Parfois, un sac géant fait l'affaire pour un voyage en autocar!"
    }

    const photo2 = {
        "src": veloTrain,
        "alt": "L'auteur qui attache son vélo à sa place à bord d'un train exo.",
        "cap": "L'accès aux trains de banlieue se fait normalement par l'entremise de quelques marches. Montez vos sacoches lourdes d'abord, puis votre vélo."
    }

    return (
        <Wrapper>
            <p>Que ce soit pour partir en cyclotourisme dans une région autre que la sienne ou simplement pour effectuer un trajet linéaire – c'est-à-dire pas en boucle, il peut s'avérer nécessaire de mettre son vélo sur un train ou un autocar. Mais comment s'éviter les ennuis, et surtout, comment naviguer à travers la panoplie de règlements qui diffèrent d'un transporteur à l'autre?</p>
            <DeuxFigures photo1={photo1} photo2={photo2} />
            <h2>Quelques conseils</h2>
            <p>Que ça soit pour prendre un autobus, un train ou même l'avion, voici trois conseils pour bien mener votre voyage à terme.</p>
            <ul>
                <li>Renseignez-vous sur les modalités du transport de votre vélo.</li>
                <li>Arrivez à l'avance pour éviter de devoir vous dépêcher, surtout si vous devez démonter votre vélo.</li>
                <li>Munissez-vous d'un plan B, au cas où le transport du vélo s'avère impossible.</li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    div {
        display: flex;
        figure {
            width: 50%;
        }
    }
`

export default Intro;