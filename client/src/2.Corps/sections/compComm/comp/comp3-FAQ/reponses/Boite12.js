import styled from "styled-components";
import { Link } from "react-router-dom";

import TableauRoutes from "../TableauRoutes";

const Boite12 = () => {
    return (
        <Wrapper>
            <p>Le code de la sécurité routière permet aux gens de rouler à vélo sur presque toutes les routes qui ne sont pas à accès limité. Ceci veut dire que la circulation sur les autoroutes est interdite.</p>
            <TableauRoutes />
            <p>Il y a bien sûr des exceptions à la règle. Certains tronçons d'autoroute ne sont pas à accès limité, par exemple l'autoroute 19 (av. Papineau) à Montréal ou la 955 près de Victoriaville. D'autres routes dites nationales et régionales ont la physique d'une autoroute, et sont donc proscrites aux cyclistes. On peut penser à la route 134 à Longueuil, près du pont Jacques-Cartier, ou encore la 138 à Montréal, à la sortie du pont Mercier.</p>
            <p>D'autres exceptions incluent certains ponts et tunnels, ce qui vient compliquer la traversée de la voie maritime du St-Laurent à plusieurs endroits. La signalisation est normalement claire lorsqu'il y a une interdiction aux piétons et aux cyclistes d'emprunter une chaussée.</p>
            <p>Bien sûr, il y a une différence entre légal et convivial. À la rubrique <Link to="/commencement/preparation">Préparer son itinéraire</Link>, vous trouverez des renseignements pertinents par rapport au sujet.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 20px 20px;
`

export default Boite12;