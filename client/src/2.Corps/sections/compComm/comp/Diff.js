import styled from "styled-components";
import { useState, useEffect } from "react";

const Diff = () => {

    const [km, setKm] = useState(100);
    const [m, setM] = useState(100);
    const [jpm, setJpm] = useState();

    useEffect(() => {
        setJpm(parseFloat((m / km).toFixed(1)))
    }, [km, m])

    const couleurDiff = (unite, nombre) => {
        unite(parseInt(nombre))
    }

    let coul;
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
                    defaultValue="100"
                />
                <label htmlFor="calcA"> m de dénivelé</label>
                <div> sur </div>
                <input
                    id="calcB"
                    onChange={(e) => couleurDiff(setKm, e.target.value)}
                    min={10}
                    step={10}
                    type="number"
                    defaultValue="100"
                />
                <label htmlFor="calcB"> km</label>
                <div> = </div>
                {
                    km !== undefined && m !== undefined &&
                    <output>{jpm}</output>
                }
                {
                    jpm == 1
                        ? <span> juron/min*!</span>
                        : <span> jurons/min*!</span>
                }
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