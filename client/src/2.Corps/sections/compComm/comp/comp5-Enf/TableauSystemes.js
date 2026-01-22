import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import systemesTransport from "../../donnees/systemesTransport.json";

const TableauSystemes = () => {
    console.log(systemesTransport);
    // systemesTransport.map((systeme, index) => {
    //     console.log(systeme.nom);
    //     return (
    //         <p key={index}>{systeme.nom}</p>
    //     )
    // })
    return (
        <Wrapper>
            <caption>Les différents systèmes de transport</caption>
            <thead>
                <tr>
                    <th>Système</th>
                    <th>Âge</th>
                    <th>Prix</th>
                    <th>Avantages</th>
                    <th>Inconvénients</th>
                </tr>
            </thead>
            <tbody>
                {
                    systemesTransport.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.age}</td>
                            {item.prix.length ? <td>{item.prix[0]} à {item.prix[1]} $</td> : <td>{item.prix} $</td>}
                            <td>
                                <ul>
                                    {item.avantages.map((itemA, indexA) => <li key={indexA}>{itemA}</li>)}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {item.inconvenients.map((itemI, indexI) => <li key={indexI}>{itemI}</li>)}
                                </ul>
                            </td>
                        </tr>
                    })
                }
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
        ul {
            margin: 0;
        }
    }
`

export default TableauSystemes;