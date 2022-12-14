import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import trajets from "./donnees/trajets.json";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { CycloContext } from "../../../CycloContext";

const Synthese = () => {

    const { setTrajetRedig } = useContext(CycloContext);

    const ouvrirTrajet = (trajet) => setTrajetRedig(trajet);

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Trajet</th>
                        <th>De</th>
                        <th>À</th>
                        <th>Km</th>
                        <th>% en piste<br />cyclable</th>
                        <th>Évaluation<br />perso*</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trajets.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td onClick={() => ouvrirTrajet(item)}><Link to="/destinations/trajets">{item.trajet}</Link></td>
                                    <td>{item.deA[0]}</td>
                                    <td>{item.deA[1]}</td>
                                    <td>{item.distance}</td>
                                    <td>{item.proportion}</td>
                                    {
                                        item.appreciation
                                            ? <td>{item.appreciation} <FontAwesomeIcon icon={faStar} /></td>
                                            : <td></td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <p>* L'appréciation personnelle est basée sur la partie du trajet ayant été parcourue par l'auteur.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    table {
        border-collapse: collapse;
        thead {
            background-color: var(--c5);
            th {
                color: var(--c11);
                padding: 10px;
                &:first-child {
                    border-radius: 10px 0 0;
                }
                &:last-child {
                    border-radius: 0 10px 0 0;
                }
            }
        }
        tbody {
            tr {
                &:nth-child(odd) {
                    background-color: var(--c1);
                }
                &:nth-child(even) {
                    background-color: var(--c2);
                }
                &:hover {
                    background-color: var(--c0);
                }
                td {
                    padding: 10px;
                    &:first-child {
                        cursor: pointer;
                    }
                    &:nth-child(n+4) {
                        text-align: center;
                    }
                }
            }
        }
        @media screen and (max-width: 650px) {
            width: 100%;
            thead {
                display: none;
            }
            tbody {
                width: 100%;
                tr td {
                    display: flex;
                    padding: 5px;
                    &::before {
                        font-weight: bold;
                        width: 50%;
                        text-align: left;
                    }
                    &:first-child::before {
                        content: "Trajet";
                    }
                    &:nth-child(2)::before {
                        content: "De";
                    }
                    &:nth-child(3)::before {
                        content: "À";
                    }
                    &:nth-child(4)::before {
                        content: "Km";
                    }
                    &:nth-child(5)::before {
                        content: "% en piste cyclable";
                    }
                    &:last-child::before {
                        content: "Appréciation personnelle";
                    }
                }
            }
        }
    }
    
`

export default Synthese;