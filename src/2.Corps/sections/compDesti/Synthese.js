import styled from "styled-components";

import trajets from "./donnees/trajets.json";

const ABCDEF = () => {
    return (
        <Synthese>
            <table>
                <thead>
                    <tr>
                        <th>Trajet</th>
                        <th>Début</th>
                        <th>Fin</th>
                        <th>Km</th>
                        <th>% en piste cyclable</th>
                        <th>Évaluation perso*</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trajets.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.trajet}</td>
                                    <td>{item.deA[0]}</td>
                                    <td>{item.deA[1]}</td>
                                    <td>{item.distance}</td>
                                    <td>{item.proportion}</td>
                                    {
                                        item.appreciation === null
                                            ? <td></td>
                                            : <td>{item.appreciation}</td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>* L'appréciation personnelle est basée sur la partie du trajet ayant été parcourue par l'auteur.</div>
        </Synthese>
    )
}

const Synthese = styled.div``

export default ABCDEF;