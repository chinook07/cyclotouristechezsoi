import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListePers = ({ PackThis }) => {
    
    const [bagagesPers, setBagagesPers] = useState([]);

    const ajouterItemPers = (e, itemPers) => {
        e.preventDefault();
        console.log("ajout de ", itemPers);
        setBagagesPers((prev) => [...prev, itemPers])
    }

    return (
        <Wrapper>
            <Controle>
                <h3><FontAwesomeIcon icon={faList} /> Liste personnalisée</h3>
                <button>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </Controle>
            {
                bagagesPers.length > 0 &&
                <div>oui</div>
            }
            <form onSubmit={() => ajouterItemPers("chose")}>
                <input placeholder="Ajoutez quelque chose"></input>
            </form>
            
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

export default ListePers;