import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faList, faTrash, faCircleXmark, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const ListePers = () => {
    
    const [bagagesPers, setBagagesPers] = useState([]);
    const [entreePers, setEntreePers] = useState("");
    const [persPacked, setPersPacked] = useState([]);
    const [f5, setF5] = useState(0);

    useEffect(() => {
        const enMemoirePers = localStorage.getItem("pers");
        enMemoirePers !== null &&
            setBagagesPers(enMemoirePers.split(",").map(item => item));
        const enMemoirePersPacked = localStorage.getItem("packedPers");
        enMemoirePersPacked !== null &&
            setPersPacked(enMemoirePersPacked.split(",").map(item => item));
    }, [])

    const mettreEntreeAJour = (terme) => setEntreePers(terme);

    const ajouterItemPers = (e) => {
        e.preventDefault();
        setBagagesPers((prev) => [...prev, entreePers]);
        localStorage.setItem("pers", [...bagagesPers, entreePers]);
        setEntreePers("");
    }

    const viderListePers = () => {
        setBagagesPers([])
        localStorage.removeItem("pers");
        localStorage.removeItem("packedPers");
    };

    const enleverItem = (item) => {
        const nouvelleListe = bagagesPers;
        nouvelleListe.splice(bagagesPers.indexOf(item), 1);
        console.log(nouvelleListe);
        setBagagesPers(nouvelleListe);
        localStorage.setItem("pers", bagagesPers.filter(element => element !== item));
        persPacked.includes(item) &&
            localStorage.setItem("packedPers", persPacked.filter(element => element !== item));
        
    }

    const packThisPers = (item) => {
        if (!persPacked.includes(item)) {
            setPersPacked((prev) => [...prev, item])
            localStorage.setItem("packedPers", [...persPacked, item])
        } else {
            setPersPacked((current) => current.filter(element => element !== item))
            localStorage.setItem("packedPers", persPacked.filter(element => element !== item))
        }
    }

    return (
        <Wrapper>
            <Controle>
                <h3>
                    <FontAwesomeIcon icon={faList} />
                    <span> Liste personnalisée</span>
                </h3>
                <button onClick={viderListePers} aria-label="vider liste personnalisée">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </Controle>
            <Reste>
                {
                    bagagesPers.map((item, index) => {
                        return (
                            <ChosePers
                                key={index}
                                styleDiff={
                                    persPacked.includes(item)
                                        ? { fond: "--c6", front: "--c1", coul: "--c1" }
                                        : { fond: "--c1", front: "--c5", coul: "--c6" }
                                }
                            >
                                <NomItem
                                    onClick={() => packThisPers(item)}
                                >
                                    {
                                        persPacked.includes(item)
                                            ? <FontAwesomeIcon icon={faCheck} />
                                            : <FontAwesomeIcon icon={faPlus} />
                                    }
                                    <span>{item}</span>
                                </NomItem>
                                <button onClick={() => enleverItem(item)} aria-label="enlever item">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                
                            </ChosePers>
                        ) 
                    })
                }
                <form onSubmit={ajouterItemPers} title="ajouter item">
                    <label htmlFor="ajoutItem">Nouvel item : </label>
                    <input
                        id="ajoutItem"
                        onChange={(e) => mettreEntreeAJour(e.target.value)}
                        placeholder="Ajoutez quelque chose"
                        value={entreePers}
                    />
                </form>
            </Reste>
                    
            
            
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Controle = styled.div`
    align-items: center;
    
    display: flex;
    > button {
        margin-left: 10px;
        padding: 5px 10px;
    }
`

const NomItem = styled.button`
    
`

const Reste = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    input {
        border-radius: 15px;
        margin: 5px;
        padding: 8px 12px;
    }
`

const ChosePers = styled.div`
    background-color: var(${props => props.styleDiff.fond});
    border: 2px solid var(${props => props.styleDiff.front});
    border-radius: 15px;
    color: var(${props => props.styleDiff.coul});    
    margin: 5px;
    button {
        background-color: initial;
        border: none;
        color: inherit;
        cursor: pointer;
        margin: 8px 0;
    }
    svg {
        margin: 0 12px;
    }
`

export default ListePers;