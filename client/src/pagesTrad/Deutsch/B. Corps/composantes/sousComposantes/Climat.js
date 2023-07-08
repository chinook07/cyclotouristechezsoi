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
                                        <p>Min T°C</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Max T°C</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Nächte {caracteres[0]} 2°C</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Tage {caracteres[1]} 30°C</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Regen (L/m<sup>2</sup>)</p>
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <p>Regentage</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mai</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMin[0] : (villeChoisie.climat.tempMin[0] * (9/5) + 32).toFixed(0)}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMax[0] : (villeChoisie.climat.tempMax[0] * (9/5) + 32).toFixed(0)}</td>
                                <td>{villeChoisie.climat.nuitsFroides[0]}</td>
                                <td>{villeChoisie.climat.joursChauds[0]}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.pluie[0] : (villeChoisie.climat.pluie[0] / 25.4).toFixed(1)}</td>
                                <td>{villeChoisie.climat.joursPluvieux[0]}</td>
                            </tr>
                            <tr>
                                <td>Juni</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMin[1] : (villeChoisie.climat.tempMin[1] * (9/5) + 32).toFixed(0)}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMax[1] : (villeChoisie.climat.tempMax[1] * (9/5) + 32).toFixed(0)}</td>
                                <td>{villeChoisie.climat.nuitsFroides[1]}</td>
                                <td>{villeChoisie.climat.joursChauds[1]}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.pluie[1] : (villeChoisie.climat.pluie[1] / 25.4).toFixed(1)}</td>
                                <td>{villeChoisie.climat.joursPluvieux[1]}</td>
                            </tr>
                            <tr>
                                <td>Juli</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMin[2] : (villeChoisie.climat.tempMin[2] * (9/5) + 32).toFixed(0)}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMax[2] : (villeChoisie.climat.tempMax[2] * (9/5) + 32).toFixed(0)}</td>
                                <td>{villeChoisie.climat.nuitsFroides[2]}</td>
                                <td>{villeChoisie.climat.joursChauds[2]}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.pluie[2] : (villeChoisie.climat.pluie[2] / 25.4).toFixed(1)}</td>
                                <td>{villeChoisie.climat.joursPluvieux[2]}</td>
                            </tr>
                            <tr>
                                <td>Aug.</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMin[3] : (villeChoisie.climat.tempMin[3] * (9/5) + 32).toFixed(0)}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMax[3] : (villeChoisie.climat.tempMax[3] * (9/5) + 32).toFixed(0)}</td>
                                <td>{villeChoisie.climat.nuitsFroides[3]}</td>
                                <td>{villeChoisie.climat.joursChauds[3]}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.pluie[3] : (villeChoisie.climat.pluie[3] / 25.4).toFixed(1)}</td>
                                <td>{villeChoisie.climat.joursPluvieux[3]}</td>
                            </tr>
                            <tr>
                                <td>Sept.</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMin[4] : (villeChoisie.climat.tempMin[4] * (9/5) + 32).toFixed(0)}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.tempMax[4] : (villeChoisie.climat.tempMax[4] * (9/5) + 32).toFixed(0)}</td>
                                <td>{villeChoisie.climat.nuitsFroides[4]}</td>
                                <td>{villeChoisie.climat.joursChauds[4]}</td>
                                <td>{mesuresMetriques ? villeChoisie.climat.pluie[4] : (villeChoisie.climat.pluie[4] / 25.4).toFixed(1)}</td>
                                <td>{villeChoisie.climat.joursPluvieux[4]}</td>
                            </tr>
                        </tbody>
                </table>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--c5);
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