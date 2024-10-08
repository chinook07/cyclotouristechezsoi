import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import animaux from "../donnees/animaux.json";

const Animaux = () => {

    return (
        <Wrapper>
            <thead>
                <tr>
                    <th>Tier</th>
                    <th>Risikogebiet</th>
                    <th>Gefahr</th>
                    <th>Prävention und Behandlung</th>
                </tr>
            </thead>
            <tbody>
            {
                animaux.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.animal}</td>
                            <td>{item.region}</td>
                            <td>
                                <ExternalLink href={item.url} target="blank">{item.danger}</ExternalLink>
                            </td>
                            <td>
                                {
                                    item.conseils.map((item, index) => {
                                        return (
                                            <p key={index}>{item}</p>
                                        )
                                    })
                                }
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
    border-collapse: collapse;
    th, td {
        border: 1px solid #ccc;
        font-size: smaller;
        padding: 8px;
    }
    td {
        &:first-child {
            font-weight: bold;
        }
        p {
            line-height: normal;
            margin: 0;
        }
    }
`

export default Animaux;