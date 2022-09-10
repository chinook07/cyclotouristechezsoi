import styled from "styled-components";

import indexVilles from "../donnees/indexVilles.json";

const Resultats = ({ recherchee, setVilleSouhaitee }) => {

    const toutesVilles = Object.keys(indexVilles);
    const total = toutesVilles.filter(ville => ville.toLowerCase().includes(recherchee.toLowerCase()))
    if (recherchee.toLowerCase().includes("st-")) {
        let rechercheeDupl1 = recherchee.replace("st-", "saint-")
        let autresResultats1 = toutesVilles.filter(ville => ville.toLowerCase().includes(rechercheeDupl1.toLowerCase()));
        autresResultats1.forEach(item => total.push(item))
    }
    if (recherchee.toLowerCase().includes("ste")) {
        let rechercheeDupl2 = recherchee.replace("ste", "sainte")
        let autresResultats2 = toutesVilles.filter(ville => ville.toLowerCase().includes(rechercheeDupl2.toLowerCase()));
        autresResultats2.forEach(item => total.push(item))
    }
    // if (recherchee.toLowerCase().includes("e")) {
    //     console.log('e');
    //     let autresResultats3, rechercheeDup3;
    //     rechercheeDup3 = recherchee.replace("e", "é")
    //     autresResultats3 = toutesVilles.filter(ville => ville.toLowerCase().includes(rechercheeDup3.toLowerCase()));
    //     autresResultats3.forEach(item => total.push(item))
    //     rechercheeDup3 = recherchee.replace("e", "è")
    //     autresResultats3 = toutesVilles.filter(ville => ville.toLowerCase().includes(rechercheeDup3.toLowerCase()));
    //     autresResultats3.forEach(item => total.push(item))
    //     rechercheeDup3 = recherchee.replace("e", "ê")
    //     autresResultats3 = toutesVilles.filter(ville => ville.toLowerCase().includes(rechercheeDup3.toLowerCase()));
    //     autresResultats3.forEach(item => total.push(item))
    // }

    const choisirVille = (ville) => setVilleSouhaitee(ville);

    return (
        <Wrapper>
            <div>Résultats :</div>
            <ul>
                {
                    total.length > 0 && recherchee.length > 2 &&
                    total.map((item, index) => {
                        return <li key={index} onClick={() => choisirVille(item)}>{item}</li>
                    })
                }
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ul {
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
    }
`

export default Resultats;