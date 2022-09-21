import styled from "styled-components";
import { useState, useEffect } from "react";

const CalculCarburant = () => {

    const [carb, setCarb] = useState();
    const [poids, setPoids] = useState();
    const [resultat, setResultat] = useState();

    const tare = {
        "100": 100,
        "230": 150,
        "450": 215
    }

    const choisirCarb = (e) => setCarb(parseInt(e.target.value));
    const choisirPoids = (e) => setPoids(parseInt(e.target.value));

    useEffect(() => {
        // if (poids > tare[carb] + carb) {
        //     console.log("err");
        // }
        if (carb && poids) {
            // setResultat(((poids / (carb + tare[carb])) * 100).toFixed())
            setResultat(((poids - tare[carb]) / carb * 100).toFixed())
        }
    }, [carb, poids])

    return (
        <Wrapper>
            <div>
                <span>J'ai une cartouche de</span>
                <label>
                    <input type="radio" value="100" name="choixCarb" onChange={choisirCarb} />
                    <span>100 g</span>
                </label>
                <label>
                    <input type="radio" value="230" name="choixCarb" onChange={choisirCarb} />
                    <span>230 g</span>
                </label>
                <label>
                    <input type="radio" value="450" name="choixCarb" onChange={choisirCarb} />
                    <span>450 g.</span>
                </label>
            </div>
            {
                carb &&
                <div>
                    <span>En ce moment, elle pèse</span>
                    <label>
                        <input type="number" min={tare[carb]} max={tare[carb] + carb} step="5" onChange={choisirPoids} />
                        <span> g.</span>
                    </label>
                </div>
            }
            {
                resultat >= 0 && resultat <= 100 &&
                <output>
                        <span>Il vous en reste donc {resultat} %, soit {poids - tare[carb]} g de carburant.</span>
                </output>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form``

export default CalculCarburant;