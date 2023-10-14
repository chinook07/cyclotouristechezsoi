import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSkullCrossbones, faCheck } from "@fortawesome/free-solid-svg-icons";

const R2 = ({ images }) => {
    
    return (
        <Rubrique>
            <h2>La source d'hydratation</h2>
            <div>
                <p>Un de vos plus grands besoins en cyclotourisme sera de bien s'hydrater. La distance entre les municipalités au Québec varie normalement entre 10 et 25 km, et vous ne trouverez que rarement de l'eau potable entre les noyaux villageois. Ceci étant dit, contrairement à certains pays européens, une fois dans un endroit habité, on a rarement à chercher longtemps avant de pouvoir remplir ses gourdes.</p>
                <img src={images[6]} alt="2 bouteilles d'eau, dont une pliable" />
                <p>En plus de la gourde d'eau, une bouteille pliable se range facilement si vous avez une courte distance avant le prochain village et que vous êtes certain à 100 % qu'une simple bouteille sera suffisante avant d'y arriver.</p>
                <img src={images[7]} alt="filtre et comprimés de purification" />
                <p>Si vous traversez de grands espaces sauvages, il vous faudra rendre potable l'eau que vous trouverez. Il existe plusieurs façons de faire cela.</p>
                <div>
                    <details>
                        <summary>Scénario A : l'eau provient d'une source propre mais non sécuritaire à la consommation. C'est parfois le cas en région rurale <Gras>aux haltes routières</Gras>.</summary>
                        <p>
                            <span>Danger potentiel </span>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>: bactéries et protozoaires.</span>
                        </p>
                        <ul>
                            <li>
                                <span>Filtre</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Ébullition de l'eau</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Comprimés de purification</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Filtre-purificateur</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                        </ul>
                    </details>
                    <details>
                        <summary>Scénario B : l'eau provient <Gras>d'une rivière ou d'un lac</Gras> et contient des particules.</summary>
                        <p>
                            <span>Danger potentiel </span>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>: particules, bactéries et protozoaires.</span>
                        </p>
                        <ul>
                            <li>
                                <span>Filtre</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Filtre-purificateur</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                        </ul>
                    </details>
                    <details>
                        <summary>Scénario C : l'eau est limpide, mais provient d'une source non sure <Gras>dans un pays où la sanitation n'est pas aux normes</Gras> de l'Occident.</summary>
                        <p>
                            <span>Danger potentiel </span>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>: bactéries, protozoaires et virus.</span>
                        </p>
                        <ul>
                            <li>
                                <span>Ébullition de l'eau</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Comprimés de purification</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                                <span>Filtre-purificateur</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                        </ul>
                    </details>
                    <details>
                        <summary>Scénario D : l'eau provient d'une source non fiable dans un pays en dehors de l'Occident, ou <Gras>dans une région fortement polluée</Gras>.</summary>
                        <p>
                            <span>Danger potentiel </span>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>: la totale (particules, bactéries, protozoaires et virus)!</span>
                        </p>
                        <ul>
                            <li>
                                <span>Filtre-purificateur</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                            <li>
                                <span>Filtre + ébullion de l'eau</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                            <li>
                                <span>Filtre + comprimés de purification</span>
                                <FontAwesomeIcon icon={faCheck} />
                            </li> 
                        </ul>
                    </details>
                </div>
            </div>
        </Rubrique>
    )
}

const Rubrique = styled.div`
    h2 {
        text-align: center;
    }
    > div {
        columns: 300px 3;
        margin-bottom: 15px;
        img {
            width: 100%;
        }
        details {
            background-color: var(--c1);
            border-left: 4px solid var(--c5);
            border-radius: 0 10px 10px 0;
            margin: 5px 0;
            padding: 10px;
            summary {
                cursor: pointer;
            }
        }
    }
`

const Gras = styled.span`
    font-weight: bold;
`

export default R2;