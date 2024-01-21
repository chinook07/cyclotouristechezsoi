import styled from "styled-components";
import { useState, useEffect } from "react";

import distanceParJr from "../../donnees/distancesParJr.json";

const CalculJours = () => {

    const [type, setType] = useState();
    const [distance, setDistance] = useState(70);
    const [nJours, setNJours] = useState();
    const [distJr, setDistJr] = useState();
    const [tropCourt, setTropCourt] = useState(false);
    const [repos, setRepos] = useState(0)

    const mAJType = (e) => setType(parseInt(e.target.value));
    const mAJTotal = (e) => setDistance(parseInt(e.target.value))

    useEffect(() => {
        let nJoursCalcul1 = parseInt((distance / type).toFixed());

        if (distance / nJoursCalcul1 > type + 10) nJoursCalcul1++;
        if (nJoursCalcul1 >= 12) setRepos(parseInt((nJoursCalcul1) / 7));
        if (nJoursCalcul1 < 12) setRepos(0)
        if (nJoursCalcul1 <= 1) {
            setTropCourt(true);
        } else {
            setTropCourt(false);
            setNJours(nJoursCalcul1);
            setDistJr(parseInt((distance / nJoursCalcul1).toFixed()));
        }
    }, [type, distance])

    return (
        <Wrapper>
            <Quadri>
                <legend>Km/jr</legend>
                {
                    distanceParJr.map((item, index) => {
                        return (
                            <>
                                <input
                                    id={`profil${index}`}
                                    type="radio"
                                    name="calculJours"
                                    onChange={mAJType}
                                    value={item.distance}
                                />
                                <label htmlFor={`profil${index}`}>
                                    <span>{item.nom}</span>
                                    <span>{`${item.distance - 10}–${item.distance + 10}`}</span>
                                </label>
                            </>
                        )
                    })
                }
            </Quadri>
            <label>
                <span>Trajet total (km) : </span>
                <Km type="number" min="70" step="10" onChange={mAJTotal} value={distance} />
            </label>
            {
                type && nJours > 1 &&
                <output>
                        {
                            tropCourt
                                ? <span>Pas assez long pour du cyclotourisme</span>
                                : <span>{!isNaN(nJours) && nJours} jours × {!isNaN(distJr) && distJr} km{repos > 0 && <span> + {repos} jour{repos > 1 && <span>s</span>} de repos</span>}</span>
                        }
                </output>
            }
        </Wrapper>
    )
}

const Wrapper = styled.form`
    text-align: center;
    output {
        display: block;
        font-weight: bold;
        margin-top: 10px;
    }
`

const Quadri = styled.fieldset`
    border: none;
    display: grid;
    gap: 5px 15px;
    grid-template-columns: auto auto;
    justify-content: center;
    margin: 12px auto;
    width: fit-content;
    label {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    legend {
        text-align: right;
    }
    @media screen and (max-width: 400px) {
        gap: 5px 5px;
    }
`

const Km = styled.input`
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 80px;
`

export default CalculJours;