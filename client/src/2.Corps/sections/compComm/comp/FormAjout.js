import styled from "styled-components";
import { useState, useContext } from "react";

import CarteAjout from "./CarteAjout";
import { CycloContext } from "../../../../CycloContext";
import TypeDeSite from "./TypeDeSite";
import TelevPhotos from "./TelevPhotos";
import Contributeur from "./Contributeur";

const FormAjout = () => {

    const { coordAjout } = useContext(CycloContext);

    const [champs, setChamps] = useState({
        description: "",
        nom: "",
        courriel: "",
        type: "",
        legit: false
    });

    const mAJDescription = (e) => setChamps(prec => ({ ...prec, description: e.target.value }));
    const mAJNom = (e) => setChamps(prec => ({ ...prec, nom: e.target.value }));
    const mAJCourriel = (e) => setChamps(prec => ({ ...prec, courriel: e.target.value }));
    const mAJType = (e) => setChamps(prec => ({ ...prec, type: e.target.value }));
    const mAJLegit = (e) => setChamps(prec => ({ ...prec, legit: e.target.checked }));

    const ajoutSite = (e) => {
        e.preventDefault()
        if (coordAjout.lat) {
            fetch("/api/nouveau-site", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    type: "feature",
                    properties: {
                        description: champs.description,
                        type: champs.type
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [coordAjout.lng, coordAjout.lat]
                    },
                    contributeur: {
                        nom: champs.nom,
                        courriel: champs.courriel
                    }
                })
            })
                .then(res => res.json())
                .then(req => console.log(req))
        } else {
            console.log("non");
        }
    }
    
    return (
        <Wrapper onSubmit={ajoutSite} encType="multipart/form-data">
            <fieldset>
                <legend>Ajout d'un site de camping</legend>
                <p>Cliquez sur la carte pour définir l'emplacement du terrain. Si vous faites une erreur, cliquez de nouveau. Un marqueur apparaitra au bon endroit.</p>
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
                    onChange={mAJDescription}
                    placeholder="Description détaillée : accès, quiétude, services, etc."
                    rows="10"
                    required
                    value={champs.description}
                />
                <TelevPhotos />
                <TypeDeSite mAJType={mAJType} />
                <Contributeur mAJNom={mAJNom} mAJCourriel={mAJCourriel} champs={champs} />
                <Legit>
                    <input
                        onChange={mAJLegit}
                        type="checkbox"
                        required
                        value={champs.legit}
                    />
                    <span>J'ai visité cet endroit et je me sentirais en sécurité dormir ici. Si j'ai un site offert par un ou une propriétaire, je confirme être celui-ci ou avoir la permission d'offrir l'hébergement sur mon terrain.</span>
                </Legit>
                <Envoyer type="submit">Ajouter</Envoyer>
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
    }
`

const Description = styled.textarea`
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
`

const Legit = styled.label`
    text-align: center;
`

const Envoyer = styled.button`
    background-color: var(--c1);
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 10px auto;
    padding: 10px 15px;
    &:hover {
        box-shadow: 1px 1px var(--c6);
    }
`

export default FormAjout;