import styled from "styled-components";
import { useState } from "react";

const Diff = () => {

    const [km, setKm] = useState();
    const [m, setM] = useState();
    
    const calcul = (m / km).toFixed(1);

    // corrections

    const couleurDiff = (unite, nombre) => {
        console.log( nombre);
        unite(nombre)
    }

    return (
        <Wrapper>
            <svg></svg>
            <form>
                <input
                    id="calcA"
                    min={0}
                    onChange={(e) => couleurDiff(setM, e.target.value)}
                    step={10}
                    type="number"
                    defaultValue="10"
                />
                <label htmlFor="calcA"> m de dénivelé</label>
                <div> sur </div>
                <input
                    id="calcB"
                    onChange={(e) => couleurDiff(setKm, e.target.value)}
                    min={0}
                    step={100}
                    type="number"
                    defaultValue="100"
                />
                <label htmlFor="calcB"> km</label>
                <div> = </div>
                {
                    km !== undefined && m !== undefined &&
                    <output>{calcul}</output>
                }
                
                <div> jurons/min*!</div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    form {
        display: flex;
        input {
            border-radius: 5px;
            padding: 10px;
            width: 60px;
        }
    }
`

export default Diff;