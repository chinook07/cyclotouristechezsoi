import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableauSystemes = () => {
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
                <tr>
                    <td>Siège avant</td>
                    <td><p>De 9 mois à 3 ans</p></td>
                    <td><p>100 à 300 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de voir devant</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Nuit à la visibilité des parents de courte taille</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Siège arrière</td>
                    <td><p>De 1 à 5 ans</p></td>
                    <td><p>100 à 400 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de faire une sieste si le siège est inclinable</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Condamme le porte-bagages arrière</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Chariot</td>
                    <td><p>De 1 à 6 ans</p></td>
                    <td><p>500 à 2000 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de jouer et de dormir</li>
                            <li>Vient avec de l'espace supplémentaire de chargement</li>
                            <li>Certains modèles peuvent être utilisés comme poussette</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Lourd et encombrant sur les sentiers étroits</li>
                            <li>Prix élevé</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Siège sur cadre</td>
                    <td><p>De 2 à 8 ans</p></td>
                    <td><p>200 à 300 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de voir devant</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Place l'enfant près des jambes du parent</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Demi-vélo Weehoo</td>
                    <td><p>De 2 à 9 ans</p></td>
                    <td><p>500 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de choisir de pédaler</li>
                            <li>Permet à l'enfant de faire une petite sieste</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Peut être difficile de démonter pour le transport</li>
                            <li>Empêche l'utilisation de sacoches sur le porte-bagages</li>
                            <li>Peut aussi empêcher l'utilisation de sacoches latérales à l'arrière</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Remorquage de vélo FollowMe Tandem</td>
                    <td><p>De 3 à 9 ans</p></td>
                    <td><p>450 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de choisir de pédaler</li>
                            <li>Permet à l'enfant de pédaler de façon autonome</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Demi-vélo classique Trail-a-Bike</td>
                    <td><p>De 4 à 9 ans</p></td>
                    <td><p>400 $</p></td>
                    <td>
                        <ul>
                            <li>Permet à l'enfant de choisir de pédaler</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Empêche l'utilisation de sacoches sur le porte-bagages</li>
                        </ul>
                    </td>
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
        ul {
            margin: 0;
        }
    }
`

export default TableauSystemes;