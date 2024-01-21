import styled from "styled-components";

import typesRoutes from "../../donnees/typesRoutes.json";
import * as panneaux from "../../images/indexRoutes";

const TableauRoutes = () => {
    return (
        <Wrapper>
            <caption>Les catégories de routes au Québec</caption>
            <tbody>
                {
                    typesRoutes.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img alt="" src={panneaux[item.panneau1]} />
                                </td>
                                <th>{item.num}</th>
                                <td>{item.nom}</td>
                                <td>
                                    <img alt={item.panneau2} src={panneaux[item.panneau2]} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Wrapper>
    )
}

const Wrapper = styled.table`
    border: 2px solid var(--c10);
    border-collapse: collapse;
    caption {
        padding: 10px;
    }
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