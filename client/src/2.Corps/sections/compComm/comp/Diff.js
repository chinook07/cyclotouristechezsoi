import styled from "styled-components";
import { useState, useEffect } from "react";

import mesurediff from "../images/mesuredifficulte.png";
import mesurediffcraque from "../images/mesuredifficultecraque.png";

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

    return (
        <Wrapper>
            <Cadran>
                {
                    jpm >= 9
                        ? <img src={mesurediffcraque} alt="un cadran craqué montrat plus que 9 jurons par minute" />
                        : <img src={mesurediff} alt={`un cadran montrant ${jpm} jurons par minute`} />
                }
                {
                    jpm < 9 &&
                        <Aiguille jpm={jpm} />
                }
            </Cadran>
            
            <form>
                <div>
                    <input
                        id="calcA"
                        min={0}
                        onChange={(e) => couleurDiff(setM, e.target.value)}
                        step={10}
                        type="number"
                        defaultValue="100"
                    />
                    <label htmlFor="calcA"> m de dénivelé</label>
                    <p> sur</p>
                </div>
                <div>
                    <input
                        id="calcB"
                        onChange={(e) => couleurDiff(setKm, e.target.value)}
                        min={10}
                        step={10}
                        type="number"
                        defaultValue="100"
                    />
                    <label htmlFor="calcB"> km</label>
                    <p> = </p>
                    {
                        km !== undefined && m !== undefined && isNaN(jpm) === false &&
                        <output>{jpm}</output>
                    }
                    {
                        jpm === 1
                            ? <p> juron/min*!</p>
                            : <p> jurons/min*!</p>
                    }
                </div>
                
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto 15px;
    form {
        display: flex;
        gap: 10px;
        justify-content: center;
        > div {
            align-items: center;
            display: flex;
            input {
                border-radius: 5px;
                padding: 10px;
                width: 85px;
                @media screen and (max-width: 350px) {
                    width: 75px;
                }
            }
            p {
                margin: 0;
            }
        }
        @media screen and (max-width: 600px) {
            flex-direction: column;
            gap: 15px;
            > div {
                justify-content: center;
            }
        }
    }
`

const Cadran = styled.div`
    margin: 20px auto;
    max-width: 500px;
    position: relative;
    img {
        display: block;
        
        width: 100%;
    }
`

const Aiguille = styled.div`
    background-color: red;
    height: 10px;
    left: 44%;
    position: absolute;
    top: 51.5%;
    transform: ${props => `rotate(${props.jpm * 27.85 - 198}deg)`};
    transform-origin: 23%;
    width: 120px;
    @media screen and (max-width: 600px) {
        left: 44%;
        height: 4%;
        transform-origin: 21%;
        width: 25%;
    }
`

export default Diff;