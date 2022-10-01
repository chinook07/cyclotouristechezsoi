import styled from "styled-components";
import { useState } from "react";

import trajetsDB from "./donnees/trajets.json";
import DetailsDuTrajet from "./comp/DetailsDuTrajet";

const Trajets = () => {

    const [trajetChoisi, setTrajetChoisi] = useState();
    const [trajetSelect, setTrajetSelect] = useState();

    const choisirTrajet = (e) => setTrajetChoisi(e.target.value);

    const changerTrajet = (nouveau) => {
        setTrajetChoisi(trajetsDB.find(item => item.id === nouveau).trajet)
    }

    return (
        <Wrapper>
            <Selectionnez>
                <label htmlFor="selecteurDeTrajet">Sélectionnez un trajet :</label>
                <select
                    id="selecteurDeTrajet"
                    onChange={choisirTrajet}
                    value={trajetSelect}
                >
                    {
                        trajetsDB.map((item, index) => {
                            return (
                                <option key={index} >{item.trajet}</option>
                            )
                        })
                    }
                </select>
            </Selectionnez>
            {
                trajetChoisi !== undefined &&
                <DetailsDuTrajet
                    itineraire={trajetChoisi}
                    changerTrajet={changerTrajet}
                />
            }
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
    select {
        margin-top: 5px;
        padding: 5px;
    }
`

export default Trajets;