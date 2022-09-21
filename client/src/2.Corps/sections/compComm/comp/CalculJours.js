import styled from "styled-components";
import { useState, useEffect } from "react";

const CalculJours = () => {

    const [type, setType] = useState();
    const [total, setTotal] = useState(50);
    const [nJours, setNJours] = useState();
    const [distJr, setDistJr] = useState();
    const [tropCourt, setTropCourt] = useState(false);

    const mAJType = (e) => setType(parseInt(e.target.value));
    const mAJTotal = (e) => setTotal(parseInt(e.target.value))

    useEffect(() => {
        let moyennee = parseInt(total / type);
        if (total / moyennee > type + 10) {
            moyennee++
            if (moyennee <= 1) {
                setTropCourt(true)
            } else {
                setNJours(moyennee)
                setDistJr(parseInt(total / moyennee))
            }
        }
        // cacher si type n'est pas sélectionné
        
        
    }, [type, total])

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
                <input type="number" min="50" step="10" onChange={mAJTotal} value={total} />
            </label>
            {
                tropCourt
                    ? <output>Pas assez long pour du cyclotourisme</output>
                    : <output>{nJours} jours × {distJr} km</output>
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