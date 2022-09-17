import styled from "styled-components";
import { useContext } from "react";

import CarteAjout from "./CarteAjout";
import { CycloContext } from "../../../../CycloContext";

const FormAjout = () => {

    const { coordAjout } = useContext(CycloContext);

    const ajoutSite = (e) => {
        e.preventDefault()
        console.log("ajout site");
    }
    
    return (
        <Wrapper onSubmit={ajoutSite}>
            <fieldset>
                <legend>Ajout d'un site de camping</legend>
                <CarteAjout />
                {
                    coordAjout.lat &&
                    <Endroit>
                        <div>
                            <span>Latitude : </span>
                            <span>{coordAjout.lat.toFixed(4)}</span>
                        </div>
                        <div>
                            <span>Longitude : </span>
                            <span>{coordAjout.lng.toFixed(4)}</span>
                        </div>
                    </Endroit>
                }
                
                <Description
                    placeholder="Description détaillée : accès, quiétude, services, etc."
                    rows="10"
                    required
                />
                <Type>
                    <span>Type d'emplacement</span>
                    <select>
                        <option value="bivouac">Site non-officiel</option>
                        <option value="rustique">Site officiel pour cyclistes seulement OU à faible cout / gratuit</option>
                        <option value="proprio">Site offert par un propriétaire</option>
                    </select>
                </Type>
                <Contributeur>
                    <input
                        placeholder="Nom (facultatif)"
                        type="text"
                    />
                    <input
                        placeholder="courriel"
                        required
                        type="email"
                    />
                </Contributeur>
                <Legit>
                    <input type="checkbox" required />
                    <span>J'ai visité cet endroit et je me sentirais en sécurité dormir ici. Si j'ai un site offert par un ou une propriétaire, je confirme être celui-ci ou avoir la permission d'offrir l'hébergement sur mon terrain.</span>
                </Legit>
                <button type="submit">Ajouter</button>
            </fieldset>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    fieldset {
        legend {
            background-color: var(--c6);
            border-radius: 5px;
            color: var(--c0);
            padding: 5px 10px;
        }
        background-color: var(--c2);
        button {
            background-color: var(--c1);
            border-radius: 10px;
            cursor: pointer;
            display: block;
            margin: 10px auto;
            padding: 10px 15px;
            &:hover {
                box-shadow: 1px 1px var(--c6);
            }
        }
    }
`

const Endroit = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 50%;
        span {
            /* background-color: inherit; */
        }
    }
`

const Description = styled.textarea`
    border-radius: 5px;
    padding: 10px;
    width: 100%;
`

const Type = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    select {
        border-radius: 5px;
        padding: 5px;
        width: 40%;
    }
`

const Contributeur = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    > input {
        border-radius: 5px;
        margin: 0 5px;
        padding: 5px;
    }
`

const Legit = styled.label``

export default FormAjout;