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
        "cap": "L'accès aux trains de banlieue se fait à la plupart des gares par l'entremise de quelques marches. Montez vos sacoches lourdes d'abord, ensuite votre vélo."
    }

    return (
        <Wrapper>
            <p>Que ce soit pour partir en cyclotourisme dans une région autre que la sienne ou simplement pour effectuer un trajet linéaire – c'est-à-dire pas en boucle, il peut s'avérer nécessaire de mettre son vélo sur un train ou un autocar. Mais comment s'éviter les ennuis, et surtout, comment naviguer à travers la panoplie de règlements qui diffèrent d'un transporteur à l'autre?</p>
            <DeuxFigures photo1={photo1} photo2={photo2} />
            {/* <div>
                <figure>
                    <img src="" alt="Un vélo dans un sac géant et les sacoches aux alentours."></img>
                    <figcaption>Parfois, un sac géant fait l'affaire pour un voyage en autocar!</figcaption>
                </figure>
                <figure>
                    <img src="" alt="L'auteur qui attache son vélo à sa place à bord d'un train exo."></img>
                    <figcaption>L'accès aux trains de banlieue se fait à la plupart des gares par l'entremise de quelques marches. Montez vos sacoches lourdes d'abord, ensuite votre vélo.</figcaption>
                </figure>
            </div> */}
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