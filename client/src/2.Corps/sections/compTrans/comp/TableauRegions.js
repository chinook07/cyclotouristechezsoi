import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import tableauRegionsTr from "../donnees/tableauRegionsTr.json";
import { faArrowsAltH, faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const TableauRegions = () => {
    return (
        <Wrapper>
            <thead>
                <tr>
                    <th>Région</th>
                    <th>Transporteur</th>
                    <th>Desserte</th>
                    <th>Dates d'opération</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableauRegionsTr.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.region}</td>
                                <td><ExternalLink href={item.lien}>{item.transporteur}</ExternalLink></td>
                                {
                                    item.desserte.length === 1
                                        ? <td>
                                            <FontAwesomeIcon icon={faExpandArrowsAlt} />
                                            <span>{item.desserte[0]}</span>
                                        </td>
                                        : <td>
                                            <span>{item.desserte[0]}</span>
                                            <FontAwesomeIcon icon={faArrowsAltH} />
                                            <span>{item.desserte[1]}</span>
                                        </td>
                                }
                                <td>{item.dates}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Wrapper>
    )
}

const Wrapper = styled.table`
    border: 2px solid var(--c5);
    border-radius: 5px;
    thead {
        background-color: var(--c3);
        border-radius: 5px;
    }
    tbody {
        tr:hover {
            background-color: var(--c1);
        }
    }
    th, td {
        padding: 12px;
    }
`

export default TableauRegions;