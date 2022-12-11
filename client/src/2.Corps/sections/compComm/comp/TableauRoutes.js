import styled from "styled-components";

import veloPermis from "../images/velo-permis.png";
import veloInterdit from "../images/velo-interdit.png";
import autoroute from "../images/autoroute.png";
import routePrimaire from "../images/route-primaire.png";
import routeSecondaire from "../images/route-secondaire.png";
import autorouteCollectrice from "../images/autoroute-collectrice.png";

const TableauRoutes = () => {
    return (
        <Wrapper>
            <tbody>
                <tr>
                    <td><img src={autoroute} alt="" /></td>
                    <th>1 à 99</th>
                    <td>Autoroutes</td>
                    <td><img src={veloInterdit} alt="vélos interdits" /></td>
                </tr>
                <tr>
                    <td><img src={routePrimaire} alt="" /></td>
                    <th>101 à 199</th>
                    <td>Routes nationales</td>
                    <td><img src={veloPermis} alt="vélos autorisés" /></td>
                </tr>
                <tr>
                    <td><img src={routeSecondaire} alt="" /></td>
                    <th>201 à 399</th>
                    <td>Routes régionales</td>
                    <td><img src={veloPermis} alt="vélos autorisés" /></td>
                </tr>
                <tr>
                    <td><img src={autorouteCollectrice} alt="" /></td>
                    <th>401 à 999</th>
                    <td>Autoroutes</td>
                    <td><img src={veloInterdit} alt="vélos interdits" /></td>
                </tr>
            </tbody>
        </Wrapper>
    )
}

const Wrapper = styled.table`
    border: 2px solid var(--c10);
    border-collapse: collapse;
    tr:not(:last-of-type) {
        border-bottom: 1px solid var(--c3);
    }
    th, td {
        padding: 5px;
    }
    img {
        width: 50px;
    }
    @media screen and (max-width: 380px) {
        tr td:first-child {
            display: none;
        }
    }
`

export default TableauRoutes;