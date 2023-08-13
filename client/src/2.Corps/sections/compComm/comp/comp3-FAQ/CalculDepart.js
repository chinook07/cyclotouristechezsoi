import styled from "styled-components";
import { useState } from "react";

const CalculDepart = () => {

    const [jours, setJours] = useState(0);
    const [meilleursJours, setMeilleursJours] = useState();

    let nombre = 0;

    const choisirJours = (e) => {
        nombre = parseInt(e.target.value);
        if (nombre > 1) {
            setJours(nombre);
            switch (nombre % 7) {
                case 0:
                    setMeilleursJours(["samedi", "dimanche"]);
                    break;
                case 1:
                    setMeilleursJours();
                    break;
                case 2:
                    setMeilleursJours(["dimanche", "lundi", "mardi", "mercredi", "jeudi"]);
                    break;
                case 3:
                    setMeilleursJours(["dimanche", "lundi", "mardi", "mercredi"]);
                    break;
                case 4:
                    setMeilleursJours(["dimanche", "lundi", "mardi"]);
                    break;
                case 5:
                    setMeilleursJours(["dimanche", "lundi"]);
                    break;
                case 6:
                    setMeilleursJours(["dimanche"]);
                    break;
                default:
                    break;
            }
        } else {
            setJours(0);
            setMeilleursJours();
        }
    };

    return (
        <form onSubmit={e => { e.preventDefault(); }}>
            <legend>Quand prendre la route</legend>
            <Champ>
                <Entree>
                    <label htmlFor="nJours">Nombre de jours :</label>
                    <input
                        id="nJours"
                        min="2"
                        name="calculDepart"
                        onChange={choisirJours}
                        type="number"
                    />
                </Entree>
                {
                    jours > 1 &&
                    <output name="calculDepart">
                        {
                            meilleursJours === undefined
                                ? <p>En voyageant pendant {jours} jours, il n'y aucun bénéfice à partir une journée ou une autre.</p>
                                : meilleursJours.length === 1
                                    ? <p>En voyageant pendant {jours} jours, il vaut mieux partir un dimanche.</p>
                                    : <p>En voyageant pendant {jours} jours, il vaut mieux partir entre le {meilleursJours[0]} et le {meilleursJours[meilleursJours.length - 1]}.</p>
                        }
                    </output>
                }
                {
                    jours <= 1 &&
                        <Erreur>Veuillez entrer un nombre égal ou supérieur à 2.</Erreur>
                }
            </Champ>
        </form>
    )
}

const Champ = styled.fieldset`
    border-radius: 5px;
    margin-top: 5px;
`

const Entree = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    input {
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        width: 80px;
    }
`

const Erreur = styled.p`
    color: #970000;
`

export default CalculDepart;