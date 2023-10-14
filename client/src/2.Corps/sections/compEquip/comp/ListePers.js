import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faList, faTrash, faCircleXmark, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const ListePers = () => {
    
    const [bagagesPers, setBagagesPers] = useState([]);
    const [entreePers, setEntreePers] = useState("");
    const [persPacked, setPersPacked] = useState([]);
    const [f5, setF5] = useState(0);
    const [erreurEntree, setErreurEntree] = useState(false);

    useEffect(() => {
        const enMemoirePers = localStorage.getItem("pers");
        enMemoirePers !== null &&
            setBagagesPers(enMemoirePers.split(",").map(item => item));
        const enMemoirePersPacked = localStorage.getItem("packedPers");
        enMemoirePersPacked !== null &&
            setPersPacked(enMemoirePersPacked.split(",").map(item => item));
    }, [])

    const mettreEntreeAJour = (terme) => {
        setErreurEntree(false);
        setEntreePers(terme);
    };

    const ajouterItemPers = (e) => {
        e.preventDefault();
        if (entreePers !== "") {
            setBagagesPers((prev) => [...prev, entreePers]);
            localStorage.setItem("pers", [...bagagesPers, entreePers]);
            setEntreePers("");
        } else {
            setErreurEntree(true);
        }
    }

    const viderListePers = () => {
        setErreurEntree(false);
        setBagagesPers([])
        localStorage.removeItem("pers");
        localStorage.removeItem("packedPers");
    };

    const enleverItem = (item) => {
        setErreurEntree(false);
        let nouvelleListe = bagagesPers;
        nouvelleListe.splice(nouvelleListe.indexOf(item), 1);
        setF5(f5 + 1);
        setBagagesPers(nouvelleListe);
        localStorage.setItem("pers", nouvelleListe);
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
                <h2>
                    <FontAwesomeIcon icon={faList} />
                    <span> Liste personnalisée</span>
                </h2>
                <button onClick={viderListePers}
                    aria-label="vider liste personnalisée"
                    title="vider liste"
                >
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
                                <button
                                    onClick={() => packThisPers(item)}
                                >
                                    {
                                        persPacked.includes(item)
                                            ? <FontAwesomeIcon icon={faCheck} />
                                            : <FontAwesomeIcon icon={faPlus} />
                                    }
                                    <span>{item}</span>
                                </button>
                                <button onClick={() => enleverItem(item)} aria-label="enlever item">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                
                            </ChosePers>
                        ) 
                    })
                }
                <form onSubmit={ajouterItemPers} title="ajouter item">
                    <label htmlFor="ajoutItem">Nouvel item : </label>
                    <div>
                        <input
                            id="ajoutItem"
                            onChange={(e) => mettreEntreeAJour(e.target.value)}
                            placeholder="Ajoutez quelque chose"
                            type="text"
                            value={entreePers}
                        />
                        <button type="submit">Ajouter</button>
                    </div>
                    {
                        erreurEntree &&
                        <Err>Que souhaitez-vous ajouter sur votre liste?</Err>
                    }
                </form>
            </Reste>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Controle = styled.div`
    align-items: center;
    display: flex;
    h2 {
        font-size: 19px;
    }
    > button {
        margin-left: 10px;
        padding: 5px 10px;
    }
`

const Reste = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    form {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        > div {
            align-items: center;
            display: flex;
            gap: 12px;
            input {
                border-radius: 15px;
                padding: 8px 12px;
            }
            button {
                background-color: var(--c4);
                border: 2px solid var(--c10);
                border-radius: 15px;
                color: var(--c11);
                cursor: pointer;
                padding: 8px 12px;
            }
        }
        @media screen and (max-width: 450px) {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
`

const ChosePers = styled.div`
    background-color: var(${props => props.styleDiff.fond});
    border: 2px solid var(${props => props.styleDiff.front});
    border-radius: 15px;
    color: var(${props => props.styleDiff.coul});    
    margin: 5px 0;
    button {
        background-color: initial;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 8px 0;
    }
    svg {
        margin: 0 12px;
    }
`

const Err = styled.p`
    color: var(--c6);
    margin: 0;
`

export default ListePers;