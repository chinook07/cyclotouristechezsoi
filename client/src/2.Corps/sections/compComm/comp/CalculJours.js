import styled from "styled-components";
import { useState, useEffect } from "react";

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
        if (distance / nJoursCalcul1 > type + 10) {
            nJoursCalcul1++
        }
        if (nJoursCalcul1 >= 12) {
            console.log("repos de ", parseInt((nJoursCalcul1) / 7));
            setRepos(parseInt((nJoursCalcul1) / 7))
            // ajouter jours de repos
        }
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
            <div>Profil du voyageur :</div>
            <Choix>
                <label>
                    <input type="radio" name="calculJours" value="50" onChange={mAJType} />
                    <span>Cyclocontemplateur, 40 à 60 km/jr</span>
                </label>
                <label>
                    <input type="radio" name="calculJours" value="70" onChange={mAJType} />
                    <span>Cyclotouriste relaxe, 60 à 80 km/jr</span>
                </label>
                <label>
                    <input type="radio" name="calculJours" value="90" onChange={mAJType} />
                    <span>Cyclotouriste motivé, 80 à 100 km/jr</span>
                </label>
                <label>
                    <input type="radio" name="calculJours" value="110" onChange={mAJType} />
                    <span>Cyclosportif, 100 à 120 km/jr</span>
                </label>
            </Choix>
            <label>
                <span>Trajet total (km)</span>
                <input type="number" min="70" step="10" onChange={mAJTotal} value={distance} />
            </label>
            {
                type && nJours > 1 &&
                <output>
                        {
                            tropCourt
                                ? <span>Pas assez long pour du cyclotourisme</span>
                                : <span>{nJours} jours × {distJr} km{repos > 0 && <span> + {repos} jours de repos</span>}</span>
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

const Choix = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export default CalculJours;