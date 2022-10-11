import styled from "styled-components";

import DeuxFiguresPetit from "../../../CompReutilisables/DeuxFiguresPetit";
import debut1 from "./images/pont-JC.jpg";
import debut2 from "./images/fraises-fleuve.jpg";

const Intro = () => {

    const photo1 = {
        "src": debut1,
        "alt": "vélo sur une piste cyclable sur un pont surplombant la ville de Montréal",
        "cap": "Un voyage à vélo peut commencer à la porte de chez soi."
    }

    const photo2 = {
        "src": debut2,
        "alt": "panier de fraises dans une main, fleuve au fond",
        "cap": "Tôt ou tard, on se retrouve à déguster des fraises avec une vue magnifique."
    }

    return (
        <Wrapper>
            <p>Lorsque l'idée vous vient à l'esprit d'apprivoiser le cyclotourisme, il est facile de se perdre à travers les conseils que l'on reçoit. Quoiqu'il y aura beaucoup de décisions à prendre et de préparations à effectuer avant d'enfourcher son vélo pour la destination choisie, il y a deux préalables à tout voyage : vouloir voyager, et être prêt à le faire à vélo.</p>
            <DeuxFiguresPetit photo1={photo1} photo2={photo2} />
            <h2>Faire le saut</h2>
            <p>Dans les prochaines pages, vous acquérissez des connaissances liée à la pratique du cyclotourisme dans les champs suivants :</p>
            <ul>
                <li>le sorte de voyage</li>
                <li>le choix d'un itinéraire</li>
                <li>le matériel</li>
                <li>le camping</li>
                <li>les conditions propices au cyclotourisme</li>
                <li>les distances</li>
                <li>les dangers</li>
                <li>et bien plus!</li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default Intro;