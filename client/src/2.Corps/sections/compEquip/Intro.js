import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import Sacoches from "./comp/Sacoches";
import equilibre from "./images/equilibre.png"

const Intro = () => {
    return (
        <Wrapper>
            <p>Pour certains, faire ses valises s'agit de la partie la plus fastidieuse avant un voyage. Pour d'autres, cette étape est aussi exaltante que l'aventure-même. Par contre, avant de remplir ses sacoches, il est mieux d'avoir une liste, sommaire ou bien détaillée, pour faciliter le processus.</p>
            <p>Questions de se poser avant de rassembler le matériel :</p>
            <ul>
                <li>Quelle est le volume des mes sacoches, et combien est-ce que j'en ai?</li>
                <li>Est-ce que je dors sous un toit ou dans ma tente?</li>
                <li>Est-ce que je compte manger au restaurant le plus souvent ou cuisiner mes propres repas?</li>
                <li>À quoi devrais-je m'attendre en terme de conditions climatiques?</li>
                <li>Comment vais-je me divertir sur la route et en soirée?</li>
                <li>Est-ce que je traverse une frontière internationale?</li>
                <li>Le confort est-il important pour moi et jusqu'à quel point suis-je prêt à en sacrifier pour enlever du poids des mes sacoches?</li>
            </ul>
            <h2>Le confort ou la vitesse?</h2>
            <p>Le dilemne qui reviendra souvent est celui du choix entre la confort et la vitesse.</p>
            <Balance>
                <img src={equilibre} alt="une balance avec un sofa d'un bord et un indicateur de vitesse de l'autre" />
                <figcaption>Confort ou vitesse?</figcaption>
            </Balance>
            <p>La réalité est par contre différente. Selon <ExternalLink href="https://ridefar.info/bike/cycling-speed/weight/">une étude effectué par un Anglais vivant en Suisse</ExternalLink>, l'ajout d'un kilogramme au poids transporté ne réduit la vitesse du cycliste que minimalement sur du plat. <ExternalLink href="https://www.cyclingabout.com/how-much-does-bike-and-gear-weight-slow-you-down/">Cette étude effectué par un Australien</ExternalLink> vient confirmer la conclusion précédente. Voyager léger peut s'avérer avantageux lorsqu'on roule avec beaucoup de dénivelé, et en portant les sacoches dans les bras, par exemple pour prendre un train ou un autobus, ou pour monter les escaliers jusqu'à sa chambre d'auberge.</p>
            <h2>La disposition des sacoches</h2>
            <p>Il existe plusieurs possibilités de configuration pour les sacoches, de la même façon qu'on peut s'en procurer de différents types.</p>
            <Legende>
                <div>Sacoche latérale (avant ou arrière)</div>
                <div>Sac de guidon</div>
                <div>Sac de porte-bagages</div>
                <div>Tente dans un sac bien attaché au porte-bagages</div>
            </Legende>
            <Sacoches />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Balance = styled.figure`
    margin: 0 auto;
    width: 140px;
    img {
        width: 100%;
    }
`

const Legende = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
        width: 25%;
    }
`

export default Intro;