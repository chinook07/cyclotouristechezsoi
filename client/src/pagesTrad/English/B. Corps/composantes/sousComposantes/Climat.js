import styled from "styled-components";
import { useState, useContext } from "react";

import { CycloContext } from "../../../../../CycloContext";
import climat from "../donnees/climat.json"

const Climat = () => {

    const { mesuresMetriques } = useContext(CycloContext);
    const [villeChoisie, setVilleChoisie] = useState(false);

    const choisirVille = (choix) => {
        if (villeChoisie === choix) {
            setVilleChoisie(false)
        } else {
            setVilleChoisie(choix)
        }
    }

    const caracteres = ["<", ">"]

    const mois = ["May", "June", "July", "Aug.", "Sept."];

    return (
        <Wrapper>
            <Controles>
                {
                    climat.map((item, index) => {
                        return (
                            <BoutonVille
                                choix={villeChoisie}
                                item={item}
                                key={index}
                                onClick={() => choisirVille(item)}
                            >{item.ville}</BoutonVille>
                        )
                    })
                }
            </Controles>
            {
                villeChoisie !== false &&
                <table>
                        <thead>
                            <tr>
                                <td></td>
                                <th>
                                    <div>
                                        { mesuresMetriques ? <p>Min T°C</p> : <p>Min F°C</p> }
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        { mesuresMetriques ? <p>Max T°C</p> : <p>Max F°C</p> }
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Nights {caracteres[0]} { mesuresMetriques ? <span>2°C</span> : <span>36°F</span> }</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Days {caracteres[1]} { mesuresMetriques ? <span>30°C</span> : <span>86°F</span> }</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        { mesuresMetriques ? <p>Rain (mm)</p> : <p>Rain (in)</p> }
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Rainy days</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mois.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item}</td>
                                            <td>{mesuresMetriques ? villeChoisie.climat.tempMin[index] : (villeChoisie.climat.tempMin[index] * (9/5) + 32).toFixed(0)}</td>
                                            <td>{mesuresMetriques ? villeChoisie.climat.tempMax[index] : (villeChoisie.climat.tempMax[index] * (9/5) + 32).toFixed(0)}</td>
                                            <td>{villeChoisie.climat.nuitsFroides[index]}</td>
                                            <td>{villeChoisie.climat.joursChauds[index]}</td>
                                            <td>{mesuresMetriques ? villeChoisie.climat.pluie[index] : (villeChoisie.climat.pluie[index] / 25.4).toFixed(1)}</td>
                                            <td>{villeChoisie.climat.joursPluvieux[index]}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c5);
    border-radius: 5px;
    max-width: 600px;
    padding: 0 20px 20px;
    table {
        border-collapse: collapse;
        color: var(--c11);
        thead th {
            height: 120px;
            padding: 0 4px 4px;
            position: relative;
            white-space: nowrap;
            div {
                bottom: -11px;
                right: -11px;
                margin: 0;
                position: absolute;
                text-align: left;
                transform: translate(calc(100% - 0.5px), 1px) rotate(315deg);
                transform-origin: 0 calc(100% - 1px);
                p {
                    border-bottom: 1px solid gray;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                }
            }
        }
        tbody td {
            border-right: 1px solid grey;
            min-width: 50px;
            padding: 4px;
            text-align: right;
        }
    }
    @media screen and (max-width: 550px) {
        padding: 0 10px 10px;
        table thead th div {
            transform: translate(calc(100% - 0.5px), -3px) rotate(300deg);
            p {
                font-size: small;
                min-width: 40px;
            }
        }
        table tr td {
            font-size: small;
            min-width: 40px;
        }
    }
`

const Controles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const BoutonVille = styled.button`
    background-color: ${props => props.choix === props.item ? "var(--c5)" : "var(--c11)"};
    color: ${props => props.choix === props.item && "var(--c11)"};
    cursor: pointer;
    outline: none;
    padding: 14px;
    transition: 0.3s;
    &:hover {
        background-color: var(--c6);
        color: white;
    }
    @media screen and (max-width: 675px) {
        padding: 8px;
    }
`

export default Climat;