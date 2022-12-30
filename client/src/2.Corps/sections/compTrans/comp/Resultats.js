import styled from "styled-components";

import indexVilles from "../donnees/indexVilles.json";

const Resultats = ({ recherchee, setVilleSouhaitee }) => {

    const toutesVilles = Object.keys(indexVilles);
    const total = toutesVilles.filter(ville => ville.toLowerCase().includes(recherchee.toLowerCase()));

    const remplacement = ["st-", "St-", "ste", "Ste", "île", "Île", "a", "â", "e", "e", "o"];
    const remplacee = ["saint-", "Saint-", "sainte", "Sainte-", "ile", "Ile", "à", "â", "é", "è", "ô"]

    remplacement.forEach((item, index) => {
        if (recherchee.includes(item)) {
            let recherchee2 = recherchee.replace(item, remplacee[index]);
            let plusDeResultats = toutesVilles.filter(ville => ville.toLowerCase().includes(recherchee2.toLowerCase()));
            plusDeResultats.forEach(item => total.push(item))
            total.sort();
        }
    })

    const choisirVille = (ville) => setVilleSouhaitee(ville);

    if (recherchee.length > 2) {
        return (
            <>
                {
                    total.length === 0
                        ? <Aucun>
                            <div>Aucun résultat.</div>
                            <ul>
                                <li>Il y a peut-être une erreur d'orthographe.</li>
                                <li>Attention aux signes de pontuation.</li>
                                <li>Il n'y a peut-être aucun transport en commun dans cette municipalité. Essayez une ville à proximité.</li>
                            </ul>
                        </Aucun>
                        : <div>
                            <p>Résultats :</p>
                            <Villes>
                                {
                                    total.length > 0 &&
                                    total.map((item, index) => {
                                        return <li key={index} onClick={() => choisirVille(item)}>{item}</li>
                                    })
                                }
                            </Villes>
                        </div>
                }
                
            </>
        )
    }
    
}

const Aucun = styled.div`
    > div {
        color: red;
    }
`

const Villes = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    li {
        background-color: var(--c1);
        border-radius: 3px;
        cursor: pointer;
        margin: 0 10px 10px 0;
        padding: 5px;
        &:hover {
            background-color: var(--c2);
        }
        &:active {
            background-color: var(--c3);
        }
    }
`

export default Resultats;