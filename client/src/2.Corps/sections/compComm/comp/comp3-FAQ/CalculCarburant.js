import styled from "styled-components";
import { useState, useEffect } from "react";

const CalculCarburant = () => {

    const [carb, setCarb] = useState();
    const [poids, setPoids] = useState();
    const [resultat, setResultat] = useState();
    const [tropGros, setTropGros] = useState(false);

    const tare = {
        "100": 100,
        "230": 150,
        "450": 215
    }

    const choisirCarb = (e) => setCarb(parseInt(e.target.value));
    const choisirPoids = (e) => {
        setPoids(parseInt(e.target.value));
        if (e.target.value > carb + tare[carb]) {
            setTropGros(true);
        } else {
            setTropGros(false);
        }
    };

    useEffect(() => {
        if (carb && poids) {
            setResultat(((poids - tare[carb]) / carb * 100).toFixed())
        }
    }, [carb, poids])

    return (
        <Wrapper>
            <Choix>
                <span>J'ai une cartouche de</span>
                <span>
                    {
                        Object.entries(tare).map((item, index) => {
                            return (
                                <label key={index}>
                                    <input type="radio" value={item[0]} name="choixCarb" onChange={choisirCarb} />
                                    <span>{item[0]} g</span>
                                </label>
                            )
                        })
                    }
                </span>
                
            </Choix>
            {
                carb &&
                <Poids>
                    <span>Poids actuel : </span>
                    <label>
                        <input type="number" min={tare[carb]} max={tare[carb] + carb} step="5" onChange={choisirPoids} />
                        <span> g.</span>
                    </label>
                </Poids>
            }
            {
                resultat >= 0 && resultat <= 100 &&
                <output>
                        <div>Carburant restant : {resultat} % / {poids - tare[carb]} g</div>
                        <meter min="0" low="50" value={poids - tare[carb]} max={carb}></meter>
                </output>
            }
            {
                tropGros &&
                <Rouge>Attention, la cartouche ne peut pas dépasser son poids original.</Rouge>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    margin-top: 10px;
    output {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        div {
            margin-right: 10px;
        }
        meter {
            height: 25px;
        }
    }
`

const Choix = styled.div`
    margin: 15px 0;
    @media screen and (max-width: 430px) {
        display: flex;
        flex-direction: column;
    }
`

const Poids = styled.div`
    margin-bottom: 10px;
    input {
        border-radius: 5px;
        padding: 10px;
    }
`

const Rouge = styled.p`
    font-weight: bold;
`

export default CalculCarburant;