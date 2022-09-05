import styled from "styled-components";
import { useState } from "react";

import trajetsDB from "./donnees/trajets.json";

const Trajets = () => {
    return (
        <Wrapper>
            <Selectionnez>
                <label>Sélectionnez un trajet :</label>
                <select>
                    {
                        trajetsDB.map((item, index) => {
                            return (
                                <option key={index}>{item.trajet}</option>
                            )
                        })
                    }
                </select>
            </Selectionnez>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Selectionnez = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    max-width: 250px;
    text-align: center;
`

export default Trajets;