import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faList, faTrash, faCircleXmark, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const ListePers = ({ PackThis }) => {
    
    const [bagagesPers, setBagagesPers] = useState([]);
    const [entreePers, setEntreePers] = useState("");

    const mettreEntreeAJour = (terme) => setEntreePers(terme);

    const ajouterItemPers = (e) => {
        e.preventDefault();
        setBagagesPers((prev) => [...prev, entreePers]);
        setEntreePers("");
        // stockage
    }

    const viderListePers = () => setBagagesPers([]);

    const enleverItem = (item) => {
        const nouvelleListe = bagagesPers;
        nouvelleListe.splice(bagagesPers.indexOf(item), 1);
        console.log(nouvelleListe);
        setBagagesPers(nouvelleListe);
        // ne fonctionne pas bien
    }

    // useEffect(() => {
    //     console.log("effect");
    // }, [bagagesPers])

    return (
        <Wrapper>
            <Controle>
                <h3><FontAwesomeIcon icon={faList} /> Liste personnalisée</h3>
                <button onClick={viderListePers}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </Controle>
            <Reste>
                {
                    bagagesPers.map((item, index) => {
                        return (
                            <ChosePers key={index}>
                                <button>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>{item}</span>
                                </button>
                                <button onClick={() => enleverItem(item)}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                
                            </ChosePers>
                        ) 
                    })
                }
                <form onSubmit={ajouterItemPers}>
                    <input
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
    border: 2px solid var(--c3);
    border-radius: 15px;
    
    margin: 5px;
    padding: 8px 12px;
    button {
        border: none;
        cursor: pointer;
    }
    svg {
        margin-left: 5px;
    }
`

export default ListePers;