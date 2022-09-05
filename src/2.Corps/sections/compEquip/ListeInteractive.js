import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import listeEquipement from "./donnees/listeEquipment.json";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const ABCDEF = () => {

    const [bagages, setBagages] = useState([]);
    const [camping, setCamping] = useState(true);

    useEffect(() => {
        const enMemoire = localStorage.getItem("packed");
        enMemoire !== null &&
            setBagages(enMemoire.split(",").map(item => parseInt(item)));
    }, [])

    const packThis = (objet) => {
        if (!bagages.includes(objet.id)) {
            setBagages((prev) => [...prev, objet.id])
            localStorage.setItem("packed", [...bagages, objet.id])
        } else {
            setBagages((current) => current.filter(item => item !== objet.id))
            localStorage.setItem("packed", bagages.filter(item => item !== objet.id))
        }
    }

    const reinit = () => {
        setBagages([]);
        localStorage.removeItem("packed")
    }

    return (
        <ListeInteractive>
            <div>Profil du voyage</div>
            <Panneau>
                <button>En tente</button>
                <button>Dans un lit</button>
            </Panneau>
            <Liste>
                {
                    listeEquipement.map((itemCat, indexCat) => {
                        return (
                            <Categorie key={indexCat}>
                                <div>{itemCat.categorie}</div>
                                <div>
                                    {
                                        itemCat.articles.map((itemObj, indexObj) => {
                                            return (
                                                <Chose
                                                    onClick={() => packThis(itemObj)}
                                                    key={indexObj}
                                                >
                                                    {
                                                        bagages.includes(itemObj.id)
                                                            ? <FontAwesomeIcon icon={faCheck} />
                                                            : <FontAwesomeIcon icon={faPlus} />
                                                    }
                                                    {itemObj.objet}
                                                </Chose>
                                            )
                                        })
                                    }
                                </div>
                            </Categorie>
                        )
                    })
                }
            </Liste>
            <Controles>
                <button>Imprimer</button>
                <button onClick={reinit}>Réinitialiser</button>
            </Controles>
        </ListeInteractive>
    )
}

const ListeInteractive = styled.div``

const Panneau = styled.div``

const Liste = styled.div``

const Categorie = styled.div``

const Chose = styled.button`
    border: 2px solid var(--c5);
    border-radius: 15px;
    background-color: var(--c1);
    cursor: pointer;
    margin: 5px;
    padding: 8px 12px;
`

const Controles = styled.div``

export default ABCDEF;